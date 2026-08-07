// Floating decorative elements for the magical background
export default function FloatingElements() {
  const elements = [
    { icon: 'star',         cls: 'top-[10%]  left-[5%]',   anim: 'animate-float',         color: 'text-[#ffb7d5]', size: 'text-4xl', delay: '' },
    { icon: 'pets',         cls: 'top-[18%]  right-[8%]',  anim: 'animate-float-reverse',  color: 'text-[#d1b3ff]', size: 'text-5xl', delay: '' },
    { icon: 'favorite',     cls: 'top-[42%]  left-[12%]',  anim: 'animate-float-delayed',  color: 'text-[#95dab4]', size: 'text-3xl', delay: '' },
    { icon: 'auto_awesome', cls: 'top-[60%]  right-[15%]', anim: 'animate-float',          color: 'text-[#ffb7d5]', size: 'text-4xl', delay: '' },
    { icon: 'star',         cls: 'bottom-[25%] right-[5%]',anim: 'animate-bounce-soft',    color: 'text-[#854d67]', size: 'text-4xl', delay: '' },
    { icon: 'pets',         cls: 'bottom-[12%] left-[8%]', anim: 'animate-float-reverse',  color: 'text-[#d1b3ff]', size: 'text-5xl', delay: '' },
    { icon: 'celebration',  cls: 'top-[30%]  right-[3%]',  anim: 'animate-wiggle',         color: 'text-[#95dab4]', size: 'text-3xl', delay: '' },
    { icon: 'cake',         cls: 'bottom-[40%] left-[3%]', anim: 'animate-float',          color: 'text-[#ffb7d5]', size: 'text-4xl', delay: '' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {elements.map((el, i) => (
        <span
          key={i}
          className={`material-symbols-outlined absolute ${el.cls} ${el.anim} ${el.color} ${el.size} opacity-50`}
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {el.icon}
        </span>
      ))}
    </div>
  )
}
