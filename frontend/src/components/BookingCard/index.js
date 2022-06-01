import './BookingCard.css'
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import { ValidationError } from '../../utils/validationError';
import { createNewBooking } from '../../store/bookings'


const BookingCard = ({ listing, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formatDate = (dateString) => {
    const day = dateString.getDate();
    const month = dateString.getMonth() + 1;
    const year = dateString.getFullYear();
    const formattedDate = `${month}/${day}/${year}`
    return formattedDate
  }

  const today = formatDate(new Date());

  const day = new Date();

  const futureDate = new Date(day.setDate(day.getDate() + 3));
  const initialCheckOutDate = formatDate(futureDate)

  let { price } = listing
  price = parseInt(price);
  const [errorMessages, setErrorMessages] = useState({});
  const [openCalendar, setOpenCalendar] = useState(false)
  const [date, setDate] = useState();
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(initialCheckOutDate)
  const [checkInISO, setCheckInISO] = useState(new Date().toISOString().slice(0, 10));
  const [checkOutISO, setCheckOutISO] = useState(futureDate.toISOString().slice(0, 10));
  const [totalDays, setTotalDays] = useState(3);
  const [totalPrice, setTotalPrice] = useState(3 * +price);

  const handleClick = () => {
    setOpenCalendar(prev => !prev);
  }

  const countDays = (firstDate, secondDate) => {
    const days = Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24)) - 1;
    return days;
  }

  const onChange = (date) => {
    setDate(date)
    const checkInDate = date[0];
    const checkOutDate = date[1];
    setCheckInISO(checkInDate.toISOString().slice(0, 10));
    setCheckOutISO(checkOutDate.toISOString().slice(0, 10));
    const days = countDays(checkInDate, checkOutDate);
    setTotalDays(days);
    setTotalPrice(days * price)
    setCheckIn(formatDate(checkInDate));
    setCheckOut(formatDate(checkOutDate));
    setOpenCalendar(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      listingId: listing.id,
      startDate: checkInISO,
      endDate: checkOutISO,
    }

    let newBooking;

    try {
      newBooking = await dispatch(createNewBooking(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrorMessages(error.errors)
      else setErrorMessages({ overall: error.toString().slice(7) });
      // console.log('errors:: ', errorMessages);
    }

    if (newBooking) {
      console.log('here:: ', newBooking)
      setErrorMessages({});
      history.push('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p><b>${price}</b> night</p>
        <p>check-in {checkIn}</p>
        <p>check-out {checkOut}</p>
        <button onClick={() => handleClick()}>dates</button>
        {openCalendar &&
          <Calendar
            minDate={new Date()}
            selectRange
            onChange={onChange}
            value={date}
          />}
        <div>
          <ul>
            <li>${price} x {totalDays} nights ${totalPrice}</li>
            <li>Total before taxes ${totalPrice}</li>
          </ul>
        </div>
        <button type='submit'>Reserve</button>
      </form>
    </>

  )
}

export default BookingCard