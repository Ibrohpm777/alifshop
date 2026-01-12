import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedInstallment, setSelectedInstallment] = useState(24)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-error max-w-md mx-auto mt-10">
        <span>Error: {error.message}</span>
      </div>
    )
  }

  if (!product) return null

  const discount = Math.floor(Math.random() * 25) + 10
  const originalPrice = Math.floor(product.price * (1 + discount / 100))
  const installmentPrice = Math.floor(product.price / selectedInstallment)
  const installmentOptions = [3, 6, 12, 18, 24]

  const formatUSD = (price) =>
    `$${price.toLocaleString('en-US')}`

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li>
            <Link to="/" className="link link-primary">Назад</Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative bg-base-200 rounded-2xl p-8">
            <img
              src={product.images[selectedImage] || product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="badge badge-error badge-lg font-bold">
                -{discount}%
              </div>
              <div className="badge badge-info badge-lg">
                Hot deal
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`cursor-pointer border-2 rounded-lg p-2 ${selectedImage === index ? 'border-warning' : 'border-base-300'
                  }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rating rating-sm">
                {[1, 2, 3, 4, 5].map(star => (
                  <input
                    key={star}
                    type="radio"
                    className="mask mask-star-2 bg-warning"
                    checked={Math.round(product.rating) === star}
                    readOnly
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} / 5
              </span>
            </div>
            <div className="badge badge-lg">
              {product.brand}
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <div className="bg-base-200 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Installment</p>
                <p className="text-3xl font-bold">
                  {formatUSD(installmentPrice)} <span className="text-lg">/ month</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-sm text-gray-400 line-through">
                  {formatUSD(originalPrice)}
                </p>
                <p className="text-3xl font-bold text-error">
                  {formatUSD(product.price)}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              {installmentOptions.map(months => (
                <button
                  key={months}
                  onClick={() => setSelectedInstallment(months)}
                  className={`btn btn-sm flex-1 ${selectedInstallment === months
                      ? 'btn-warning'
                      : 'btn-outline'
                    }`}
                >
                  {months} mo
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="btn btn-warning flex-1">
                Add to cart
              </button>
              <button className="btn btn-outline btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" stroke="currentColor" strokeWidth="2">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
              </button>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              Product description
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="space-y-2">
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Rating:</b> {product.rating}</p>
                <p><b>Stock:</b> {product.stock}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
