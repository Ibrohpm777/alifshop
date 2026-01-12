import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState({})
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getCategories = async () => {
        const res = await fetch('https://dummyjson.com/products/category-list')
        return res.json()
    }

    const getProductsByCategory = async (category) => {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`)
        const result = await res.json()
        return result.products
    }

    const getAllProducts = async (categories) => {
        try {
            setLoading(true)

            const responses = await Promise.all(
                categories.map(cat => getProductsByCategory(cat))
            )

            const categoryData = {}

            categories.forEach((cat, index) => {
                categoryData[cat] = responses[index]
            })

            setData(categoryData)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const load = async () => {
            try {
                const cats = await getCategories()
                setCategories(cats)
                await getAllProducts(cats)
            } catch (err) {
                setError(err)
            }
        }

        load()
    }, [])

    const calculateDiscount = () =>
        Math.floor(Math.random() * 30) + 5

    const getBadgeColor = () => {
        const colors = [
            'badge-primary',
            'badge-secondary',
            'badge-accent',
            'badge-info',
            'badge-success',
            'badge-warning',
            'badge-error'
        ]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const formatUSD = (price) =>
        `$${price.toLocaleString('en-US')}`

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

    return (
        <div className="container max-w-[80%] mx-auto py-8">
            {Object.keys(data).map(category => (
                <div key={category} className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold capitalize">{category}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {data[category].slice(0, 5).map(product => {
                            const discount = calculateDiscount()
                            const originalPrice = Math.floor(
                                product.price * (1 + discount / 100)
                            )

                            return (
                                <Link
                                    key={product.id}
                                    to={`/product/${product.id}`}
                                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <figure className="relative px-4 pt-4">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="rounded-xl h-48 w-full object-cover"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <div className={`badge ${getBadgeColor()} badge-lg font-bold`}>
                                                -{discount}%
                                            </div>
                                        </div>
                                    </figure>

                                    <div className="card-body p-4">
                                        <h3 className="card-title text-base line-clamp-2 h-12">
                                            {product.title}
                                        </h3>

                                        <div className="space-y-1">
                                            <div className={`badge ${getBadgeColor()} badge-outline`}>
                                                from {formatUSD(Math.floor(product.price / 12))}/month
                                            </div>
                                            <p className="text-sm text-gray-400 line-through">
                                                {formatUSD(originalPrice)}
                                            </p>
                                            <p className="text-xl font-bold text-error">
                                                {formatUSD(product.price)}
                                            </p>
                                        </div>

                                        <div className="card-actions mt-4">
                                            <button className="btn btn-warning btn-block">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
