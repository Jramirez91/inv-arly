import { useEffect, useRef, useCallback } from 'react'
import { COLORS } from '../assets'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  decay: number
  shape: 'circle' | 'star' | 'spark'
  rotation: number
  rotationSpeed: number
}

const PARTICLE_COLORS = [
  COLORS.primary,
  COLORS.primaryContainer,
  COLORS.secondary,
  COLORS.secondaryContainer,
  COLORS.tertiary,
  COLORS.tertiaryContainer,
  '#ffffff',
  '#ffe4f0',
  '#d4f0b0',
]

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rotation: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.beginPath()
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
    const ir = r * 0.4
    if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
    else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r)
    const innerAngle = angle + (2 * Math.PI) / 10
    ctx.lineTo(Math.cos(innerAngle) * ir, Math.sin(innerAngle) * ir)
  }
  ctx.closePath()
  ctx.restore()
}

function createParticles(x: number, y: number, count = 40): Particle[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 8 + 2
    const shapes: Particle['shape'][] = ['circle', 'star', 'spark']
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 3,
      radius: Math.random() * 6 + 2,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      alpha: 1,
      decay: Math.random() * 0.015 + 0.012,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
    }
  })
}

export default function SparkleExplosion() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current = particlesRef.current.filter(p => p.alpha > 0.02)

    for (const p of particlesRef.current) {
      ctx.save()
      ctx.globalAlpha = p.alpha
      ctx.fillStyle = p.color
      ctx.strokeStyle = p.color

      if (p.shape === 'star') {
        drawStar(ctx, p.x, p.y, p.radius, p.rotation)
        ctx.fill()
      } else if (p.shape === 'spark') {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, p.radius * 2.5, p.radius * 0.5, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      } else {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()

      // Physics
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.18  // gravity
      p.vx *= 0.98  // air resistance
      p.alpha -= p.decay
      p.rotation += p.rotationSpeed
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])


  const handleClick = useCallback((e: MouseEvent) => {
    particlesRef.current.push(...createParticles(e.clientX, e.clientY, 50))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    const handleBurst = (e: Event) => {
      const customEvent = e as CustomEvent
      const { x, y, count } = customEvent.detail || { x: window.innerWidth / 2, y: window.innerHeight / 2, count: 100 }
      particlesRef.current.push(...createParticles(x, y, count))
    }

    window.addEventListener('resize', resize)
    window.addEventListener('click', handleClick)
    window.addEventListener('sparkle-burst', handleBurst)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('sparkle-burst', handleBurst)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animate, handleClick])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999]"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
