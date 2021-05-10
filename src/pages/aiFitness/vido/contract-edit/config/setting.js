const statusMap = {
  'Open': '编辑中',
  'Submitted': '待分配',
  'Assigned': '待处理',
  'GenerateOpportunity': '已生成销售机会',
  'Closed': '已关闭',
  'Invalid': '无效',
};
const colorMap = {
  'Open': '',
  'Submitted': '#673AB7',
  'Assigned': '#ff2233',
  'GenerateOpportunity': '#135200',
  'Closed': '#666666',
  'Invalid': '#9E9E9E',
};


const regionOpts = [
  { label: 'AUCKLAND', value: 0 },
  { label: 'BAY OF PLENTY', value: 1 },
  { label: 'CANTERBURY', value: 2 },
  { label: 'GISBORNE', value: 3 },
  { label: 'HAWKES BAY', value: 4 },
  { label: 'MANAWATU', value: 5 },
  { label: 'MARLBOROUGH', value: 6 },
  { label: 'NELSON BAYS', value: 7 },
  { label: 'NORTHTLAND', value: 8 },
];

const regionOptsText = [
  { label: 'AUCKLAND', value: 0 },
  { label: 'BAY OF PLENTY', value: 1 },
  { label: 'CANTERBURY', value: 2 },
  { label: 'GISBORNE', value: 3 },
  { label: 'HAWKES BAY', value: 4 },
  { label: 'MANAWATU', value: 5 },
  { label: 'MARLBOROUGH', value: 6 },
  { label: 'NELSON BAYS', value: 7 },
  { label: 'NORTHTLAND', value: 8 },
];

const regionMap = {
  0: 'AUCKLAND',
  1: 'BAY OF PLENTY',
  2: 'CANTERBURY',
  3: 'GISBORNE',
  4: 'HAWKES BAY',
  5: 'MANAWATU',
  6: 'MARLBOROUGH',
  7: 'NELSON BAYS',
  8: 'NORTHTLAND',
};

module.exports = {
  regionOpts,
  regionOptsText,
  regionMap,
};
