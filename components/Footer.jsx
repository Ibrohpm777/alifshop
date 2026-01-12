import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#f4f6f7] pt-7 px-50 flex justify-between items-center mb-17 mt-10 border-b-1 border-b-neutral/30 pb-5'>
        <div className='relative'>
            <img className="absolute -top-51 left-0 z-[9999] max-w-[300px] scale-120" src="https://alifshop.uz/_ipx/f_webp,s_328x344/images/illustrations/alifshop-app-ru.png" alt="" />
        </div>


        <div className='flex flex-col items-start max-w-[25%] mx-auto gap-4'>
            <h2 className='font-bold text-3xl'>Выгодные предложения всегда рядом</h2>
            <p className='text-neutral/70 font-medium'>Заказывайте через приложение alif shop, узнайте о выгодных предложениях быстрее всех</p>

            <div className='flex gap-2'>
                <a href="https://play.google.com/store/apps/details?id=com.aliftech.alifshop" target='blank'><img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/play-market-icon.svg" alt="Google Play" /></a>
                <a href="https://apps.apple.com/uz/app/alif-shop/id6443502616" target='blank'><img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-store-icon.svg" alt="App Store" /></a>
                <a href="https://appgallery.huawei.com/app/C106710281" target='blank'><img src="https://alifshop.uz/_ipx/f_webp,s_141x38/images/app-gallery-icon.svg" alt="App Gallery" /></a>
            </div>
        </div>


        <div className='flex flex-col items-center gap-2 max-w-[8%]'>
            <img src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp" alt="" />
            <p className='text-neutral/70 font-medium text-center'>Наведите камеру на QR-код, чтобы скачать</p>
        </div>
    </div>
  )
}

export default Footer