import logo from '../../assets/hypercoder-logo.png'
import overview from '../../assets/hypercoder-overview.png'

import './HypercoderOverviewSection.css'

const HypercoderOverview = () => {
  return (
    <section className='hypercoder-overview'>
      <div className='overview-content'>
        <img src={logo} style={{ width: '284px', height: '210px' }} alt='HyperCoder Interface' />
        <p>
          <strong>DXConverge.AI </strong>handles the entire product engineering lifecycle seamlessly
          – creating a complete enterprise solution with one application
        </p>
        <p>
          <strong>DXC’s internal engine to make our people and our products more valuable</strong>
        </p>
      </div>
      <div className='overview-logo'>
        <img src={overview} alt='HyperCoder overview' />
      </div>
    </section>
  )
}

export default HypercoderOverview
