import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ProductDetail from '../components/ProductDetail.jsx';
import Navbar from '../components/Navbar.jsx';
import SwiperCustom from '../components/Swiper.jsx';
import Chegirma from '../components/Chegirma.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/products/category",
    element: <>
      <Navbar />
      <SwiperCustom />
      <Chegirma />
    </>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
