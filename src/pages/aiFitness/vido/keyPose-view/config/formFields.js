module.exports = [
  { field: 'group_5', type: 'group', value: '关键动作', span: 24, },
  { label: '关键动作帧', field: 'rawFrameImage', type: 'plain' },
  { label: '动作模型预览图', field: 'poseModelImage', type: 'plain' },
  { label: '动作名称', field: 'actionName', type: 'plain' },
  { label: '时间位置', field: 'duration', type: 'plain' },


  { field: 'group_6', type: 'group', value: '动作模型', span: 24, },
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
                      label: '姿势单元1', field: 'poseFirst', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '姿势单元2', field: 'poseSecond', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '连接', field: 'poseType', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '阈值', field: 'threshold', type: 'input',
                      rules: ['required'],
                    },
                    {
                      label: '角度值', field: 'angle', type: 'input',
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
        { label: '姿势单元1', field: 'poseFirst' },
        { label: '姿势单元2', field: 'poseSecond' },
        { label: '连接', field: 'poseType' },
        { label: '阈值', field: 'threshold' },
        { label: '角度值', field: 'angle' },
      ],
      operation: [
        {
          title: '编辑', type: 'path',
          options: {
            outside: true,
            path: '/vido/contract-edit',
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
