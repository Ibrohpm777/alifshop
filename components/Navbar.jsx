import React, { useState } from 'react'

const categories = [
  { id: 1, title: "Смартфоны и гаджеты", href: "/smartphones" },
  { id: 2, title: "Ноутбуки и компьютеры", href: "/laptops" },
  { id: 3, title: "ТВ и проекторы", href: "/tv" },
  { id: 4, title: "Аудиотехника", href: "/audio" },
  { id: 5, title: "Транспорт", href: "/transport" },
  { id: 6, title: "Техника для дома", href: "/home" },
  { id: 7, title: "Техника для кухни", href: "/kitchen" },
  { id: 8, title: "Красота и уход", href: "/beauty" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)



  return (
    <div className='container mx-auto max-w-[80%] flex flex-col items-center gap-10 mb-10'>
      <div className='flex w-full items-center gap-4 p-4'>
        <a href="./"><img className='' src="./assets/alifshop.png" alt="" /></a>

        <form action="" className='flex items-center rounded-xl p-4 flex-1'>
          <input type="text" placeholder='Search product...' className='w-full input input-primary rounded-r-none' />
          <button className='cursor-pointer btn btn-primary rounded-l-none'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg></button>
        </form>

        <a href="" className='flex flex-col items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>          <span>Корзина</span>
        </a>

        <a href="" className='flex flex-col items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>          <span>Авиабилеты</span>
        </a>

        <a href="" className='flex flex-col items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>          <span>Избранное</span>
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

      <div className='flex items-center gap-5 max-w- [80%]'>

        {categories.map(({ id, title, href }) => (
          <a
            key={id}
            href={href}
            className="text-primary hover:text-secondary font-medium transition-all"
          >
            {title}
          </a>
        ))}

      </div>
    </div>
  )
}

export default Navbar