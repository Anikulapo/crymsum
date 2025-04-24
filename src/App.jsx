import Clothes from './pages/Clothes.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import MyOrder from './pages/My Order.jsx'
import MyAddresses from './pages/MyAddresses.jsx'
import MyPayments from './pages/MyPayments.jsx'
import MyCart from './pages/MyCart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Product from './pages/Product.jsx'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Toaster } from 'react-hot-toast';
import Rated from './pages/Rated.jsx'
import './App.css'

function App() {

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Toaster position='bottom-right'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/order' element={<MyOrder/>}/>
        <Route path='/address' element={<MyAddresses/>}/>
        <Route path='/payment' element={<MyPayments/>}/>
        <Route path='/cart' element={<MyCart/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/Rated' element={<Rated/>}/>
        {/* Add other routes here */}
      </Routes>
    </>
  )
}

export default App
