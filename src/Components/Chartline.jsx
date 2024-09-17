'use client'
import * as React from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';

const otherSetting = {
  legend: {
    hidden: true,

  },
  [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 1 },
  height: 330,
  yAxis: [{
    label: 'rainfall (mm)', disableLine: true,
    disableTicks: true,
    tickLabelStyle: {
      fontFamily: 'text1',
      fill: 'white',

    }
  }],
  grid: { horizontal: true },

  sx: {
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'January',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'February',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'March',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'April',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'August',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'September',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'October',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'November',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'December',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function FormatterDemoNoSnap() {
  return (
    <BarChart
      dataset={dataset}

      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          tickLabelStyle: {
            fontFamily: 'text1',
            fill: 'white',

          },
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2021`
              : `${month} 2021`,
        },
      ]}

      series={[{ dataKey: 'seoul', label: '', type: 'bar', color: '#0571ff', valueFormatter }]}
      {...otherSetting}
    />
  );
}
