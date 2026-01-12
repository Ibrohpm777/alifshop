import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const categories = [
  { slug: "beauty", title: "Красота и уход" },
  { slug: "fragrances", title: "Духи и ароматы" },
  { slug: "furniture", title: "Мебель" },
  { slug: "groceries", title: "Продукты и бакалея" },
  { slug: "home-decoration", title: "Декор для дома" },
  { slug: "kitchen-accessories", title: "Аксессуары для кухни" },
  { slug: "laptops", title: "Ноутбуки" },
  { slug: "mens-shirts", title: "Мужские рубашки" },
  { slug: "mens-shoes", title: "Мужская обувь" },
  { slug: "mens-watches", title: "Мужские часы" },
  { slug: "mobile-accessories", title: "Аксессуары для телефонов" },
  { slug: "motorcycle", title: "Мотоциклы и запчасти" },
  { slug: "skin-care", title: "Уход за кожей" },
  { slug: "smartphones", title: "Смартфоны" },
  { slug: "sports-accessories", title: "Спортивные аксессуары" },
  { slug: "sunglasses", title: "Солнцезащитные очки" },
  { slug: "tablets", title: "Планшеты" },
  { slug: "tops", title: "Топы и футболки" },
  { slug: "vehicle", title: "Транспорт и авто" },
  { slug: "womens-bags", title: "Женские сумки" },
  { slug: "womens-dresses", title: "Женские платья" },
  { slug: "womens-jewellery", title: "Женские украшения" },
  { slug: "womens-shoes", title: "Женская обувь" },
  { slug: "womens-watches", title: "Женские часы" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch('https://dummyjson.com/products?limit=100')
      const data = await res.json()
      setProducts(data.products)
    }
    loadProducts()
  }, [])

  useEffect(() => {
    if (!search) {
      setResults([])
      return
    }

    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )

    setResults(filtered.slice(0, 6))
  }, [search, products])

  return (
    <div className='container mx-auto max-w-[80%] flex flex-col items-center gap-10 mb-10'>
      <div className='flex w-full items-center gap-4 p-4 relative'>
        <a href="./">
          <img src="./assets/alifshop.png" alt="" />
        </a>

        {/* SEARCH */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-primary w-full"
          />

          {search && (
            <div className="absolute z-50 mt-2 w-full bg-base-100 border rounded-box shadow-xl max-h-80 overflow-auto">
              {results.length ? (
                results.map(product => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSearch('')
                      navigate(`/product/${product.id}`)
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-base-200 cursor-pointer"
                  >
                    <img
                      src={product.thumbnail}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-sm text-gray-500">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-400">
                  Ничего не найдено
                </div>
              )}
            </div>
          )}
        </div>

        {/* ICONS */}
        <a className='flex flex-col items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          <span>Корзина</span>
        </a>

        <a className='flex flex-col items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
          <span>Избранное</span>
        </a>

        {!loggedIn && (
          <button
            onClick={() => setOpen(true)}
            className="p-3 border border-accent border-3 rounded-xl hover:bg-accent hover:text-secondary transition-all text-xl font-bold hover:scale-120 active:scale-90 cursor-pointer"
          >
            Войти
          </button>
        )}





        {open && (
          <dialog className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Вход</h3>

              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="input input-bordered w-full mt-4"
              />

              <div className="modal-action">
                <button className="btn" onClick={() => setOpen(false)}>
                  Отмена
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setLoggedIn(true)
                    setOpen(false)
                  }}
                >
                  Продолжить
                </button>

              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setOpen(false)}>close</button>
            </form>
          </dialog>
        )}
      </div>


      <div className='flex items-center gap-5 text-nowrap'>
        {categories.slice(0, 10).map(cat => (
          <Link to="/products/category" key={cat.slug} className="text-neutral/70 font-medium">
            {cat.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
