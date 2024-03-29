import './ListingDetails.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneListing } from '../../store/listings';
import { getListings } from '../../store/listings';
// import { getReviews } from '../../store/reviews'
import DetailPhotoDisplay from '../DetailPhotoDisplay';
import ListingDescription from '../ListingDescription';
import BookingCard from '../BookingCard';
import Reviews from '../Reviews';
import Map from '../Map';

const ListingDetails = ({ user, users }) => {
  const { id } = useParams();
  const [isImages, setIsImages] = useState(true);
  const [firstReview, setFirstReview] = useState(false)
  const [reviewModal, setReviewModal] = useState(false)
  const [review, setReview] = useState('');
  const dispatch = useDispatch();
  let selectedListing = useSelector(state => state.listings[id]);
  const listingsArray = useSelector(state => state.listings.listings);
  const newReviews = useSelector(state => state.reviews);

  if (!selectedListing) {
    selectedListing = JSON.parse(localStorage.getItem('currentListing'))
  }

  if (!selectedListing.Images) {
    selectedListing = listingsArray.find(listing => {
      return listing.id == id;
    })
  }
  const reviews = selectedListing.Reviews;

  let rating;

  if (reviews.length) {
    const average = reviews.map(ele => ele.stars).reduce((a, b) => a + b) / reviews.length;
    rating = parseFloat(average.toFixed(2));
  }

  useEffect(() => {
    dispatch(getListings());
    localStorage.setItem('currentListing', JSON.stringify(selectedListing))
  }, [dispatch, review]);

  const {
    userId,
    city,
    state,
    name,
    country,
    Images,
    price,
    address,
    coordinates
  } = selectedListing;

  const homeOwner = users[userId];
  const location = `${address} ${city} ${state} ${country}`;
  const geoLocation = JSON.parse(coordinates)

  return (
    <div className='listing__container'>
      <div className='booking__display-header'>
        <h2 className='booking__display-header-name header-title'>{name}</h2>
        <div className='booking__display-rating-container'>
          <p className="material-symbols-outlined">star</p>
          {user.id !== userId &&
          <p className='booking__display-rating-text'>
            {rating ?
              <p>{rating} &#8226;</p> :
              <p onClick={() => setFirstReview(true)}
                className='rating__first-text'
              >
                Be the first to leave a review
              </p>
            }
          </p>
          }
          {user.id === userId && !reviews.length &&
            <p className='booking__display-rating-text'>No reviews on your listing yet!</p>
          }
          <p className='booking__display-rating-amount'>
            <p
            onClick={() => setReviewModal(true)}
            className='rating__first-text'
            >
              {rating ? `${reviews.length} ${reviews.length > 1 ? 'reviews' : 'review'}` : null}
            </p>
          </p>
          <p>&#8226;</p>
          <h4 className='booking__display-header-location header-subtitle'>{city}, {state}, {country}</h4>
        </div>
      </div>

      <DetailPhotoDisplay listing={selectedListing} />
      <div className='listing__desc-bookingcard'>
        <ListingDescription listing={selectedListing} users={users} />
        <BookingCard listing={selectedListing} user={user} />
      </div>
      <Reviews props={{
        rating,
        selectedListing,
        users,
        newReviews,
        homeOwner,
        user,
        setReview,
        firstReview,
        setFirstReview,
        reviewModal,
        setReviewModal
      }} />
      <p className='amenities__header'>Where you'll be</p>
      <Map location={geoLocation} />
      <div className='listing__desc-underline' />
    </div>
  )
}

export default ListingDetails;