import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import CachedIcon from '@mui/icons-material/Cached';
import React, { useState } from 'react';
import { CoachSearch } from './CoachSearch';

const CoachSelection = () => {
  const size = 30;
  const [isSearchingCoach, setIsSearchingCoach] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography>Coach</Typography>
      <IconButton onClick={() => console.log('profile')}>
        <Avatar
          sx={{ bgcolor: blue[300], width: size, height: size }}
          alt="Xiyuan"
          src="/broken-image.jpg"
        />
      </IconButton>
      {isSearchingCoach ? (
        <CoachSearch setIsSearchingCoach={setIsSearchingCoach} />
      ) : (
        <IconButton onClick={() => setIsSearchingCoach(true)}>
          <CachedIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default CoachSelection;
