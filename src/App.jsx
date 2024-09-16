import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar'
import Rooms from './components/Rooms/Rooms'
import Service from './components/Service/Service'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Rooms />
      <Service />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}

export default App
