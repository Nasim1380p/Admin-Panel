
'use client'
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography } from '@mui/material';

const GaugeChart = () => {
  const percentage = 77;
  const test = ''

  return (
    <Box sx={{ width: 200, height: 200, margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={test}
        styles={buildStyles({
          textColor: 'white', // تغییر رنگ متن داخل نمودار 
          pathColor: '#1f52a8', // تغییر رنگ مسیر دایره 
          trailColor: '#20284a',
          textSize: '16px',

        })}
      />
      <Typography variant="h6" align="center" sx={{ mt: 2, color: '#a3b4c9' }}>
        {/* //متن // */}
      </Typography>
    </Box>
  );
};

export default GaugeChart;