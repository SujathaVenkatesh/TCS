import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link, useHistory } from 'react-router-dom';
import logo4 from './images/logo4.jpg';
import './Nav.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSignUpClick = () => {
    closeMobileMenu();
    history.push('/Signup');
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
  <img src={logo4} className='logo' alt='Logo' /> {/* Add the image element */}
</Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}> What we do</Link>
            </li>
            <li className='nav-item'>
              <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>Who we are</Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>

            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}> Contact Us</Link>
            </li>
            <li>
              <Link to='/Signup' className='nav-links-mobile'  onClick={handleSignUpClick}>Join our team</Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle='btn--outline' onClick={handleSignUpClick}>
              Join our team
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
