import axios from 'axios';

// const URL = 'https://realtor.p.rapidapi.com/properties/list-for-sale';

const options = {
  params: {
    state_code: 'NY',
    city: 'New York City',
    offset: '0',
    limit: '200',
    price_min: '200000',
    sort: 'relevance',
  },
  headers: {
    'x-rapidapi-host': 'realtor.p.rapidapi.com',
    'x-rapidapi-key': '',
  },
};

const URL = 'https://realtor.p.rapidapi.com/locations/auto-complete';

export const getproperties = async () => {
  try {
    const { data } = await axios.get(URL, options);
    console.log(data.listings);
  } catch (error) {
    console.log(error);
  }
};

export const getLocationAutoComplete = async (searchTerm) => {
  try {
    const { data } = await axios.get(URL, {
      params: { input: searchTerm },
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': '',
      },
    });
    return data.autocomplete;
  } catch (error) {
    console.log(error);
  }
};
