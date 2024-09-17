// import ReactPlayer from 'react-player'
// import '../../App.css'
// const HeroSection = () => {
//   const videoFilePath =
//     'https://cdn.biteable.com/social/videos/storage/hzh5s2llac37dt65bdf0t4vauxmf'
//   return (
//     <section className='hero-section'>
//       <div className='hero-content'>
//         <h1>DXConverge.AI</h1>
//         <p>Enterprise-grade, AI-powered code generation tool...</p>
//         <button className='cta-btn'>Get Started</button>

//         {/* <video
//           id='Player_html5_api'
//           class='vjs-tech'
//           data-setup='{
//       "controls": true,
//       "autoplay": false,
//       "preload": "auto",
//       "responsive": true,
//       "playbackRates": [0.5, 1, 1.25, 1.5, 1.75, 2]
//     }'
//           crossorigin='anonymous'
//           poster='https://cdn.biteable.com/social/videos/storage/hzh5s2llac37dt65bdf0t4vauxmf'
//           controlslist='nodownload'
//           playsinline=''
//           tabindex='-1'
//           preload='auto'
//           src='https://cdn.biteable.com/social/renders/11185826/8049903/4258964/66c4462d3de41cd9b2d40aa8370970f5ff0ff415.mp4'
//         >
//           <source
//             src='https://cdn.biteable.com/social/renders/11185826/8049903/4258964/66c4462d3de41cd9b2d40aa8370970f5ff0ff415.mp4'
//             type='video/mp4'
//             crossorigin='anonymous'
//           />
//         </video> */}
//         {/* <ReactPlayer url={videoFilePath} width='300' height='300' controls={true} />
//         <ReactPlayer
//           url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
//           controls={true}
//           width='300'
//           height='300'
//         /> */}
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import './HeroSection.css'
import logo from '../../assets/dxconverge-logo.png'

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <div style={{ display: 'flex' }}>
          <div className='hero-logo'>
            <img src={logo} alt='DXConverge.AI Logo' />
          </div>
          <div className='hero-text'>
            <h1>DXConverge.AI</h1>
            <p>
              Enterprise-grade, AI-powered, code generation tool that enables DXC senior Engineers
              to break the Iron Triangle
            </p>
          </div>
        </div>

        <div className='hero-buttons'>
          <button className='demo-btn'>DEMO</button>
          <button className='get-started-btn'>GET STARTED</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
