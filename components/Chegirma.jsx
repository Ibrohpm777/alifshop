import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import baner from '../assets/baner.png';

const Chegirma = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastProduct, setToastProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);

  const absoluteMin = 0;
  const absoluteMax = 2000000;

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);

  const minPercent =
    ((minPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;
  const maxPercent =
    ((maxPrice - absoluteMin) / (absoluteMax - absoluteMin)) * 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=64&skip=95"
        );
        if (!res.ok) throw new Error("Serverdan xato keldi");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!toastProduct) return;
    const timer = setTimeout(() => setToastProduct(null), 3000);
    return () => clearTimeout(timer);
  }, [toastProduct]);

  const toggleLike = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter((item) => {
    const price = item.price * 13000;
    return price >= minPrice && price <= maxPrice;
  });

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const parseNumber = (str) => Number(str.replace(/\s/g, "")) || 0;

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      {toastProduct && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex gap-3 bg-white shadow-xl p-4 w-[420px]">
            <div className="text-green-500 mt-2.5 text-xl">✅</div>
            <div className="flex-1">
              <p className="font-semibold">Tovar savatda</p>
              <p className="text-sm text-gray-600">{toastProduct.title}</p>
            </div>
            <button
              className="cursor-pointer"
              onClick={() => setToastProduct(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}

      <div className="h-48 mb-8">
        <img src={baner} alt="" className="h-[172px] m-auto mt-10"/>
      </div>

      <div className="max-w-[80%] mx-auto flex gap-10">
        <div className="w-[260px] shrink-0">
          <p className="font-semibold mb-4">Narx</p>

          <div className="relative h-2 bg-gray-200 rounded mb-6">
            <div
              className="absolute h-2 bg-yellow-400 rounded"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />
            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 1000))
              }
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto range-thumb"
              style={{
                zIndex: minPrice > maxPrice - 10000 ? 5 : 3,
              }}
            />
            <input
              type="range"
              min={absoluteMin}
              max={absoluteMax}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 1000))
              }
              className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto range-thumb"
              style={{
                zIndex: 4,
              }}
            />
          </div>

          <div className="flex flex-col gap-3">
            <input
              value={`dan ${formatNumber(minPrice)}`}
              onChange={(e) =>
                setMinPrice(Math.min(parseNumber(e.target.value), maxPrice))
              }
              className="border rounded px-3 py-2"
            />
            <input
              value={`gacha ${formatNumber(maxPrice)}`}
              onChange={(e) =>
                setMaxPrice(Math.max(parseNumber(e.target.value), minPrice))
              }
              className="border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 flex-1 mb-10">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="relative p-2">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -{Math.round(item.discountPercentage)}%
                </span>
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-2 right-2 bg-white cursor-pointer rounded-full p-1 shadow"
                >
                  <CiHeart
                    className={`text-xl ${
                      likedProducts.includes(item.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-[120px] w-full object-contain"
                />
              </div>

              <div className="px-2 pb-2 flex flex-col gap-1">
                <p className="text-xs line-clamp-2 min-h-[32px]">
                  {item.title}
                </p>
                <span className="text-[10px] bg-yellow-100 text-yellow-700 w-fit px-1.5 py-0.5 rounded">
                  от {Math.round((item.price * 13000) / 12).toLocaleString()} сум/мес
                </span>
                <span className="text-[10px] text-gray-400 line-through">
                  {(item.price * 13000 * 1.15).toLocaleString()} so'm
                </span>
                <span className="text-red-500 font-semibold text-sm">
                  {(item.price * 13000).toLocaleString()} so'm
                </span>
                <button
                  onClick={() => setToastProduct(item)}
                  className="mt-1 bg-yellow-400 cursor-pointer font-semibold hover:bg-yellow-500 text-black text-xs py-2 rounded-lg flex items-center justify-center gap-1"
                >
                  🛒 Savatga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chegirma;
