import { Link } from 'react-router-dom'
import Background from '../assets/home-bg.png'
import Car from '../assets/home-car.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import './Banner.css'

function Banner () {
  return (
    <>
      <section className='banner'>
        <img className='backgroung' src={Background} />
        <div className='banner-content'>
          <div className='text'>
            <h4>Plan your trip now</h4>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
            </p>
            <div className='text-btn'>
              <Link className='std-button' to=''>
                Book Ride &nbsp; <FontAwesomeIcon icon={faCircleCheck} />
              </Link>
              <Link className='learn-more' to=''>
                Learn More &nbsp; <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            </div>
          </div>
          <img className='banner-car' src={Car} />
        </div>
      </section>
    </>
  )
}

export default Banner
