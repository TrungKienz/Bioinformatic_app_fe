import { Pie } from "@ant-design/charts";

const PieChart = () => {
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
    appendPadding: 10,
    data,
    angleField: 'Cases',
    colorField: 'Cancer',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

    return <Pie {...config} />;
  
};

export default PieChart;