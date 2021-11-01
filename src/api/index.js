import axios from 'axios';

const URL = 'https://realty-in-us.p.rapidapi.com/properties/list-for-rent';
// 'https://realtor.p.rapidapi.com/properties/list-for-sale';

const autoCompleteURL =
  // 'https://realtor.p.rapidapi.com/locations/auto-complete';
  'https://realty-in-us.p.rapidapi.com/locations/auto-complete';

export const getProperties = async (params) => {
  try {
    const { data } = await axios.get(URL, {
      params: params,
      headers: {
        // 'x-rapidapi-host': 'realtor.p.rapidapi.com',
        // 'x-rapidapi-key': '',
        'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    });
    return data.listings;
  } catch (error) {
    console.log(error);
  }
};

export const getLocationAutoComplete = async (searchTerm) => {
  try {
    const { data } = await axios.get(autoCompleteURL, {
      params: { input: searchTerm },
      headers: {
        // 'x-rapidapi-host': 'realtor.p.rapidapi.com',
        // 'x-rapidapi-key': '',
        'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    });

    return data.autocomplete;
  } catch (error) {
    console.log(error);
  }
};
