import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Invitación', path: '/',         icon: 'celebration' },
  { label: 'Detalles',   path: '/detalles', icon: 'info' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header
      className="sticky top-0 z-50 w-full mt-4 shadow-md"
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderBottom: '2px solid',
        borderColor: 'var(--outline-variant)',
        borderRadius: '0 0 8px 8px',
        transform: 'rotate(0.5deg)',
      }}
    >
      {/* Washi tape decorations on header */}
      <div className="washi-tape absolute -top-3 left-10 w-24 -rotate-3 z-10" />
      <div className="washi-tape washi-green absolute -top-3 right-16 w-16 rotate-6 z-10" />

      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group hover:scale-105 transition-transform"
          aria-label="Amelia 4th inicio"
        >
          <span
            className="material-symbols-outlined text-4xl"
            style={{ color: 'var(--secondary)', fontVariationSettings: "'FILL' 1" }}
          >
            pets
          </span>
          <span
            className="font-extrabold text-xl"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              color: 'var(--primary)',
            }}
          >
            Invitación especial
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-1 px-5 py-2 font-bold text-sm transition-all border-2 border-dashed"
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  background: isActive ? 'var(--secondary)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--on-surface-variant)',
                  borderColor: isActive ? 'rgba(255,255,255,0.6)' : 'var(--outline-variant)',
                  borderRadius: '4px',
                  transform: isActive ? 'rotate(1deg)' : 'rotate(0)',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile nav */}
        <nav className="flex md:hidden items-center gap-1" aria-label="Navegación móvil">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className="w-10 h-10 flex items-center justify-center transition-all border-2 border-dashed"
                style={{
                  background: isActive ? 'var(--secondary)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--on-surface-variant)',
                  borderColor: isActive ? 'rgba(255,255,255,0.6)' : 'var(--outline-variant)',
                  borderRadius: '4px',
                }}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
