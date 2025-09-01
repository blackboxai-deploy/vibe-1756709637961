export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-3xl font-black text-gray-800 mb-1">
          ¡Hola, Usuario! 👋
        </h1>
        <p className="text-gray-600 text-sm font-medium">
          Lunes, 1 de septiembre de 2025
        </p>
      </div>

      {/* Balance Overview */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white rounded-3xl p-8 shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black flex items-center space-x-3">
              <span className="text-3xl">💼</span>
              <span>Balance Neto</span>
            </h2>
            <select className="bg-white/20 backdrop-blur border border-white/30 text-white text-sm rounded-xl px-4 py-2 font-bold shadow-xl">
              <option value="USD">💵 USD</option>
              <option value="ARS">🏠 ARS</option>
            </select>
          </div>
          
          <div className="mb-8">
            <p className="text-5xl font-black mb-3 tracking-tight">$ 1,250</p>
            <p className="text-blue-100 text-base font-semibold">
              📅 septiembre 2025
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/30">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-green-500/30 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">📈</span>
              </div>
              <p className="text-white/90 text-sm font-bold mb-1">Ingresos</p>
              <p className="font-black text-lg">$ 2,000</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-red-500/30 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">📉</span>
              </div>
              <p className="text-white/90 text-sm font-bold mb-1">Gastos</p>
              <p className="font-black text-lg">$ 750</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-blue-500/30 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">💎</span>
              </div>
              <p className="text-white/90 text-sm font-bold mb-1">Ahorros</p>
              <p className="font-black text-lg">$ 0</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
        <h3 className="text-2xl font-black mb-8 flex items-center space-x-3">
          <span className="text-3xl">⚡</span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Acciones Rápidas
          </span>
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <a
            href="/movements"
            className="group h-28 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex flex-col items-center justify-center hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">💰</span>
            <span className="text-sm font-black">Agregar Ingreso</span>
          </a>
          <a
            href="/movements"
            className="group h-28 bg-gradient-to-br from-red-400 to-red-600 text-white rounded-2xl flex flex-col items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">💸</span>
            <span className="text-sm font-black">Registrar Gasto</span>
          </a>
          <a
            href="/settings"
            className="group h-28 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl flex flex-col items-center justify-center hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">⚙️</span>
            <span className="text-sm font-black">Configuración</span>
          </a>
          <a
            href="/movements"
            className="group h-28 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-2xl flex flex-col items-center justify-center hover:from-indigo-500 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">📊</span>
            <span className="text-sm font-black">Ver Movimientos</span>
          </a>
        </div>
      </div>

      {/* Demo Movements */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
        <h3 className="text-2xl font-black mb-8 flex items-center space-x-3">
          <span className="text-3xl">📊</span>
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Movimientos Demo
          </span>
        </h3>
        
        <div className="space-y-4">
          <div className="group flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-100 hover:shadow-xl duration-300">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br from-green-400 to-green-600">
                <span className="text-2xl text-white">💰</span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg">Salario Enero</p>
                <p className="text-sm text-gray-600 font-semibold">Salario</p>
                <p className="text-xs text-gray-500 font-medium">15 Ene</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-xl text-green-600">+$ 2,000.00</p>
              <p className="text-xs text-gray-500 font-bold mt-1">USD</p>
            </div>
          </div>

          <div className="group flex items-center justify-between p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-100 hover:shadow-xl duration-300">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br from-red-400 to-red-600">
                <span className="text-2xl text-white">💸</span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-lg">Supermercado</p>
                <p className="text-sm text-gray-600 font-semibold">Alimentación</p>
                <p className="text-xs text-gray-500 font-medium">12 Ene</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-xl text-red-600">-$ 150.00</p>
              <p className="text-xs text-gray-500 font-bold mt-1">USD</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/movements"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-black px-8 py-4 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            ✨ Ver todos los movimientos
          </a>
        </div>
      </div>
    </div>
  );
}