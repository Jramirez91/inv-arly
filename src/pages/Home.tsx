import { motion } from 'framer-motion'
import { profileImg, BACKGROUND_STICKERS, ACTIVITIES, EVENT, FONTS, COLORS } from '../assets'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.55, ease: "easeOut" as const },
  }),
}

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col items-center py-12 px-4 md:px-16 gap-16 max-w-5xl mx-auto w-full relative"
    >

      {/* ── Fixed background stickers ─────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {BACKGROUND_STICKERS.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`sticker absolute ${s.style}`}
          />
        ))}
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="w-full flex flex-col items-center text-center gap-8 relative z-10">

        {/* Title — tilted white card */}
        <motion.div
          initial="hidden" animate="visible" custom={0} variants={fadeUp}
          className="relative w-full max-w-2xl"
        >
          <div className="relative bg-white inline-block p-6 border-4 border-double transform -rotate-2 shadow-lg w-full"
            style={{ borderColor: 'var(--primary)' }}>
            {/* Washi tape top */}
            <div className="washi-tape washi-purple absolute -top-3 right-8 w-20 rotate-12" />
            <h1
              className="text-[32px] md:text-[52px] leading-tight font-extrabold relative z-10"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              <span className="block" style={{ color: 'var(--primary)' }}>
                ¡Acompáñanos en un
              </span>
              <span className="block" style={{ color: 'var(--secondary)' }}>
                día miau-tástico!
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Polaroid image */}
        <motion.div
          initial="hidden" animate="visible" custom={1} variants={fadeUp}
          className="relative w-full max-w-lg z-10"
        >
          {/* Washi tape on polaroid */}
          <div className="washi-tape absolute -top-4 left-1/2 -translate-x-1/2 w-32 -rotate-2 z-20" />

          <div className="polaroid transform rotate-2 hover:rotate-0 transition-transform duration-300 mx-auto">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-gray-100">
              <img
                src={profileImg}
                alt={`${EVENT.title} — celebración miau-tástica`}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="text-center font-extrabold mt-3 text-xl -rotate-1 inline-block"
              style={{ fontFamily: FONTS.display, color: COLORS.primary }}
            >
              {EVENT.title}
            </div>
          </div>
        </motion.div>

        {/* Info note — torn paper */}
        <motion.div
          initial="hidden" animate="visible" custom={2} variants={fadeUp}
          className="relative w-full max-w-lg z-10"
        >
          <div className="washi-tape washi-green absolute -top-3 -right-4 w-24 rotate-45" />
          <div className="torn-paper p-8 -rotate-1 border-2" style={{ borderColor: 'var(--outline-variant)' }}>
            <p style={{ fontFamily: '"Be Vietnam Pro", sans-serif', fontSize: '18px', fontWeight: 500, color: 'var(--on-surface-variant)' }}>
              <strong style={{ color: COLORS.primary, fontFamily: FONTS.display, fontSize: '20px', display: 'block', marginBottom: '6px' }}>
                {EVENT.subtitle}
              </strong>
              {EVENT.description}
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Evento Details — Scrapbook Grid ──────────── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10" aria-label="Detalles de la fiesta">

        {/* Fecha */}
        <motion.div
          initial="hidden" animate="visible" custom={0} variants={fadeUp}
          className="md:col-span-5 md:col-start-2"
        >
          <div className="scrap-card p-10 flex flex-col items-center justify-center text-center rotate-2 hover:-rotate-1 transition-transform relative">
            <div className="washi-tape absolute -top-3 left-4 w-16 -rotate-12" />
            <div className="washi-tape absolute -bottom-3 right-4 w-16 rotate-6" />
            <div className="p-4 rounded-full mb-4 border-2 border-dashed" style={{ background: 'var(--primary-container)', borderColor: 'var(--primary)' }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--on-primary-container)', fontVariationSettings: "'FILL' 1" }}>
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

        {/* Hora */}
        <motion.div
          initial="hidden" animate="visible" custom={1} variants={fadeUp}
          className="md:col-span-5 md:col-start-7 md:mt-12"
        >
          <div className="scrap-card p-10 flex flex-col items-center justify-center text-center -rotate-2 hover:rotate-1 transition-transform relative">
            <div className="washi-tape washi-green absolute -top-3 right-8 w-20 rotate-12" />
            <div className="p-4 rounded-full mb-4 border-2 border-dashed" style={{ background: 'var(--tertiary-container)', borderColor: 'var(--tertiary)' }}>
              <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--on-tertiary-container)', fontVariationSettings: "'FILL' 1" }}>
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

        {/* Ubicación */}
        <motion.div
          initial="hidden" animate="visible" custom={2} variants={fadeUp}
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


      {/* ── Activities ───────────────────────────────── */}
      <motion.section
        initial="hidden" animate="visible" custom={1} variants={fadeUp}
        className="w-full text-center relative z-10"
        aria-label="Actividades de la fiesta"
      >
        <h2 className="text-2xl font-bold mb-8"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}>
          ¿Qué haremos? 🎊
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {ACTIVITIES.map((a, i) => (
            <span key={a.label} className="chip"
              style={{ background: a.bg, color: a.color, border: `2px solid ${a.border}`, transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}>
              <span className="text-base">{a.emoji}</span>
              {a.label}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── CTA Final ─────────────────────────────────── */}
      <motion.section
        initial="hidden" animate="visible" custom={2} variants={fadeUp}
        className="w-full text-center relative z-10 py-4"
      >
        <h2
          className="text-3xl md:text-5xl font-extrabold"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: 'var(--primary)' }}
        >
          ¡No faltes! 🎉
        </h2>
      </motion.section>

    </motion.main>
  )
}

