import { motion } from 'framer-motion'
import { ACTIVITIES, EVENT, FONTS, COLORS } from '../assets'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.55, ease: "easeOut" as const },
  }),
}

export default function EventDetails() {
  return (
    <main className="flex flex-col items-center py-12 px-4 md:px-16 gap-14 max-w-5xl mx-auto w-full relative z-10">

      {/* ── Header ─────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="text-center relative"
      >
        <div className="washi-tape washi-purple absolute -top-3 left-8 w-16 -rotate-3" />
        <div className="washi-tape washi-green absolute -top-3 right-8 w-20 rotate-6" />
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
        >
          🏠 Detalles de la Fiesta
        </h1>
        <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '18px', color: 'var(--on-surface-variant)', fontWeight: 700 }}>
          Todo lo que necesitas saber para la celebración más miau-tástica del año
        </p>
      </motion.section>

      {/* ── Date & Time Grid ─────────────────────────── */}
      <section
        className="w-full grid grid-cols-1 md:grid-cols-12 gap-8"
        aria-labelledby="details-heading"
      >
        <h2 id="details-heading" className="sr-only">Información del evento</h2>

        {/* Date Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="md:col-span-5 md:col-start-2"
        >
          <div className="scrap-card p-10 flex flex-col items-center justify-center text-center rotate-2 hover:-rotate-1 transition-transform relative">
            <div className="washi-tape absolute -top-3 left-4 w-16 -rotate-12" />
            <div className="washi-tape absolute -bottom-3 right-4 w-16 rotate-6" />
            <div className="p-4 rounded-full mb-4 border-2 border-dashed"
              style={{ background: 'var(--primary-container)', borderColor: 'var(--primary)' }}>
              <span className="material-symbols-outlined text-4xl"
                style={{ color: 'var(--on-primary-container)', fontVariationSettings: "'FILL' 1" }}>
                calendar_month
              </span>
            </div>
            <span className="uppercase tracking-widest font-bold text-xs mb-2 block"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}>
              FECHA
            </span>
            <p className="text-2xl font-bold" style={{ fontFamily: FONTS.display, color: COLORS.primary }}>
              {EVENT.date}
            </p>
          </div>
        </motion.div>

        {/* Time Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="md:col-span-5 md:col-start-7 md:mt-12"
        >
          <div className="scrap-card p-10 flex flex-col items-center justify-center text-center -rotate-2 hover:rotate-1 transition-transform relative">
            <div className="washi-tape washi-green absolute -top-3 right-8 w-20 rotate-12" />
            <div className="p-4 rounded-full mb-4 border-2 border-dashed"
              style={{ background: 'var(--tertiary-container)', borderColor: 'var(--tertiary)' }}>
              <span className="material-symbols-outlined text-4xl"
                style={{ color: 'var(--on-tertiary-container)', fontVariationSettings: "'FILL' 1" }}>
                schedule
              </span>
            </div>
            <span className="uppercase tracking-widest font-bold text-xs mb-2 block"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}>
              HORA
            </span>
            <p className="text-2xl font-bold" style={{ fontFamily: FONTS.display, color: COLORS.tertiary }}>
              {EVENT.time}
            </p>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="md:col-span-8 md:col-start-3 mt-4"
        >
          <div className="scrap-card p-8 rotate-1 relative">
            <div className="washi-tape washi-purple absolute -top-4 left-1/2 -translate-x-1/2 w-32 rotate-2" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-5 rounded-full border-2 border-dashed shrink-0"
                style={{ background: 'var(--secondary-container)', borderColor: 'var(--secondary)' }}>
                <span className="material-symbols-outlined text-4xl"
                  style={{ color: 'var(--on-secondary-container)', fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
              <div className="text-center md:text-left flex-grow">
                <span className="uppercase tracking-widest font-bold text-xs block mb-1"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}>
                  UBICACIÓN
                </span>
                <p className="text-3xl font-extrabold leading-tight" style={{ fontFamily: FONTS.display, color: COLORS.secondary }}>
                  {EVENT.location.name}
                </p>
                <p className="mt-2" style={{ fontFamily: FONTS.body, color: COLORS.onSurfaceVariant, fontSize: '16px', fontWeight: 700 }}>
                  {EVENT.location.address}<br />{EVENT.location.city}
                </p>
              </div>
              <a href={EVENT.location.mapsUrl} target="_blank" rel="noopener noreferrer" id="map-link"
                className="btn-secondary whitespace-nowrap -rotate-2 shrink-0">
                <span className="material-symbols-outlined text-base">map</span>
                Ver Mapa
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Activity Chips ─────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        custom={3}
        variants={fadeUp}
        className="w-full text-center"
        aria-labelledby="activities-heading"
      >
        <h2
          id="activities-heading"
          className="text-2xl font-bold mb-8"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
        >
          Actividades de la fiesta 🎉
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {ACTIVITIES.map((a, i) => (
            <span
              key={a.label}
              className="chip"
              style={{
                background: a.bg,
                color: a.color,
                border: `2px solid ${a.border}`,
                transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)`,
              }}
            >
              <span className="text-base">{a.emoji}</span>
              {a.label}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── Gift Suggestions ────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        custom={4}
        variants={fadeUp}
        className="w-full relative z-10"
        aria-labelledby="gifts-heading"
      >
        {/* Section header */}
        <div className="text-center mb-8 relative">
          <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 rotate-1" />
          <h2
            id="gifts-heading"
            className="text-2xl font-bold"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
          >
            Ideas de regalo 🎁
          </h2>
          <p className="mt-2 text-sm" style={{ fontFamily: '"Be Vietnam Pro", sans-serif', color: 'var(--on-surface-variant)', fontWeight: 600 }}>
            ¡Lo más importante es tu presencia! Pero si deseas traer un detalle…
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

          {/* Clothing size */}
          <div className="scrap-card p-8 flex flex-col items-center text-center rotate-1 hover:-rotate-1 transition-transform relative">
            <div className="washi-tape absolute -top-3 left-4 w-16 rotate-6" />
            <div
              className="p-4 rounded-full mb-4 border-2 border-dashed"
              style={{ background: 'var(--primary-container)', borderColor: 'var(--primary)' }}
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ color: 'var(--on-primary-container)', fontVariationSettings: "'FILL' 1" }}
              >
                checkroom
              </span>
            </div>
            <span
              className="uppercase tracking-widest font-bold text-xs mb-2 block"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}
            >
              TALLA ROPA
            </span>
            <p className="text-4xl font-extrabold" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}>
              6
            </p>
            <p className="text-xs mt-1 font-semibold" style={{ color: 'var(--on-surface-variant)' }}>niña</p>
          </div>

          {/* Shoe size */}
          <div className="scrap-card p-8 flex flex-col items-center text-center -rotate-1 hover:rotate-1 transition-transform relative md:mt-6">
            <div className="washi-tape washi-green absolute -top-3 right-6 w-16 -rotate-6" />
            <div
              className="p-4 rounded-full mb-4 border-2 border-dashed"
              style={{ background: 'var(--secondary-container)', borderColor: 'var(--secondary)' }}
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ color: 'var(--on-secondary-container)', fontVariationSettings: "'FILL' 1" }}
              >
                steps
              </span>
            </div>
            <span
              className="uppercase tracking-widest font-bold text-xs mb-2 block"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}
            >
              TALLA ZAPATO
            </span>
            <p className="text-4xl font-extrabold" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--secondary)' }}>
              17
            </p>
            <p className="text-xs mt-1 font-semibold" style={{ color: 'var(--on-surface-variant)' }}>MX</p>
          </div>

          {/* Theme suggestion */}
          <div className="scrap-card p-8 flex flex-col items-center text-center rotate-2 hover:-rotate-1 transition-transform relative">
            <div className="washi-tape washi-purple absolute -top-3 left-8 w-20 -rotate-3" />
            <div
              className="p-4 rounded-full mb-4 border-2 border-dashed"
              style={{ background: 'var(--tertiary-container)', borderColor: 'var(--tertiary)' }}
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ color: 'var(--on-tertiary-container)', fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </div>
            <span
              className="uppercase tracking-widest font-bold text-xs mb-3 block"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--on-surface-variant)' }}
            >
              LE ENCANTA
            </span>
            <p className="text-base font-bold leading-snug" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--tertiary)' }}>
              Gabby's Dollhouse 🐱
            </p>
            <div className="w-full flex items-center gap-2 my-2 px-4" aria-hidden="true">
              <span className="flex-1 h-0.5" style={{ background: 'var(--outline-variant)' }} />
              <span className="text-xs">🎀</span>
              <span className="flex-1 h-0.5" style={{ background: 'var(--outline-variant)' }} />
            </div>
            <p className="text-base font-bold leading-snug" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--tertiary)' }}>
              Barbie 🎀
            </p>
          </div>

        </div>
      </motion.section>

    </main>
  )
}
