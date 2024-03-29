import './ReservationDetailsCard.css'
import { getHumanDate } from '../utils'

const ReservationDetailsCard = ({ listing, user, booking, host }) => {
  const { totalDays, totalGuests, totalPrice, endDate, startDate } = booking
  const { Images, address, city, state } = listing
  const checkIn = getHumanDate(startDate);
  const checkOut = getHumanDate(endDate)
  const { firstName, lastName, email } = host

  return (
    <>
      <div className='reservation'>
        <p className='reservation__details-header'>Reservation Details</p>
        <ul>
          <li className='reservation__text-dates underline'>
            <span>
              <p className='reservation__detail'>CHECK-IN</p>
              <p className='reservation__value'>{checkIn}</p>
            </span>
            <span className='reservation__detail-out'>
              <p className='reservation__detail'>CHECK-OUT</p>
              <p className='reservation__value'>{checkOut}</p>
            </span>
          </li>
          <li className='reservation__text'>
          </li>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Guests</p>
            <p className='reservation__text-value'>{totalGuests}</p>
          </li>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Total Days</p>
            <p className='reservation__text-value'>{totalDays}</p>
          </li>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Total Price(USD)</p>
            <p className='reservation__text-value'>${totalPrice}</p>
          </li>

        </ul>
      </div>
      <div className='reservation'>
        <p className='reservation__details-header underline'>Booking Details</p>
        <ul>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Address</p>
            <p className='reservation__text-value'>{address}</p>
          </li>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Host</p>
            <p className='reservation__text-value'>{firstName} {lastName}</p>
          </li>
          <li className='reservation__detail-booking'>
            <p className='reservation__text'>Contact</p>
            <p className='reservation__text-value'>{email}</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ReservationDetailsCard;