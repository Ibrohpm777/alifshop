import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a1d23] to-[#0f1115] text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-16">

          {/* 1. Документы */}
          <div className="space-y-5">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Документы</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Общие условия продажи</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Устав</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Свидетельство</a></li>
            </ul>
          </div>

          {/* 2. Сервис */}
          <div className="space-y-5">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Сервис</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Время намаза</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Рассрочка в Исламе</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Продавайте на alif shop!</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Возвраты</a></li>
            </ul>
          </div>

          {/* 3. Каталог товаров */}
          <div className="space-y-5">
            <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Каталог товаров</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Смартфоны и телефоны</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Все наушники</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Гаджеты</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Аксессуары для телефонов</a></li>
              <li><a href="#" className="text-white hover:text-[#FFBE1F] transition">Часы и аксессуары</a></li>
            </ul>
          </div>

          {/* 4. Мы в соц-медиа + Справочная служба */}
          <div className="space-y-8 col-span-2 lg:col-span-2">
            {/* Соцсети */}
            <div className="space-y-5">
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Мы в соц-медиа</h3>
              <div className="flex gap-4 text-3xl">
                <FaInstagram className='cursor-pointer text-pink-600'/>
                <FaFacebookF className='cursor-pointer text-blue-900'/>
                <FaTelegram  className='cursor-pointer text-blue-400' />
                <FaOdnoklassniki className='cursor-pointer text-orange-600' />
                <FaTiktok className='cursor-pointer text-black'  />
                
              </div>
            </div>

            {/* Справочная служба */}
            <div className="space-y-5">
              <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Справочная служба</h3>
              <div className="space-y-4">
                <a href="https://t.me/alifshop_uz" className="text-white font-bold text-lg hover:text-[#FFBE1F] transition flex items-center gap-2 group">
                  @alifshop_uz
                </a>
                <a href="tel:+998555121212" className="text-white font-bold text-lg hover:text-[#FFBE1F] transition flex items-center gap-2 group">
                  <span className="text-xl">Phone</span> +998 555 12 12 12
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Chiziq */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-lg">
            2025 © <span className="text-white font-medium">alifshop.uz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;