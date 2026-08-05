import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Camera,
  Upload,
  Dog,
  Check,
  Sparkles,
  RefreshCw,
  Scale,
  Utensils,
  Heart,
  Edit3,
  Trash2,
  AlertCircle,
  Calendar,
  Award,
  ChevronRight,
  ShieldAlert,
  Bot,
  Calculator,
  User,
  Sliders,
  X
} from 'lucide-react';
import { AgeGroup, DogProfile } from '../types';

const COMMON_BREEDS_PT = [
  'Vira-lata / Sem Raça Definida (SRD)',
  'Golden Retriever',
  'Shih Tzu',
  'Poodle',
  'Bulldog Francês',
  'Yorkshire Terrier',
  'Spitz Alemão / Lulu da Pomerânia',
  'Labrador Retriever',
  'Pastor Alemão',
  'Dachshund / Teckel (Salsicha)',
  'Pug',
  'Rottweiler',
  'Beagle',
  'Maltês',
  'Border Collie',
  'Pinscher',
  'Cocker Spaniel',
  'Lhasa Apso',
  'Outra Raça'
];

const PRESET_PHOTOS = [
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600'
];

export const OwnerDashboard: React.FC = () => {
  const { language, dogProfile, setDogProfile, portionResult, setActiveTab } = useApp();
  const isPt = language === 'pt';

  // Form State initialized from Context
  const [formData, setFormData] = useState<DogProfile>({ ...dogProfile });

  // Camera & Photo State
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [photoPreview, setPhotoPreview] = useState<string | undefined>(dogProfile.photoUrl);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null);

  // New allergy input buffer
  const [allergyInput, setAllergyInput] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  // Keep formData synced if external context changes (unless user touched form)
  useEffect(() => {
    setPhotoPreview(dogProfile.photoUrl);
  }, [dogProfile.photoUrl]);

  // Clean up media stream on unmount or camera close
  const stopCamera = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Start Camera Stream
  const startCamera = async (mode: 'user' | 'environment' = facingMode) => {
    setCameraError(null);
    stopCamera();

    try {
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: mode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err: any) {
      console.error('Camera access error:', err);
      let errorText = isPt
        ? 'Não foi possível acessar a câmera. Verifique se deu permissão no seu navegador ou tente fazer upload de uma foto.'
        : 'Could not access the camera. Please check browser permissions or upload a photo.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        errorText = isPt
          ? 'Permissão de câmera negada. Permita o acesso nas configurações do navegador.'
          : 'Camera permission denied. Please allow access in browser settings.';
      }
      setCameraError(errorText);
      setIsCameraActive(false);
    }
  };

  const switchCamera = () => {
    const nextMode = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(nextMode);
    startCamera(nextMode);
  };

  // Capture Photo from Canvas
  const takeSnapshot = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    const width = video.videoWidth || 640;
    const height = video.videoHeight || 480;

    canvas.width = width;
    canvas.height = height;

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, width, height);

    // Get Data URL (base64 image)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
    setPhotoPreview(dataUrl);
    setFormData((prev) => ({ ...prev, photoUrl: dataUrl }));

    stopCamera();
  };

  // File Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(isPt ? 'Por favor selecione um arquivo de imagem (JPEG ou PNG).' : 'Please select an image file (JPEG or PNG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoPreview(result);
        setFormData((prev) => ({ ...prev, photoUrl: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Preset Selection
  const handleSelectPreset = (url: string) => {
    setPhotoPreview(url);
    setFormData((prev) => ({ ...prev, photoUrl: url }));
  };

  // Allergy Management
  const handleAddAllergy = () => {
    if (!allergyInput.trim()) return;
    const clean = allergyInput.trim();
    if (!formData.allergies?.includes(clean)) {
      setFormData((prev) => ({
        ...prev,
        allergies: [...(prev.allergies || []), clean],
      }));
    }
    setAllergyInput('');
  };

  const handleRemoveAllergy = (allergy: string) => {
    setFormData((prev) => ({
      ...prev,
      allergies: prev.allergies?.filter((a) => a !== allergy) || [],
    }));
  };

  // Save Form Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDogProfile(formData);

    setSaveSuccessMessage(
      isPt
        ? `Perfil do(a) ${formData.name || 'seu cão'} atualizado com sucesso!`
        : `Profile for ${formData.name || 'your dog'} updated successfully!`
    );

    setTimeout(() => {
      setSaveSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden border border-stone-800">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <User className="w-3.5 h-3.5" />
              <span>{isPt ? 'Painel do Tutor / Perfil do Cão' : 'Owner Dashboard / Pet Profile'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <span>{isPt ? `Perfil do ${dogProfile.name || 'Pet'}` : `${dogProfile.name || 'Pet'}'s Profile`}</span>
              <span className="text-xl">🐾</span>
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {isPt
                ? 'Envie uma foto do seu cão ou escolha um modelo de avatar. Personalize o nome, raça, idade e necessidades nutricionais para adaptar as calculadoras e receitas.'
                : 'Upload a photo of your dog or select a sample photo. Customize name, breed, age, and nutritional needs to tailor calculations and recipes.'}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab('calculator')}
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold border border-stone-700 flex items-center gap-2 transition-all shadow"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>{isPt ? 'Calculadora' : 'Calculator'}</span>
            </button>
            <button
              onClick={() => setActiveTab('recipes')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Utensils className="w-4 h-4" />
              <span>{isPt ? 'Ver Receitas' : 'View Recipes'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast Success Message */}
      {saveSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-bold text-sm flex items-center justify-between shadow-lg animate-bounce">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 bg-white/20 rounded-full p-1" />
            <span>{saveSuccessMessage}</span>
          </div>
          <button onClick={() => setSaveSuccessMessage(null)} className="text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Grid: Photo Capture + Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 Cols): Dog Photo Capture & Live Summary */}
        <div className="lg:col-span-5 space-y-6">
          {/* Photo Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-5 text-center">
            <div className="flex items-center justify-between text-left border-b border-stone-100 pb-3">
              <h2 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                <Camera className="w-5 h-5 text-emerald-600" />
                <span>{isPt ? 'Foto do Pet' : 'Pet Photo'}</span>
              </h2>
              <span className="text-xs text-stone-600 font-medium">
                {isPt ? 'Câmera ao Vivo / Arquivo' : 'Live Camera / Upload'}
              </span>
            </div>

            {/* Photo Viewport / Camera Stream */}
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-inner bg-stone-900 flex items-center justify-center group">
              {isCameraActive ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transform scale-x-[-1]"
                />
              ) : photoPreview ? (
                <img
                  src={photoPreview}
                  alt={formData.name || 'Dog'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-stone-400 flex flex-col items-center gap-2 p-4">
                  <Dog className="w-16 h-16 text-stone-500" />
                  <span className="text-xs">{isPt ? 'Nenhuma foto definida' : 'No photo set'}</span>
                </div>
              )}

              {/* Hidden Canvas for Snapshots */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Overlay camera active badge */}
              {isCameraActive && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span>{isPt ? 'CÂMERA ATIVA' : 'CAMERA LIVE'}</span>
                </div>
              )}
            </div>

            {/* Camera Control Buttons */}
            <div className="space-y-3 pt-1">
              {isCameraActive ? (
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={takeSnapshot}
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all"
                    id="take-photo-btn"
                  >
                    <Camera className="w-4 h-4" />
                    <span>{isPt ? 'Tirar Foto Agora' : 'Take Photo Now'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={switchCamera}
                    className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-2xl border border-stone-200 transition-colors"
                    title={isPt ? 'Alternar Câmera' : 'Switch Camera'}
                  >
                    <RefreshCw className="w-4.5 h-4.5" />
                  </button>

                  <button
                    type="button"
                    onClick={stopCamera}
                    className="p-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl border border-rose-200 transition-colors"
                    title={isPt ? 'Cancelar Câmera' : 'Cancel Camera'}
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => startCamera('user')}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all"
                    id="open-camera-btn"
                  >
                    <Camera className="w-4 h-4" />
                    <span>{isPt ? 'Usar Câmera' : 'Use Camera'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl border border-stone-200 flex items-center justify-center gap-2 transition-all"
                    id="upload-file-btn"
                  >
                    <Upload className="w-4 h-4 text-stone-600" />
                    <span>{isPt ? 'Enviar Foto' : 'Upload Photo'}</span>
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              )}

              {/* Camera Error Alert */}
              {cameraError && (
                <div className="p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>{cameraError}</span>
                </div>
              )}
            </div>

            {/* Preset Avatars */}
            <div className="pt-3 border-t border-stone-100">
              <p className="text-[11px] font-semibold text-stone-600 mb-2">
                {isPt ? 'Ou escolha uma foto de exemplo:' : 'Or choose a sample photo:'}
              </p>
              <div className="flex items-center justify-center gap-2">
                {PRESET_PHOTOS.map((url, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(url)}
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                      photoPreview === url ? 'border-emerald-500 scale-110 shadow-sm' : 'border-stone-200 hover:border-emerald-300'
                    }`}
                  >
                    <img src={url} alt={`Preset ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Dog Summary Badge Card */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-950 p-6 rounded-3xl text-white shadow-md border border-emerald-800 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-800/80 pb-3">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>{isPt ? 'Resumo de Nutrição' : 'Nutritional Summary'}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                {formData.name || 'Pet'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800/50">
                <p className="text-[10px] text-emerald-300 font-medium uppercase">{isPt ? 'Meta Calórica' : 'Daily Calories'}</p>
                <p className="text-lg font-black text-white">{portionResult.dme} kcal</p>
                <p className="text-[10px] text-emerald-400/80">{isPt ? 'DME / dia' : 'DME / day'}</p>
              </div>

              <div className="bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800/50">
                <p className="text-[10px] text-emerald-300 font-medium uppercase">{isPt ? 'Porção Total' : 'Total Food'}</p>
                <p className="text-lg font-black text-white">{portionResult.totalDailyFoodGrams} g</p>
                <p className="text-[10px] text-emerald-400/80">
                  {portionResult.perMealGrams}g / {isPt ? 'refeição' : 'meal'} ({formData.dailyMealsCount}x)
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex justify-between text-emerald-200">
                <span>{isPt ? 'Proteína Recomendada (45%):' : 'Recommended Protein (45%):'}</span>
                <span className="font-bold text-white">{portionResult.macros.proteinGrams} g</span>
              </div>
              <div className="flex justify-between text-emerald-200">
                <span>{isPt ? 'Carboidratos (35%):' : 'Carbohydrates (35%):'}</span>
                <span className="font-bold text-white">{portionResult.macros.carbsGrams} g</span>
              </div>
              <div className="flex justify-between text-emerald-200">
                <span>{isPt ? 'Vegetais e Fibras (20%):' : 'Veggies & Fiber (20%):'}</span>
                <span className="font-bold text-white">{portionResult.macros.veggieGrams} g</span>
              </div>
              <div className="flex justify-between text-emerald-200">
                <span>{isPt ? 'Cálcio (Casca de ovo):' : 'Calcium (Eggshell):'}</span>
                <span className="font-bold text-emerald-400">~{portionResult.macros.calciumMg} mg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Profile Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="border-b border-stone-100 pb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-emerald-600" />
                <span>{isPt ? 'Dados do Cão e Preferências' : 'Dog Details & Preferences'}</span>
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                {isPt
                  ? 'Mantenha os dados atualizados para ajustar automaticamente as porções das receitas.'
                  : 'Keep profile up to date to automatically recalculate recipe portions.'}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 font-bold text-xs border border-stone-200">
              {formData.weightKg} kg
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dog Name & Breed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Nome do Cão *' : 'Dog Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isPt ? 'Ex: Thor, Mel, Bob' : 'Ex: Thor, Bella, Max'}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none transition-all"
                  id="dog-name-input"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Raça' : 'Breed'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    list="breed-options"
                    value={formData.breed || ''}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    placeholder={isPt ? 'Selecione ou digite a raça' : 'Select or type breed'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none transition-all"
                    id="dog-breed-input"
                  />
                  <datalist id="breed-options">
                    {COMMON_BREEDS_PT.map((b, idx) => (
                      <option key={idx} value={b} />
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            {/* Age, Weight & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Idade (Anos / Meses)' : 'Age (Years / Months)'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    min="0"
                    max="25"
                    value={formData.ageYears ?? 3}
                    onChange={(e) => setFormData({ ...formData, ageYears: parseInt(e.target.value) || 0 })}
                    className="px-3 py-2.5 rounded-xl border border-stone-300 text-sm text-center font-bold focus:border-emerald-500 outline-none"
                    placeholder="Anos"
                  />
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={formData.ageMonths ?? 0}
                    onChange={(e) => setFormData({ ...formData, ageMonths: parseInt(e.target.value) || 0 })}
                    className="px-3 py-2.5 rounded-xl border border-stone-300 text-sm text-center font-bold focus:border-emerald-500 outline-none"
                    placeholder="Meses"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Peso Atual (kg) *' : 'Current Weight (kg) *'}
                </label>
                <input
                  type="number"
                  required
                  step="0.1"
                  min="0.5"
                  max="100"
                  value={formData.weightKg}
                  onChange={(e) =>
                    setFormData({ ...formData, weightKg: Math.max(0.5, parseFloat(e.target.value) || 1) })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 font-bold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none transition-all"
                  id="dog-weight-input"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Gênero' : 'Gender'}
                </label>
                <select
                  value={formData.gender || 'male'}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none bg-white transition-all font-medium"
                >
                  <option value="male">{isPt ? 'Macho ♂' : 'Male ♂'}</option>
                  <option value="female">{isPt ? 'Fêmea ♀' : 'Female ♀'}</option>
                </select>
              </div>
            </div>

            {/* Life Stage / Age Group & Daily Meals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Fase de Vida / Perfil' : 'Life Stage / Profile'}
                </label>
                <select
                  value={formData.ageGroup}
                  onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value as AgeGroup })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none bg-white transition-all font-medium"
                  id="dog-agegroup-select"
                >
                  <option value="adult_neutered">{isPt ? 'Adulto Castrado / Atividade Normal' : 'Adult Neutered / Normal'}</option>
                  <option value="adult_active">{isPt ? 'Adulto Muito Ativo / Esportista' : 'Active Adult'}</option>
                  <option value="puppy_under4m">{isPt ? 'Filhote (< 4 meses) — Alta demanda' : 'Puppy (< 4 months)'}</option>
                  <option value="puppy_4_12m">{isPt ? 'Filhote (4 a 12 meses)' : 'Puppy (4–12 months)'}</option>
                  <option value="senior_sedentary">{isPt ? 'Sênior ou Sedentário' : 'Senior or Sedentary'}</option>
                  <option value="weight_loss">{isPt ? 'Necessita Perder Peso (Dieta)' : 'Weight Loss Diet'}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Refeições por Dia' : 'Meals per Day'}
                </label>
                <div className="flex items-center gap-2">
                  {[2, 3, 4].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setFormData({ ...formData, dailyMealsCount: count })}
                      className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all border ${
                        formData.dailyMealsCount === count
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {count}x {isPt ? '/ dia' : '/ day'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Level & Favorite Food */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Nível de Atividade Física' : 'Physical Activity Level'}
                </label>
                <select
                  value={formData.activityLevel || 'normal'}
                  onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none bg-white transition-all font-medium"
                >
                  <option value="sedentary">{isPt ? 'Calmo / Passeio curto (< 30 min)' : 'Sedentary (< 30 mins walk)'}</option>
                  <option value="normal">{isPt ? 'Ativo / Passeios diários (30-60 min)' : 'Normal (30-60 mins walk)'}</option>
                  <option value="active">{isPt ? 'Muito Ativo / Brincadeiras e corridas (> 1h)' : 'Active (> 1h walk/play)'}</option>
                  <option value="athlete">{isPt ? 'Atleta / Agility ou Cão de Trabalho' : 'Athlete / Working dog'}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 block">
                  {isPt ? 'Petisco ou Alimento Favorito' : 'Favorite Food or Treat'}
                </label>
                <input
                  type="text"
                  value={formData.favoriteFood || ''}
                  onChange={(e) => setFormData({ ...formData, favoriteFood: e.target.value })}
                  placeholder={isPt ? 'Ex: Cenoura crua, Banana, Peito de Frango' : 'Ex: Raw Carrot, Banana, Chicken'}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Allergies / Intolerances */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 block flex items-center justify-between">
                <span>{isPt ? 'Alergias ou Sensibilidades Alimentares' : 'Allergies & Sensitivities'}</span>
                <span className="text-[11px] text-stone-500 font-normal">
                  {isPt ? 'Evitar ingredientes nas receitas' : 'Avoid ingredients in recipes'}
                </span>
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={allergyInput}
                  onChange={(e) => setAllergyInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddAllergy();
                    }
                  }}
                  placeholder={isPt ? 'Ex: Galinha, Lactose, Glúten...' : 'Ex: Chicken, Lactose, Wheat...'}
                  className="flex-1 px-4 py-2 rounded-xl border border-stone-300 text-sm outline-none focus:border-emerald-500"
                />
                <button
                  type="button"
                  onClick={handleAddAllergy}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  {isPt ? 'Adicionar' : 'Add'}
                </button>
              </div>

              {formData.allergies && formData.allergies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {formData.allergies.map((allergy, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                      <span>{allergy}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveAllergy(allergy)}
                        className="text-rose-400 hover:text-rose-700 font-bold ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Special Notes / Vet Instructions */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 block">
                {isPt ? 'Observações e Recomendações Veterinárias' : 'Special Notes & Vet Instructions'}
              </label>
              <textarea
                rows={3}
                value={formData.notes || ''}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder={
                  isPt
                    ? 'Ex: O veterinário sugeriu adicionar farinha de casca de ovo (cálcio) e evitar carne suína.'
                    : 'Ex: Vet suggested adding eggshell calcium powder and avoiding pork.'
                }
                className="w-full p-3.5 rounded-xl border border-stone-300 text-sm outline-none focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
              <p className="text-xs text-stone-500">
                {isPt ? 'Salva automaticamente no seu navegador.' : 'Saves automatically to local storage.'}
              </p>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 flex items-center gap-2 transition-all"
                id="save-profile-btn"
              >
                <Check className="w-5 h-5" />
                <span>{isPt ? 'Salvar Perfil do Cão' : 'Save Dog Profile'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
