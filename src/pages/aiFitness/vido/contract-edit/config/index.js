
const {
  statusMap, colorMap,
} = require('./setting');
const formFields = require('./formFields');

module.exports = {
  layout: 'BaseTitle',
  title: '编辑视频信息',
  items: [
    {
      layout: 'Content',
      component: 'Form',
      config: {
        goBack: true,
        API: {
          getAPI: '/api/crud/coachingAction/coachingActions/<id>',
          updateAPI: '/api/crud/coachingAction/coachingActions/<id>',
        },
        layout: 'Grid',
        layoutConfig: {
          value: [8, 8, 8],
        },
        fields: formFields,
      },
    },
  ],
};
