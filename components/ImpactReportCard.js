export default function ImpactReportCard({ report }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-warm-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6">
        <h3 className="font-display font-bold text-xl mb-1">{report.title}</h3>
        <p className="text-primary-100 text-sm">{report.date}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-warm-50 rounded-lg">
            <div className="text-2xl font-bold text-primary-600">{report.meals}</div>
            <div className="text-xs text-warm-600">Meals</div>
          </div>
          <div className="text-center p-3 bg-warm-50 rounded-lg">
            <div className="text-2xl font-bold text-primary-600">{report.animals}</div>
            <div className="text-xs text-warm-600">Animals</div>
          </div>
          <div className="text-center p-3 bg-warm-50 rounded-lg">
            <div className="text-2xl font-bold text-forest-600">
              ${report.spent.toLocaleString()}
            </div>
            <div className="text-xs text-warm-600">Spent</div>
          </div>
          <div className="text-center p-3 bg-warm-50 rounded-lg">
            <div className="text-2xl font-bold text-forest-600">
              ${report.commission.toLocaleString()}
            </div>
            <div className="text-xs text-warm-600">Earned</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-warm-700 leading-relaxed">{report.description}</p>

        {/* Receipts & Photos */}
        <div className="flex flex-wrap gap-2 pt-2">
          {report.receipts && report.receipts.length > 0 && (
            <a
              href={report.receipts[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-700 rounded-lg text-sm font-medium hover:bg-forest-200 transition-colors"
            >
              ðŸ“„ View Receipts ({report.receipts.length})
            </a>
          )}
          {report.photos && report.photos.length > 0 && (
            <a
              href={report.photos[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-200 transition-colors"
            >
              ðŸ“¸ View Photos ({report.photos.length})
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
