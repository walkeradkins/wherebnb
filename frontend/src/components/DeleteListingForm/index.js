import './DeleteListingForm.css';
import { useDispatch, useSelector } from 'react-redux';
import listingsReducer, { deleteListing, getListings } from '../../store/listings'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';

const DeleteListingForm = ({ listing, visible, setVisible, user }) => {
  const [deleted, setDeleted] = useState(false);
  // const [showConfirmation, setShowConfirmation] = useState(false)
  const dispatch = useDispatch();

  const userListings = useSelector(state => state.listings.listings.filter(listing => {
    return listing.userId === user.id;
  }));

  const history = useHistory();

  useEffect(() => {
    dispatch(getListings())
  }, [deleted]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteListing(id))
    } catch (error) {
      //
    }
    setDeleted(true);
    setVisible(false);
    history.push(`/users/${user.id}/listings`)
  };

  return (
    <div className='delete-listing__form'>
      <h3 className='delete-listing__title'>Remove {listing.name} from your listings?</h3>
      <button className='delete-listing__btn btn' onClick={() => setVisible(false)}>Cancel</button>
      <button className='delete-listing__btn btn' onClick={() => handleDelete(listing.id)}>Yes, Remove!</button>
    </div>
  )
}

export default DeleteListingForm;