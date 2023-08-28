import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'Available Tracking Time (%)',
    },
  ],
  width: 1000,
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
  },
};
const dataset = [
  {
    Time1: 59,
    Time2: 57,
    projectName: 'Alexandria',
  },
  {
    Time1: 50,
    Time2: 52,
    projectName: 'Battery',
  },
  {
    Time1: 47,
    Time2: 53,
    projectName: 'Firia Lab',
  },
  {
    Time1: 54,
    Time2: 56,
    projectName: 'Firia',
  },
  {
    Time1: 57,
    Time2: 69,
    projectName: 'Fort Mayer',
  },
  {
    Time1: 60,
    Time2: 63,
    projectName: 'Hardware',
  },
  {
    Time1: 59,
    Time2: 60,
    projectName: 'PA Site',
  },
  {
    Time1: 65,
    Time2: 60,
    projectName: 'PA Test',
  },
  {
    Time1: 51,
    Time2: 51,
    projectName: 'Sulphur',
  },
  {
    Time1: 60,
    Time2: 65, 
    projectName: 'Zigron 16',
  },
  {
    Time1: 67,
    Time2: 64,
    projectName: 'Zigron 2075',
  },
  {
    Time1: 61,
    Time2: 70,
    projectName: 'Zigron 2075',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

function BarGraph() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'projectName' }]}
      series={[
        { dataKey: 'Time1', label: 'Time1', valueFormatter },
        { dataKey: 'Time2', label: 'Time2', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}

export default BarGraph;