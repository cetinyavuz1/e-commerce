import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App