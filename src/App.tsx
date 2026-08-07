import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import SparkleExplosion from './components/SparkleExplosion'
import Splash from './pages/Splash'
import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import { EVENT } from './assets'

export default function App() {
  const location = useLocation()
  const isSplash = location.pathname === '/'

  return (
    <div className="craft-paper-bg min-h-screen flex flex-col overflow-hidden relative">
      <SparkleExplosion />

      {/* Navigation (Hidden on Splash) */}
      {!isSplash && <Navbar />}

      {/* Page content */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"           element={<Splash />} />
          <Route path="/invitacion" element={<Home />} />
          <Route path="/detalles"   element={<EventDetails />} />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      {/* Footer (Hidden on Splash) */}
      {!isSplash && (
      <footer
        className="mt-auto z-20 relative border-t-2 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]"
        style={{
          background: 'rgba(255,255,255,0.95)',
          borderColor: 'var(--outline-variant)',
          transform: 'rotate(0.5deg)',
        }}
      >
        {/* Washi tape on footer */}
        <div className="washi-tape absolute -top-3 left-1/3 w-32 rotate-2" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-8 gap-4">
          <div
            className="flex items-center gap-2 text-sm font-bold"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--secondary)' }}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              pets
            </span>
            © {new Date().getFullYear()} La Celebración Miau-tástica de {EVENT.title.split(' ').pop()}
          </div>
          <div className="flex gap-6 px-6 py-3 border-2 border-dashed" style={{ borderColor: 'var(--secondary-container)' }}>
            {[
              { label: 'Inicio', path: '/invitacion' },
              { label: 'Detalles',  path: '/detalles' },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="font-bold hover:opacity-70 transition-opacity text-sm"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
      )}
    </div>
  )
}

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center py-24 px-4 text-center min-h-[50vh]">
      <div className="text-7xl mb-6">🐱</div>
      <h1
        className="text-4xl font-extrabold mb-4"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
      >
        ¡Página no encontrada!
      </h1>
      <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: 'var(--on-surface-variant)', fontSize: '18px', marginBottom: '24px' }}>
        Este gato se perdió buscando esta página. 😺
      </p>
      <a href="/invitacion" id="not-found-home">
        <button className="btn-primary">
          Volver al inicio
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </button>
      </a>
    </main>
  )
}
