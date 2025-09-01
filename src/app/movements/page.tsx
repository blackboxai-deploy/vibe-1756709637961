"use client";

import { useState } from 'react';

export default function MovementsPage() {
  const [showForm, setShowForm] = useState(false);
  const [movements, setMovements] = useState([
    {
      id: '1',
      type: 'income',
      amount: 2000,
      currency: 'USD',
      category: 'salary',
      description: 'Salario Enero',
      date: '2025-01-15'
    },
    {
      id: '2',
      type: 'expense',
      amount: 150,
      currency: 'USD',
      category: 'food',
      description: 'Supermercado',
      date: '2025-01-12'
    }
  ]);

  const addMovement = (formData: any) => {
    const newMovement = {
      id: Date.now().toString(),
      ...formData,
      amount: parseFloat(formData.amount),
      date: formData.date
    };
    setMovements([...movements, newMovement]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30 p-4 space-y-6">
      <div className="pt-4">
        <h1 className="text-3xl font-black text-gray-800 flex items-center space-x-3">
          <span className="text-4xl">💸</span>
          <span>Movimientos</span>
        </h1>
        <p className="text-gray-600 text-sm font-medium">
          Gestiona tus ingresos, gastos y ahorros
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => setShowForm(true)}
          className="group h-20 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">💰</span>
          <span className="text-xs font-black">Ingreso</span>
        </button>
        <button
          onClick={() => setShowForm(true)}
          className="group h-20 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">💸</span>
          <span className="text-xs font-black">Gasto</span>
        </button>
        <button
          onClick={() => setShowForm(true)}
          className="group h-20 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-2xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">🐷</span>
          <span className="text-xs font-black">Ahorro</span>
        </button>
      </div>

      {/* Movement Form */}
      {showForm && (
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black flex items-center space-x-3">
              <span className="text-3xl">✨</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nuevo Movimiento
              </span>
            </h3>
            <button
              onClick={() => setShowForm(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 transition-colors font-bold text-xl"
            >
              ✕
            </button>
          </div>
          
          <MovementForm onSubmit={addMovement} />
        </div>
      )}

      {/* Movements List */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40">
        <h3 className="text-2xl font-black mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">📋</span>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Lista de Movimientos
            </span>
          </div>
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {movements.length} total
          </span>
        </h3>
        
        <div className="space-y-4">
          {movements.map((movement) => (
            <div
              key={movement.id}
              className="group flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50/60 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl duration-300"
            >
              <div className="flex items-center space-x-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl ${
                  movement.type === 'income' 
                    ? 'bg-gradient-to-br from-green-400 to-green-600' 
                    : movement.type === 'expense' 
                    ? 'bg-gradient-to-br from-red-400 to-red-600' 
                    : 'bg-gradient-to-br from-blue-400 to-blue-600'
                }`}>
                  <span className="text-2xl text-white">{
                    movement.type === 'income' ? '💰' : 
                    movement.type === 'expense' ? '💸' : '🐷'
                  }</span>
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">{movement.description}</p>
                  <p className="text-sm text-gray-600 font-semibold capitalize">{movement.category}</p>
                  <p className="text-xs text-gray-500 font-medium">
                    {new Date(movement.date).toLocaleDateString('es-AR')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-black text-xl ${
                  movement.type === 'income' 
                    ? 'text-green-600' 
                    : movement.type === 'expense' 
                    ? 'text-red-600' 
                    : 'text-blue-600'
                }`}>
                  {movement.type === 'expense' ? '-' : '+'}$ {movement.amount.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500 font-bold mt-1">{movement.currency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MovementForm({ onSubmit }: any) {
  const [form, setForm] = useState({
    type: 'income',
    amount: '',
    currency: 'USD',
    category: 'salary',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.amount || !form.description) return;
    onSubmit(form);
    setForm({
      type: 'income',
      amount: '',
      currency: 'USD',
      category: 'salary',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <button
          type="button"
          onClick={() => setForm(prev => ({ ...prev, type: 'income' }))}
          className={`p-4 rounded-xl font-bold transition-all ${
            form.type === 'income'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          💰 Ingreso
        </button>
        <button
          type="button"
          onClick={() => setForm(prev => ({ ...prev, type: 'expense' }))}
          className={`p-4 rounded-xl font-bold transition-all ${
            form.type === 'expense'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-red-100 text-red-700 hover:bg-red-200'
          }`}
        >
          💸 Gasto
        </button>
        <button
          type="button"
          onClick={() => setForm(prev => ({ ...prev, type: 'saving' }))}
          className={`p-4 rounded-xl font-bold transition-all ${
            form.type === 'saving'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          🐷 Ahorro
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Monto"
          value={form.amount}
          onChange={(e) => setForm(prev => ({ ...prev, amount: e.target.value }))}
          className="p-4 border-2 border-gray-200 rounded-xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          step="0.01"
          required
        />
        <select
          value={form.currency}
          onChange={(e) => setForm(prev => ({ ...prev, currency: e.target.value }))}
          className="p-4 border-2 border-gray-200 rounded-xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        >
          <option value="USD">💵 USD</option>
          <option value="ARS">🇦🇷 ARS</option>
          <option value="COP">🇨🇴 COP</option>
          <option value="MXN">🇲🇽 MXN</option>
          <option value="EUR">🇪🇸 EUR</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Descripción del movimiento"
        value={form.description}
        onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
        className="w-full p-4 border-2 border-gray-200 rounded-xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        required
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))}
        className="w-full p-4 border-2 border-gray-200 rounded-xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        required
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-black py-4 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-lg"
      >
        ✨ Agregar Movimiento
      </button>
    </form>
  );
}