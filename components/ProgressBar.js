export default function ProgressBar({ current, target, label }) {
  const percentage = Math.min((current / target) * 100, 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-warm-700">{label}</span>
        <span className="text-sm font-bold text-primary-600">
          {percentage.toFixed(0)}%
        </span>
      </div>
      
      <div className="w-full bg-warm-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-2"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 10 && (
            <span className="text-xs font-bold text-white">ðŸ¾</span>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-warm-600">
          ${current.toLocaleString()} raised
        </span>
        <span className="text-xs text-warm-600">
          Goal: ${target.toLocaleString()}
        </span>
      </div>
    </div>
  )
}
