import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

// Card with cat-ear silhouette on top — signature element of the dollhouse theme
export default function CatEarCard({ children, className = '', style, onClick }: Props) {
  return (
    <div
      className={`cat-ear-card ${className}`}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  )
}
