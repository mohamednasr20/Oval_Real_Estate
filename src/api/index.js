import axios from 'axios';

export const getProperties = async (params, searchType) => {
  try {
    const { data } = await axios.get(
      `https://realty-in-us.p.rapidapi.com/properties/${searchType}`,
      {
        params: params,
        headers: {
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_XRAPIDAPIkEY,
        },
      }
    );
    return data.listings;
  } catch (error) {
    console.log(error);
  }
};

export const getProperty = async (propertyId) => {
  try {
    const { data } = await axios.get(
      'https://realty-in-us.p.rapidapi.com/properties/v2/detail',
      {
        params: {
          property_id: propertyId,
        },
        headers: {
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_XRAPIDAPIkEY,
        },
      }
    );
    console.log(data.properties[0]);
    return data.properties[0];
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
          'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_XRAPIDAPIkEY,
        },
      }
    );

    return data.autocomplete;
  } catch (error) {
    console.log(error);
  }
};
