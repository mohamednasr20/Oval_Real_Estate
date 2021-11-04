import React from 'react';
import SelectInput from './SelectInput/SelectInput';
import { onChangeSearchParams } from '../../../actions/globalState';
import { useDispatch, useSelector } from 'react-redux';
const FIlterWraper = () => {
  const searchParams = useSelector((state) => state.globalState.searchParams);
  const dispatch = useDispatch();

  const filterSelect = {
    homeTypes: [
      { value: 'apartment', text: 'Apartmet' },
      { value: 'single_family', text: 'Single Family' },
      { value: 'mapi_condo_townhome', text: 'Condo' },
      { value: 'other', text: 'Other' },
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(onChangeSearchParams(searchParams, { [name]: value }));
  };

  return (
    <>
      <SelectInput
        state={searchParams.prop_type}
        name={'prop_type'}
        handleChange={handleChange}
        options={filterSelect.homeTypes}
        defaultValue="Types"
      />

      <SelectInput
        state={searchParams.beds_min}
        name="beds_min"
        handleChange={handleChange}
        options={filterSelect.rooms}
        defaultValue="Rooms"
      />

      <SelectInput
        state={searchParams.price_min}
        name="price_min"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Min Price"
      />

      <SelectInput
        state={searchParams.price_max}
        name="price_max"
        handleChange={handleChange}
        options={getPriceRange()}
        defaultValue="Max Price"
      />
    </>
  );
};

export default FIlterWraper;
