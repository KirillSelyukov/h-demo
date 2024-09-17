import '../../App.css'
const StatisticsSection1 = () => {
  const stats = [
    { label: 'Faster development', value: '25%' },
    { label: 'Higher quality code', value: '40-50%' },
    { label: 'Reduced cost', value: '-$74K' },
    { label: 'Reduced cost', value: '-$74K' },
    { label: 'Reduced cost', value: '-$74K' },
  ]

  return (
    <section className='statistics-section'>
      {/* <p>
        <strong>
          Enterprise-grade, AI-powered, code generation tool that enables DXC senior Engineers to
          break the Iron Triangle
        </strong>
      </p> */}
      <div className='stat-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='stat-item'>
            <h4>{stat.value}</h4>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import logo from '../../assets/hypercoder-logo.png'
import reactLogo from '../../assets/react.svg'
import './StatisticSection.css'
const StatisticsSection = () => {
  const stats = [
    {
      label:
        'Achieve an average productivity gain of 25% on high volume and labor-intensive tasks​',
      value: '25%',
    },
    {
      label: 'Reduce incident volume by up to 30%, enabling laser focus on the real problems',
      value: '40-50%',
    },
    {
      label: 'Automatically diagnose or resolve up to 75% of incidents without human intervention',
      value: '-$74K',
    },
    {
      label: 'Decrease mean time to resolve by up to 30% by eliminating manual effort',
      value: '-$74K',
    },
  ]

  return (
    <section>
      <div>
        <h1>HyperCoder Statistics</h1>
      </div>
      <div className='statistics-section2'>
        {stats.map((stat, index) => (
          <div key={index} className='stat-item2'>
            <img
              src={reactLogo}
              style={{ width: '175px', height: '130px' }}
              alt='HyperCoder Interface'
            />
            <i className='fas fa-code'></i>
            <hr />
            <span className='info-section'>
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatisticsSection
