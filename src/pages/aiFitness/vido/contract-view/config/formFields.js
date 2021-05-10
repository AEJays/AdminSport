module.exports = [
  { field: 'group_5', type: 'group', value: '视频基本信息', span: 24, },
  { label: '视频', field: 'vidoSrc', type: 'plain' },
  { label: '动作名称', field: 'actionName', type: 'plain' },
  { label: '动作类型', field: 'trainingType', type: 'plain' },
  { label: '视频时长', field: 'vidoDuration', type: 'plain' },
  { label: '运动处方症状', field: 'prescriptionSymptoms', type: 'plain' },

  { field: 'group_6', type: 'group', value: '关键动作', span: 24, },
  {
    label: '',
    field: 'items',
    type: 'one-mary',
    span: 24,
    options: {
      JSONString: true,
      actions: [
        {
          title: '添加', type: 'children-modal-add', options: {
            modalTitle: '添加关键动作',
            modalWidth: 680,
            items: [
              {
                layout: 'Empty',
                component: 'ChildrenForm',
                config: {
                  layout: 'Grid',
                  layoutConfig: {
                    value: [12, 12],
                  },
                  API: {
                    createAPI:'/api/crud/keyPoseModel/keyPoseModels'
                  },
                  fields: [
                    {
                      label: '动作帧', field: 'rawFrameImage', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '动作特征', field: 'poseModelImage', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '动作名称', field: 'actionName', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '时间位置', field: 'duration', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '持续时长', field: 'reading', type: 'input',
                      rules: ['required'],
                    },
                  ],
                },
              }
            ],
          }
        },
      ],
      fields: [
        {
          field: 'rawFrameImage', label: '动作帧', width: 150, sorter: true,
          valueType: 'path',
          options: {
            path: '/aiFitness/vido/keyPose-view'
          },
        },
        { label: '动作特征', field: 'poseModelImage' },
        { label: '动作名称', field: 'actionName' },
        { label: '时间位置', field: 'frameTimePosition' },
        { label: '持续时长', field: 'duration' },
        { label: '重复次数', field: 'repeatTimes' },
      ],
      operation: [
        {
          title: '编辑', type: 'path',
          options: {
            outside: true,
            path: '',
          },
        },
        {
          title: '删除', type: 'delete',
        },
      ],
    },
    rules: ['required'],
  }
];
