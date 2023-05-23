import React, { useState } from 'react';
import "./DropdownNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DropdownNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-menu-wrapper ${isOpen ? 'open' : ''}`}>
      <button className={`dropdown-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <nav>
        <ul className="dropdown-menu">
          <li className="dropdown-item">Home</li>
          <li className="dropdown-item">Projects</li>
          <li className="dropdown-item">Contact</li>
        </ul>
        </nav>
      )}
    </div>
  );
};

export default DropdownNavigation;
