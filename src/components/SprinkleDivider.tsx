// Sprinkle divider – replaces boring horizontal rules
const COLORS = ['#ffb7d5', '#d1b3ff', '#95dab4', '#b3e5ff', '#ffb7d5', '#d1b3ff', '#95dab4']

interface Props {
  count?: number
}

export default function SprinkleDivider({ count = 14 }: Props) {
  return (
    <div className="sprinkle-divider" role="separator" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="sprinkle-dot"
          style={{ backgroundColor: COLORS[i % COLORS.length] }}
        />
      ))}
    </div>
  )
}
