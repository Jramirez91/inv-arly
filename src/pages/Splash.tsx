import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EVENT } from '../assets'

export default function Splash() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15
        if (next >= 100) {
          clearInterval(interval)
          // Trigger a massive sparkle burst in the center of the screen
          window.dispatchEvent(new CustomEvent('sparkle-burst', { 
            detail: { x: window.innerWidth / 2, y: window.innerHeight / 2, count: 200 }
          }))
          // Navigate to the invitation after a short delay to let the exit animation and burst play
          setTimeout(() => navigate('/invitacion'), 800)
          return 100
        }
        return next
      })
    }, 200)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'brightness(2)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-[#fbf9f8] text-[#1b1c1c] font-sans overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASr6uS3O0Jyr1DSt0hb02wNnA9JHBmzMhdgbB_DttF_N6bL7w58Cxo5RwfnzZsvP4H7g3dkUaE5EtB6EsESB5-Ho20PAN82PUN2X3lS2kRsqtXiAq4Glv9tKKcAdiBqTr201bo_4LLwBdr9G9tcXtfhmKEib1H-RlH1Ucevbqh3c0_gYwk_8pFKjSH0jRpvsCqbiMEPesztDEcp7P3zjaT9nivHDSI_By2lkchjHXjpi7IQOPfFJY84IK5BkFfb7JI8nc')" }}
      >
        {/* Bright overlay to make colors pop even more */}
        <div className="absolute inset-0 bg-[#e879f9]/20 mix-blend-overlay"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full h-full min-h-screen px-6 overflow-hidden flex flex-col justify-between py-12">
        {/* Brand Anchor floated top left */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="absolute top-8 left-4 -rotate-6 z-30"
        >
          <h2 
            className="text-3xl md:text-4xl text-[#4c1d95] font-black tracking-tight bg-[#06b6d4] px-4 py-2 border-4 border-[#4c1d95] yolo-box-shadow transform hover:scale-110 transition-transform"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {EVENT.title}
          </h2>
        </motion.div>

        {/* Animated Icon Floating wildly */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[10%] rotate-12 z-20"
        >
          <div className="relative bg-[#d946ef] rounded-full p-6 border-4 border-[#06b6d4] yolo-box-shadow">
            <span className="material-symbols-outlined text-7xl text-white font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
              pets
            </span>
          </div>
          {/* Decorative Sparkles */}
          <motion.span 
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="material-symbols-outlined absolute -top-8 -left-4 text-[#06b6d4] text-5xl"
          >
            star
          </motion.span>
          <motion.span 
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="material-symbols-outlined absolute -bottom-4 -right-4 text-[#4c1d95] text-4xl"
          >
            favorite
          </motion.span>
        </motion.div>

        {/* Loading Text Floating */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="absolute top-[45%] left-[5%] -rotate-3 z-20 w-[90%]"
        >
          <h1 
            className="text-5xl md:text-7xl text-[#4c1d95] font-black uppercase tracking-tight leading-[1.1] yolo-text-shadow"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            ¡Prepárate<br/>para el<br/>maullido!
          </h1>
        </motion.div>

        {/* Progress Indicator (Wild Tube) */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-[15%] left-[5%] w-[90%] md:w-[60%] md:left-[20%] z-20 rotate-2"
        >
          <div className="w-full h-8 bg-white border-4 border-[#4c1d95] rounded-full overflow-hidden relative yolo-box-shadow">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d946ef] via-[#06b6d4] to-[#4c1d95] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-6 flex justify-center">
            <p 
              className="text-sm text-white bg-[#4c1d95] px-6 py-3 border-2 border-[#06b6d4] -rotate-2 uppercase tracking-widest font-bold shadow-[4px_4px_0px_#d946ef]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Desbloqueando la casa de muñecas...
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  )
}
