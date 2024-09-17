// import '../../App.css'

// const InfoSection = () => {
//   return (
//     <section className='info-section'>
//       <h2>DXC Engineering developed an ENTERPRISE READY...</h2>
//       <p>Faster deployment. Higher quality code at a reduced cost.</p>
//       <button className='cta-btn'>About</button>
//     </section>
//   )
// }

// export default InfoSection

import './InfoSection.css'

//DXC Engineering developed an Enterprise Ready + AI powered platform integrated into all stages of the Software Development Life Cycle (SDLC) to enable collaboration and reimagine the Iron Triangle.

const InfoSection = () => {
  return (
    <section className='info-section'>
      <div className='info-content'>
        <p>
          <strong>DXC Engineering</strong> developed an{' '}
          <strong>ENTERPRISE READY + AI POWERED</strong> platform
        </p>
        <p>integrated into all stages of the Software Development Life Cycle (SDLC) to enable</p>
        <p>collaboration and reimagine the Iron Triangle.</p>
        <ul>
          <li>
            <strong>Faster</strong> development
          </li>
          <li>
            <strong>Higher quality</strong> code and
          </li>
          <li>
            at a <strong>reduced cost</strong>
          </li>
        </ul>
        <button className='about-btn'>ABOUT</button>
      </div>
    </section>
  )
}

export default InfoSection
