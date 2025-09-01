"use client";

export default function HomePage() {
  // Redirect to the working HTML version immediately
  if (typeof window !== 'undefined') {
    window.location.href = '/TuFinanza_PWA_Complete.html';
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center animate-spin">
          <span className="text-3xl text-white">💰</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Cargando TuFinanza...</h1>
        <p className="text-gray-600">Redirigiendo a la aplicación completa</p>
        <a 
          href="/TuFinanza_PWA_Complete.html"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Ir a TuFinanza PWA
        </a>
      </div>
    </div>
  );
}