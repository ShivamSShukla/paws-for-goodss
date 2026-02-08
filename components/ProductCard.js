export default function ProductCard({ product, region }) {
  const affiliateLink = region === 'UK' ? product.linkUK : product.linkUS

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
      {/* Product Image */}
      <div className="relative aspect-square bg-warm-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-display font-bold text-lg mb-2 text-warm-900 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-warm-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary-600">
            {region === 'UK' ? 'Â£' : '$'}{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-warm-500 line-through">
              {region === 'UK' ? 'Â£' : '$'}{product.originalPrice}
            </span>
          )}
        </div>

        {/* Commission Info */}
        <div className="bg-forest-50 border border-forest-200 rounded-lg p-3 mb-4">
          <p className="text-xs text-forest-800">
            <strong>ðŸ¾ Impact:</strong> ~{region === 'UK' ? 'Â£' : '$'}
            {(product.price * 0.04).toFixed(2)} commission helps feed street animals
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full bg-primary-500 text-white text-center px-4 py-3 rounded-lg font-bold hover:bg-primary-600 transition-all shadow-md hover:shadow-lg"
        >
          View on Amazon
        </a>

        <p className="text-xs text-warm-500 mt-2 text-center">
          Affiliate link â€¢ No extra cost to you
        </p>
      </div>
    </div>
  )
}
