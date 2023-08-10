import React, { useState } from 'react';
import "./DropdownNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';



const DropdownNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={`dropdown-menu-wrapper ${isOpen ? 'open' : ''}`}>
      <button className={`dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <nav>
        <ul className="dropdown-menu">
        <li className="dropdown-item"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li className="dropdown-item"><Link to="/Projects"onClick={handleLinkClick}>Projects</Link></li>
          <li className="dropdown-item"><Link to="/Contact"onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        </nav>
      )}
    </div>
  );
};

export default DropdownNavigation;
