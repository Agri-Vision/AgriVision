import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import Footer from '../components/Footer/footer'

const IndexRoutes = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default IndexRoutes
