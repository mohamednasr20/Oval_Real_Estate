import axios from 'axios';

export const getProperties = async (params, searchType) => {
  try {
    const { data } = await axios.get(
      `https://realty-in-us.p.rapidapi.com/properties/${searchType}`,
      {
        params: params,
        headers: {
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': '',
        },
      }
    );
    return data.listings;
  } catch (error) {
    console.log(error);
  }
};

export const getLocationAutoComplete = async (searchTerm) => {
  try {
    const { data } = await axios.get(
      'https://realty-in-us.p.rapidapi.com/locations/auto-complete',
      {
        params: { input: searchTerm },
        headers: {
          // 'x-rapidapi-host': 'realtor.p.rapidapi.com',
          // 'x-rapidapi-key': '',
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': '',
        },
      }
    );

    return data.autocomplete;
  } catch (error) {
    console.log(error);
  }
};
