export const runtime = 'nodejs';

export async function GET() {
  return new Response(JSON.stringify({ 
    ok: true, 
    ts: Date.now(),
    app: 'TuFinanza PWA',
    version: '1.0.0' 
  }), {
    status: 200, 
    headers: { 'content-type': 'application/json' }
  });
}