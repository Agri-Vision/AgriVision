import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/error'
import Footer from '../components/Footer/footer'

const IndexRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* insert all routes above the error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default IndexRoutes
