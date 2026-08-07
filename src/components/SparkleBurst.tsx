import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Paleta Casa de Muñecas ──────────────────────────────── */
const COLORS = [
  '#ffb7d5', '#d1b3ff', '#95dab4', '#b3e5ff',
  '#fab2d0', '#854d67', '#6b5195', '#266a4b',
  '#ffd8e6', '#ecdcff', '#acf2ca', '#ffffff',
]

type Shape = 'circle' | 'star' | 'square' | 'heart'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; color: string
  alpha: number; decay: number
  rotation: number; rotationSpeed: number
  shape: Shape
}

function rand(min: number, max: number) { return Math.random() * (max - min) + min }

function drawStar(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath()
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2
    const radius = i % 2 === 0 ? r : r * 0.42
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fill()
}

function drawHeart(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath()
  ctx.moveTo(0, r * 0.3)
  ctx.bezierCurveTo( r,  -r * 0.3,  r * 1.5, r * 0.9, 0, r * 1.5)
  ctx.bezierCurveTo(-r * 1.5, r * 0.9, -r, -r * 0.3, 0, r * 0.3)
  ctx.fill()
}

export default function SparkleBurst() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width  = W
    canvas.height = H

    /* Burst origin: center-top area for dramatic effect */
    const cx = W / 2
    const cy = H * 0.35

    const shapes: Shape[] = ['circle', 'star', 'square', 'heart']
    const particles: Particle[] = Array.from({ length: 260 }, () => {
      const angle = rand(0, Math.PI * 2)
      const speed = rand(4, 22)
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - rand(1, 10),
        size: rand(5, 16),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 1,
        decay: rand(0.008, 0.018),
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.18, 0.18),
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }
    })

    let raf: number
    const hide = setTimeout(() => setVisible(false), 3200)

    function frame() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      let alive = false

      for (const p of particles) {
        if (p.alpha <= 0) continue
        alive = true

        p.x  += p.vx
        p.y  += p.vy
        p.vy += 0.28          // gravity
        p.vx *= 0.985         // air drag
        p.alpha   -= p.decay
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle   = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur  = 6
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)

        const r = p.size / 2
        switch (p.shape) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(0, 0, r, 0, Math.PI * 2)
            ctx.fill()
            break
          case 'star':
            drawStar(ctx, r)
            break
          case 'heart':
            ctx.scale(r / 8, r / 8)
            drawHeart(ctx, 8)
            break
          case 'square':
            ctx.fillRect(-r, -r, p.size, p.size)
            break
        }
        ctx.restore()
      }

      if (alive) raf = requestAnimationFrame(frame)
      else setVisible(false)
    }

    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hide)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
        >
          <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
