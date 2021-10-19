export const getSteps = () => {
  return [
    'Discover House',
    'Schedule to visit',
    'Hassle-free purchase',
    'Buyback guarantee',
  ];
};

export const getStepContent = (step) => {
  switch (step) {
    case 0:
      return {
        header: 'Find a home just right for you',
        content:
          'Oval owns hunderds of homes for sale near you. See homes on the market, or get a sneak peek at those that have yet to hit the market',
      };
    case 1:
      return {
        header: 'Schedule a tour process',
        content:
          'The process of scheduling a tour can now happen in a few seconds, After you submit your information, you’ll be assigned a local real estate agent, who will reach out to you to confirm your tour time and format.',
      };
    case 2:
      return {
        header: 'Determine Your Wants and Needs',
        content:
          'Before you start looking at homes for sale, you need to determine your wants and needs. Start a list and carefully assess the kind of home you’re interested in,',
      };
    case 3:
      return {
        header: 'We stands behind homes we sell',
        content:
          'Unlike any other real estate company, Oval stands behind the value of the properties we sell. The Oval 100% Money Back Guarantee helps you buy with confidence. If an Oval homebuyer of a guaranteed home listed by Oval is not satisfied, we will buy back the home for 100% of its purchase price.',
      };
    default:
      return { header: 'Some thing went wrong', content: '' };
  }
};
