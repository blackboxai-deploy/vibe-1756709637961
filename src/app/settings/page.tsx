"use client";

import { useState } from 'react';

export default function SettingsPage() {
  const [showEdit, setShowEdit] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Usuario Demo',
    email: 'demo@tufinanza.com',
    country: 'AR',
    currency: 'ARS'
  });

  const COUNTRIES = [
    { code: 'AR', name: 'Argentina', currency: 'ARS', flag: '🇦🇷' },
    { code: 'US', name: 'Estados Unidos', currency: 'USD', flag: '🇺🇸' },
    { code: 'MX', name: 'México', currency: 'MXN', flag: '🇲🇽' },
    { code: 'CO', name: 'Colombia', currency: 'COP', flag: '🇨🇴' },
    { code: 'CL', name: 'Chile', currency: 'CLP', flag: '🇨🇱' },
    { code: 'PE', name: 'Perú', currency: 'PEN', flag: '🇵🇪' },
    { code: 'BR', name: 'Brasil', currency: 'BRL', flag: '🇧🇷' },
    { code: 'ES', name: 'España', currency: 'EUR', flag: '🇪🇸' },
    { code: 'GB', name: 'Reino Unido', currency: 'GBP', flag: '🇬🇧' },
  ];

  const updateProfile = (updates: any) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
    localStorage.setItem('tufinanza_user_profile', JSON.stringify({ ...userProfile, ...updates }));
    setShowEdit(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30 p-4 space-y-6">
      <div className="pt-4">
        <h1 className="text-3xl font-black text-gray-800 flex items-center space-x-3">
          <span className="text-4xl">⚙️</span>
          <span>Configuración</span>
        </h1>
        <p className="text-gray-600 text-sm font-medium">
          Gestiona tu perfil y configuración de la aplicación
        </p>
      </div>

      {/* Balance Display Settings */}
      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100/50">
        <h3 className="text-2xl font-black mb-8 flex items-center space-x-3">
          <span className="text-3xl">💱</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Configuración de Divisas
          </span>
        </h3>
        <div className="space-y-6">
          <div className="bg-white/80 p-6 rounded-2xl border border-blue-100 shadow-lg">
            <label className="block text-lg font-black text-blue-800 mb-4">💰 Ver balance en:</label>
            <select className="w-full p-4 border-2 border-blue-200 rounded-2xl bg-white shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-bold text-lg">
              <option value="USD">💵 Dólar Americano (USD)</option>
              <option value="ARS">🏠 Divisa local (ARS)</option>
            </select>
            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-700 font-semibold">
                📊 Actualmente mostrando en: USD
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-8 shadow-2xl border border-purple-100/50">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black flex items-center space-x-3">
            <span className="text-3xl">👤</span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tu Perfil
            </span>
          </h3>
          <button
            onClick={() => setShowEdit(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl text-sm font-black transition-all transform hover:scale-105 shadow-xl"
          >
            ✏️ Editar
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-purple-50/40 rounded-2xl border border-purple-100 shadow-lg">
            <div>
              <p className="text-sm text-purple-600 font-bold">Nombre</p>
              <p className="font-black text-gray-900 text-xl">{userProfile.name}</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-xl text-white">👤</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-blue-50/40 rounded-2xl border border-blue-100 shadow-lg">
            <div>
              <p className="text-sm text-blue-600 font-bold">Email</p>
              <p className="font-black text-gray-900 text-xl">{userProfile.email}</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-xl text-white">📧</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-6 bg-gradient-to-r from-white to-green-50/40 rounded-2xl border border-green-100 shadow-lg">
            <div>
              <p className="text-sm text-green-600 font-bold">País</p>
              <p className="font-black text-gray-900 text-xl">🇦🇷 Argentina</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-xl text-white">🌍</span>
            </div>
          </div>
        </div>
      </div>

      {/* PWA Instructions */}
      <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-8 shadow-2xl border border-orange-100/50">
        <h3 className="text-2xl font-black mb-8 flex items-center space-x-3">
          <span className="text-3xl">📱</span>
          <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Instalar en iPhone
          </span>
        </h3>
        <div className="bg-blue-50 p-6 rounded-2xl space-y-4">
          <p className="font-black text-blue-800 mb-4 text-lg">Para usar como app nativa:</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-black text-white">1</div>
              <span className="font-semibold">Abre Safari en tu iPhone</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-black text-white">2</div>
              <span className="font-semibold">Toca el botón compartir</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-black text-white">3</div>
              <span className="font-semibold">Selecciona "Añadir a inicio"</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-white/80 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-black text-white">✓</div>
              <span className="font-semibold">¡Ya tienes TuFinanza!</span>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-xl mt-4">
            <p className="text-green-700 text-sm font-black text-center">
              ✅ Offline • ✅ Sin App Store • ✅ Como app nativa
            </p>
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl">
            <h3 className="text-2xl font-black mb-6 text-center">✏️ Editar Perfil</h3>
            
            <EditForm userProfile={userProfile} onSave={updateProfile} onCancel={() => setShowEdit(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function EditForm({ userProfile, onSave, onCancel }: any) {
  const [form, setForm] = useState(userProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm((prev: any) => ({ ...prev, name: e.target.value }))}
        className="w-full p-4 border-2 border-gray-200 rounded-xl font-semibold"
        placeholder="Nombre completo"
      />
      
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm((prev: any) => ({ ...prev, email: e.target.value }))}
        className="w-full p-4 border-2 border-gray-200 rounded-xl font-semibold"
        placeholder="Email"
      />
      
      <select
        value={form.country}
        onChange={(e) => setForm((prev: any) => ({ ...prev, country: e.target.value }))}
        className="w-full p-4 border-2 border-gray-200 rounded-xl font-semibold"
      >
        <option value="AR">🇦🇷 Argentina</option>
        <option value="US">🇺🇸 Estados Unidos</option>
        <option value="MX">🇲🇽 México</option>
        <option value="CO">🇨🇴 Colombia</option>
      </select>

      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 font-bold transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 font-bold transition-all"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}