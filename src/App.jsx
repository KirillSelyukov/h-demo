import './App.css'
import HeroSection from './components/content/HeroSection'
import HypercoderOverview from './components/content/HypercoderOverviewSection'
import IndustrySection from './components/content/IndustrySection'
import IndustryState from './components/content/IndustryStateSection'
import InfoSection from './components/content/InfoSection'
import StatisticsSection from './components/content/StatisticSection'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <HeroSection />
      {/* <InfoSection /> */}
      <IndustrySection />

      <HypercoderOverview />

      <StatisticsSection />

      <Footer />
    </div>
  )
}

export default App
