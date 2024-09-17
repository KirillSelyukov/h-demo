import '../../App.css'
import industryState from '../../assets/industryState1.png'
const IndustryState = () => {
  const opportunities = [
    'Reinvent how software’s engineered leveraging our AI/ML experience',
    'Improved project security and productivity...',
    'Initial focus on 100% reusing 60% of current practice...',
  ]

  return (
    <section className='industry-state'>
      <h2>The Current State of the Industry</h2>
      <ul>
        {opportunities.map((opportunity, index) => (
          <li key={index}>{opportunity}</li>
        ))}
      </ul>
      <div className='icon-grid'>
        <img style={{ width: '820px', height: '354px' }} src={industryState} alt='Industry State' />
      </div>

      {/* <div>
        <video width='300' height='300' controls>
          <source
            src='https://cdn.biteable.com/social/renders/11185826/8049903/4258964/66c4462d3de41cd9b2d40aa8370970f5ff0ff415.mp4'
            type='video/mp4'
            crossorigin='anonymous'
          />
        </video>
      </div> */}
    </section>
  )
}

export default IndustryState
