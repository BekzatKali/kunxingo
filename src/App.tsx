
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Advantages from './components/Advantages'
import OurTeam from './components/OurTeam'
import GoodsPhotos from './components/GoodsPhotos'
import Costs from './components/Costs'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Map from './components/Map'

function App() {
  

  return (
    <div className='overflow-hidden'>
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Advantages />
      <OurTeam />
      <GoodsPhotos />
      <Costs />
      <Contacts />
      <Map />
      <Footer />
      
    </div>
  )
}

export default App
