import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const NavTabs = ({ orientation }) => {
  const [value, setValue] = useState('buy');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation={orientation}
        textColor="primary"
        // indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="buy" label="Buy" />
        <Tab value="rent" label="Rent" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;
