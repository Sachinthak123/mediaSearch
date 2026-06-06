import { Route, Routes } from 'react-router-dom'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/MediaApi'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collectionPage' element={<CollectionPage />} />
      </Routes>


       <ToastContainer />
      
    </div>

    
  )
}

export default App
