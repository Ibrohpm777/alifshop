import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SwiperCustom = () => {
  return (
    <div className='container mx-auto max-w-[80%] mb-10'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/215/1747912665-shop_skidki2v_1600x491_ru.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/355/1766731216-W52_shop_frame_1600x491_RU.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/298/1763488337-W18_shop_novoselye_1600х491_ru.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/299/1747132207-Protein%201600x491%20RU.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/347/1763489708-W44_shop_bitovaya%20ximiya_1600x491_RU.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/335/1763488871-1759468611-w40_shop_issiqlik_1600x491_ru.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/353/1766405937-w51_shop_ZTE_1600x491_ru.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/306/1748410748-Kids%201600x491%20UZ.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/329/1756124358-Сайт%20главная%201600х491.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-2xl' src="https://s3.fortifai.uz/shop/catalog/carousel/356/1767596046-W52_shop_fitnes_1600x491_RU.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperCustom