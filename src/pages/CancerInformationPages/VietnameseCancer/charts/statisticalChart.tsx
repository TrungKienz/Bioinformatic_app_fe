import React from 'react';
import { Bar } from '@ant-design/plots';

const StatisticalChart = () => {
  const data = [
    {"Cancer":"Breast","Cases":21555},
    {"Cancer":"Lung","Cases":7577},
    {"Cancer":"Colorectum","Cases":7539},
    {"Cancer":"Stomach","Cases":6847},
    {"Cancer":"Liver","Cases":6162},
    {"Cancer":"Corpus uteri","Cases":5354},
    {"Cancer":"Thyroid","Cases":4433},
    {"Cancer":"Other cancers","Cases":24180}
  ];
  const config = {
    data,
    xField: 'Cases',
    yField: 'Cancer',
    seriesField: 'Cancer',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};

export default StatisticalChart;
