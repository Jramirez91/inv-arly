interface Props {
  step: number
  totalSteps: number
  label?: string
}

// Rainbow gradient progress bar with cat emoji marker
export default function RainbowProgress({ step, totalSteps, label }: Props) {
  const pct = Math.round((step / totalSteps) * 100)

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span
            className="font-display text-sm font-bold text-[#854d67]"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {label}
          </span>
          <span
            className="font-display text-sm font-bold text-[#6b5195]"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {step} / {totalSteps}
          </span>
        </div>
      )}
      <div className="rainbow-progress-track relative" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="rainbow-progress-fill"
          style={{ width: `${pct}%` }}
        />
        {/* Cat marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 select-none"
          style={{ left: `${pct}%` }}
          aria-hidden="true"
        >
          <span className="text-lg leading-none">🐱</span>
        </div>
      </div>
    </div>
  )
}
