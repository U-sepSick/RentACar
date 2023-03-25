import { Link } from 'react-router-dom'
import Logo from '../assets/navbar_logo.png'
import './Navbar.css'

function Navbar () {
  return (
    <>
      <nav>
        <div className='navbar'>
          <div className='navbar_img'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt='logo-img' />
            </Link>
          </div>
          <ul className='navbar_links'>
            <li>
              <Link className='home-link' to='/'>
                Home
              </Link>
            </li>
            <li>
              {' '}
              <Link className='about-link' to='/about'>
                About
              </Link>
            </li>
            <li>
              {' '}
              <Link className='models-link' to='/vehicle-models'>
                Vehicle Models
              </Link>
            </li>
            <li>
              {' '}
              <Link className='testi-link' to='/testimonials'>
                Testimonials
              </Link>
            </li>
            <li>
              {' '}
              <Link className='team-link' to='/our-team'>
                Our Team
              </Link>
            </li>
            <li>
              {' '}
              <Link className='contact-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='navbar_btn'>
            <Link className='navbar_btn_sign' to='/'>
              Sign In
            </Link>
            <Link className='navbar_btn_reg' to='/'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
