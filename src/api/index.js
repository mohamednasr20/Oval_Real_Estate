import axios from 'axios';

const URL = 'https://realtor.p.rapidapi.com/properties/list-for-sale';

// const URL = 'https://realtor.p.rapidapi.com/locations/auto-complete';

export const getproperties = async (params) => {
  try {
    const { data } = await axios.get(URL, {
      params: params,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': 'bdaad2bf95mshcc882269e544183p1df0a7jsn630a96e089b1',
      },
    });
    return data.listings;
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
        'x-rapidapi-key': 'bdaad2bf95mshcc882269e544183p1df0a7jsn630a96e089b1',
      },
    });
    return data.autocomplete;
  } catch (error) {
    console.log(error);
  }
};
