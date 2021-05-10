
const {
  statusMap, colorMap, statusOpts,
} = require('./setting');

module.exports = {
  layout: 'Content',
  title: '视频管理',
  items: [
    {
      layout: 'Empty',
      component: 'Search',
      config: {
        share: 'salesChance',
        fields: [
          { field: 'opportunityNumber', label: '视频名称', type: 'input' }
        ],
      },
    },

    {
      layout: 'Empty',
      component: 'Table',
      config: {
        share: 'salesChance',
        API: {
          listAPI: '/api/crud/coachingAction/coachingActions',
          deleteAPI: '/api/crud/coachingAction/coachingActions/(id)',
        },
        actions: [
          {
            title: '新建账户', type: 'path',
            options: {
              path: '/aiFitness/vido/contract-add',
            }
          },
        ],
        fields: [
          {
            field: 'vidoSrc', label: '视频', width: 150, sorter: true,
            valueType: 'path',
            options: {
              path: '/aiFitness/vido/contract-view'
            },
          },
          { field: 'actionName', label: '视频名称', width: 150, sorter: true },
          { field: 'vidoDuration', label: '视频长度', width: 150, sorter: true },
          { field: 'trainingType', label: '动作类型', width: 150, sorter: true },
          { field: 'prescriptionSymptoms', label: '适用处方症状', width: 150, sorter: true },
          { field: 'Star', label: '社群', width: 150, valueType: 'ellipsis', sorter: true },
          { field: 'updateDate', label: '更新日期', width: 150, sorter: true },

        ],
        operation: [
          {
            title: '编辑', type: 'path',
            options: {
              outside: true,
              path: '/aiFitness/vido/contract-edit',
            },
          },
          {
            title: '删除', type: 'delete',
          },
        ],
      },
    },
  ],
};
