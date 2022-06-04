import './ListingCard.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PhotoCarousel from '../Carousel';


const ListingCard = ({ listing }) => {
  const { id, city, state, name, country, Images, price } = listing;

  const displayLocation = (listing) => {
    return (listing.country === 'USA') ? `${listing.city}, ${listing.state}` : `${listing.city}, ${listing.country}`;
  }

  const location = displayLocation(listing);

  return (
    <div className='card card__carousel'>
      <Link to={`/listings/${id}`} className='card__link'>
        {/* <PhotoCarousel images={Images} /> */}
        <figure className='card__image' style={{ backgroundImage: `url( ${Images[0].url} )` }} />
        <div className='card__location'>
          <p className='card__text card__location'>{location}</p>
        </div>
        <p className='card__text card__name'>{name}</p>
        <p className='card__text card__price'>${price} night</p>
      </Link>
    </div>
  )
}

export default ListingCard;