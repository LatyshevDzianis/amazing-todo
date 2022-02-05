import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';

import TopickItemCard from './TopickItemCard';
import AddTopickBtn from '../AddTopickBtn';

const TopickList = () => {
  const topicks = useSelector((state) => state.topicks);

  // FOr test purposes

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {topicks.length > 0 &&
          topicks.map((topick) => (
            <Grid item key={topick.id} xl={3} lg={3} md={6} sm={12} xs={12}>
              <TopickItemCard topick={topick} />
            </Grid>
          ))}
        <Grid item>
          <AddTopickBtn />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopickList;
