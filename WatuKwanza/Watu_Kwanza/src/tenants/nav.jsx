import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './dropdown';

function Nav() {
  return (
    <div className="flex mx-56 mt-5 justify-end">
      <DropdownMenu 
        label="For Rent"
        options={[
          { text: 'Apartment', url: '/apartmentRent' },
          { text: 'House', url: '/houseRent' },
          { text: 'Bedsitter', url: '/bedsitterRent' },
          { text: 'Office', url: '/officeRent' },
        ]}
      />
      <DropdownMenu
        label="For Sale"
        options={[
          { text: 'House', url: '/houseSale' },
          { text: 'Office', url: '/officeSale' },
        ]}
      />
    </div>
  );
}

export default Nav;
