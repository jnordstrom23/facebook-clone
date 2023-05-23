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
    <div className="dropdown-navigation">
      <button className="dropdown-button" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Home</li>
          <li className="dropdown-item">About</li>
          <li className="dropdown-item">Services</li>
          <li className="dropdown-item">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownNavigation;
