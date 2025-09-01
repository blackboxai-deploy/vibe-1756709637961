import "./globals.css";

export const metadata = {
  title: "TuFinanza - Finanzas Personales",
  description: "Tu asistente personal de finanzas con múltiples divisas. Funciona offline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TuFinanza" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50">
          <main className="pb-16">
            {children}
          </main>
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
            <div className="flex items-center justify-around px-2 py-2">
              <a href="/" className="flex flex-col items-center justify-center flex-1 py-2 px-1 text-gray-500 hover:text-blue-600">
                <span className="text-xl mb-1">🏠</span>
                <span className="text-xs font-medium">Inicio</span>
              </a>
              <a href="/dashboard" className="flex flex-col items-center justify-center flex-1 py-2 px-1 text-gray-500 hover:text-blue-600">
                <span className="text-xl mb-1">💸</span>
                <span className="text-xs font-medium">Dashboard</span>
              </a>
              <a href="/movements" className="flex flex-col items-center justify-center flex-1 py-2 px-1 text-gray-500 hover:text-blue-600">
                <span className="text-xl mb-1">💰</span>
                <span className="text-xs font-medium">Movimientos</span>
              </a>
              <a href="/settings" className="flex flex-col items-center justify-center flex-1 py-2 px-1 text-gray-500 hover:text-blue-600">
                <span className="text-xl mb-1">⚙️</span>
                <span className="text-xs font-medium">Ajustes</span>
              </a>
            </div>
          </nav>
        </div>
      </body>
    </html>
  );
}