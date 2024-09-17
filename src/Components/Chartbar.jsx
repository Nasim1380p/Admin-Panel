'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export default function AxisWithComposition() {
  return (
    <Box sx={{ width: '100%', maxWidth: 600, color: 'yellow' }}>
      <ResponsiveChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: ['A', 'B', 'C', 'D'],
            id: 'quarters',
            label: 'Quarters',
            tickLabelStyle: {
              fontFamily: 'text1',
              fill: 'white',

            }
          },
        ]}
        yAxis={[{
          id: 'money', tickLabelStyle: {
            fontFamily: 'text1',
            fill: 'white',


          }
        }, { id: 'quantities' }]}
        series={[
          {
            type: 'line',
            id: 'revenue',
            yAxisId: 'money',
            data: [5645, 6542, 8135, 11301],
          },
          {
            type: 'bar',
            id: 'cookies',
            yAxisId: 'quantities',
            data: [3205, 2542, 3135, 8374],
          },
          {
            type: 'bar',
            id: 'icecream',
            yAxisId: 'quantities',
            data: [1645, 5542, 5146, 3735],
          },
        ]}
        height={270}
        margin={{ left: 70, right: 70 }}
        sx={{
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-25px, 0)',
          },
          [`.${axisClasses.right} .${axisClasses.label}`]: {
            transform: 'translate(30px, 0)',
          },
        }}
      >
        <BarPlot />
        <LinePlot />
        <ChartsXAxis axisId="quarters" label="" labelFontSize={18} />
        <ChartsYAxis axisId="quantities" label="" />
        <ChartsYAxis axisId="money" position="right" />
      </ResponsiveChartContainer>
    </Box>
  );
}
