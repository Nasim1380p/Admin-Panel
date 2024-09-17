
'use client'
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, Typography } from '@mui/material';

const GaugeChart = () => {
  const percentage = 69;
  const test = '9.3'

  return (
    <Box sx={{ width: 170, height: 170, margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={test}
        styles={buildStyles({
          textColor: 'white', // تغییر رنگ متن داخل نمودار 
          pathColor: '#18f1c5', // تغییر رنگ مسیر دایره 
          trailColor: '#1a1c30',
          textSize: '18px',


        })}
      />
      <Typography variant="h6" align="center" sx={{ mt: 2, color: '#a3b4c9', fontSize: '15px' }}>
        Total Score
      </Typography>
    </Box>
  );
};

export default GaugeChart;