import industryState from '../../assets/industryState1.png'
import './IndustrySection.css'
const IndustrySection = () => {
  return (
    <section className='industry-section'>
      <div className='industry-content'>
        <h2>The Current State of the Industry</h2>
        <p>
          Multiple companies are investing heavily in AI-enabled development tools to automate code
          creation + generate tests. Current landscape has significant gaps to be enterprise-ready.
        </p>

        <h3>DXC Opportunity:</h3>
        <ul>
          <li>
            <strong>Reinvent</strong> how software is engineered leveraging our 60 yrs. experience
          </li>
          <li>
            <strong>Increased project security + uninterrupted productivity</strong> for global
            developers via offline capabilities
          </li>
          <li>
            <strong>Initial focus on Java: impacting 60%</strong> of current engineering practice
          </li>
          <li>
            <strong>Auto generate front-end code</strong> with industry’s first Figma integration
          </li>
          <li>
            <strong>Rapid development + cleaner project handoff</strong> with cross-functional teams
          </li>
        </ul>
      </div>

      <div className='industry-logos'>
        <img style={{ width: '820px', height: '354px' }} src={industryState} alt='Industry State' />
      </div>
    </section>
  )
}

export default IndustrySection
