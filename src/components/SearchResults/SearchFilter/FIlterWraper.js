import React, { useState } from 'react';
import SelectInput from './SelectInput/SelectInput';

const FIlterWraper = () => {
  const [state, setState] = useState({
    rooms: '',
    homeType: '',
    minPrice: '',
    maxPrice: '',
  });

  const filterSelect = {
    homeTypes: [
      { value: 'house', text: 'House' },
      { value: 'condo', text: 'Condo' },
      { value: 'twonhome', text: 'Twonhome' },
      { value: 'multi-family', text: 'Multi-Family' },
    ],
    rooms: [
      { value: 1, text: '1+ Beds' },
      { value: 2, text: '2+ Beds' },
      { value: 3, text: '3+ Beds' },
      { value: 4, text: '4+ Beds' },
    ],
  };

  const getPriceRange = () => {
    const array = [];
    for (let i = 1; i < 10; i++) {
      array.push(i * 100000);
    }
    for (let i = 1; i < 10; i++) {
      array.push(i * 1000000);
    }
    for (let i = 1; i < 10; i++) {
      array.push(i * 10000000);
    }
    const newArray = array.map((n) =>
      n < 1000000
        ? { value: n, text: `$${String(n).slice(0, 3)}k` }
        : {
            value: n,
            text:
              n < 10000000
                ? `$${String(n).slice(0, 1)}m`
                : `$${String(n).slice(0, 2)}m`,
          }
    );

    return newArray;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
      <SelectInput
        state={state.homeType}
        name={'homeType'}
        handleChange={handleChange}
        options={filterSelect.homeTypes}
        defaultValue="Types"
      />

      <SelectInput
        state={state.rooms}
        name="rooms"
        handleChange={handleChange}
        options={filterSelect.rooms}
        defaultValue="Rooms"
      />

      <SelectInput
        state={state.minPrice}
        name="minPrice"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Min Price"
      />

      <SelectInput
        state={state.maxPrice}
        name="maxPrice"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Max Price"
      />
    </>
  );
};

export default FIlterWraper;
