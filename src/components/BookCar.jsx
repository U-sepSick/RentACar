import './BookCar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faLocationDot, faCalendarDays, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function BookCar () {
  return (
    <>
      <div className='book-car'>
        <h1>Book a car</h1>
        <form className='book-car-container'>
          <div className='select-car'>
            <label>
              <FontAwesomeIcon className='car-img' icon={faCar} /> &nbsp; Select your car type
            </label>
            <select value='' onChange=''>
              <option>Select your car type</option>
              <option value='Audi A1 S-Line'>Audi A1 S-Line</option>
              <option value='VW Golf 6'>VW Golf 6</option>
              <option value='Toyota Camry'>Toyota Camry</option>
              <option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
            </select>
          </div>
          <div className='pick-up'>
            <label>
              <FontAwesomeIcon className='location-img' icon={faLocationDot} /> &nbsp; Select pick-up location
            </label>
            <select value='' onChange=''>
              <option>Pick-up</option>
              <option value='Madrid'>Madrid</option>
              <option value='Barcelona'>Barcelona</option>
              <option value='Valencia'>Valencia</option>
              <option value='Sevilla'>Sevilla</option>
              <option value='Bilbao'>Bilbao</option>
            </select>
          </div>
          <div className='return'>
            <label>
              <FontAwesomeIcon className='location-img' icon={faLocationDot} /> &nbsp; Select return location
            </label>
            <select value='' onChange=''>
              <option>Return</option>
              <option value='Madrid'>Madrid</option>
              <option value='Barcelona'>Barcelona</option>
              <option value='Valencia'>Valencia</option>
              <option value='Sevilla'>Sevilla</option>
              <option value='Bilbao'>Bilbao</option>
            </select>
          </div>
          <div className='pick-up-date'>
            <label>
              <FontAwesomeIcon className='calendar-img' icon={faCalendarDays} /> &nbsp; Select date to pick-up
            </label>
            <select value='' onChange=''>
              <option>Pick-up date</option>
              <option value='Audi A1 S-Line'>Audi A1 S-Line</option>
              <option value='VW Golf 6'>VW Golf 6</option>
              <option value='Toyota Camry'>Toyota Camry</option>
              <option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
            </select>
          </div>
          <div className='return-date'>
            <label>
              <FontAwesomeIcon className='calendar-img' icon={faCalendarDays} /> &nbsp; Select date to return
            </label>
            <select value='' onChange=''>
              <option>Return date</option>
              <option value='Audi A1 S-Line'>Audi A1 S-Line</option>
              <option value='VW Golf 6'>VW Golf 6</option>
              <option value='Toyota Camry'>Toyota Camry</option>
              <option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
            </select>
          </div>
          <Link className='std-button' to=''>
            Search &nbsp; <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </form>
      </div>
    </>
  )
}
export default BookCar
