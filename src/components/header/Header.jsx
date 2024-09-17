import logo from '../../assets/dxc-logo.png'
import './header.css'
const Header = () => {
  const handleSighIn = () => {
    window.open(
      'https://devxdemo-prod-app-in.politefield-aabb04cd.centralindia.azurecontainerapps.io/',
      '_blank', // <- This is what makes it open in a new window.
    )
  }
  return (
    <header className='header'>
      <div className='header-left'>
        <img src={logo} alt='DXC Logo' className='logo' />
        <div className='product-name'>DXConverge.AI</div>
        <nav className='navbar'>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#help'>Help</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header-right'>
        {/* <div className='search-container'>
          <input type='text' placeholder='Search' />
          <button className='search-btn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-search'
              viewBox='0 0 24 24'
            >
              <circle cx='11' cy='11' r='8' />
              <line x1='21' y1='21' x2='16.65' y2='16.65' />
            </svg>
          </button>
        </div> */}
        <a href='#contact'>
          <b>Contact Us</b>
        </a>
        <button className='sign-in-btn' onClick={handleSighIn}>
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header
