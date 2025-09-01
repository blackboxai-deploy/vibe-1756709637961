'use client';

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: Error; 
  reset: () => void 
}) {
  return (
    <html>
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">💥</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Error Global</h2>
            <p className="text-gray-600 mb-4">{error?.message || 'Error inesperado en la aplicación'}</p>
            <button 
              onClick={reset}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              🔄 Reiniciar Aplicación
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}