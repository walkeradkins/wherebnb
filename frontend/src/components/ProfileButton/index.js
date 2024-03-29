import './ProfileButton.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import Avatar from '../Avatar';

const ProfileButton = ({ user }) => {
  const { profileImageUrl, firstName, lastName } = user
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu)
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  }

  return (
    <>
      <button className='navbar__profilebutton' onClick={openMenu}>
        <span className="material-symbols-outlined navbar__threelines" >
          menu
        </span>
        <Avatar userImage={profileImageUrl} firstName={firstName} size={'1.5em'}/>
      </button>
      {
        showMenu && (
          <ul className='navbar__profile-dropdown'>
            <li className='navbar__user-info' key={`username`}>{firstName} {lastName}</li>
            <li className='navbar__user-info navbar__underline' key={`email`}>{user.email}</li>
            <li className='navbar__dropdown-links navbar__dropdown--nav' key={`newListing`}><Link className='navbar__dropdown--nav' to='/listings'>Host your Home</Link></li>
            <li className='navbar__dropdown-links navbar__dropdown--nav' key={`viewBookings`}><Link className='navbar__dropdown--nav' to={`/users/${user.id}/bookings`}>Your Trips</Link></li>
            <li className='navbar__dropdown-links navbar__dropdown--nav navbar__underline' key={`viewListing`}><Link className='navbar__dropdown--nav' to={`/users/${user.id}/listings`}>Your Listings</Link></li>
            <li className='navbar__dropdown-links navbar__dropdown-links-logout' key={`logout`} onClick={logout}>Log Out</li>
          </ul>
        )
      }
    </>
  )
}

export default ProfileButton;