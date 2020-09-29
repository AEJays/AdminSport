/* eslint-disable no-unused-vars */

import { createModel } from 'zero-element/lib/Model';
import { query, post, update, remove } from 'zero-element/lib/utils/request';
import { formatAPI } from 'zero-element/lib/utils/format';
import { getToken } from 'zero-element/lib/utils/request/token';

const sleep = ms => new Promise(res => setTimeout(_ => res(), ms));

createModel({
  namespace: 'global',
  state: {
    permissions: null,
  },
  effects: {
    setPerm(perm) {
      this.permissions = formatPerms(perm);
    },
    clearPerm() {
      this.permissions = [];
    },
    queryPerm: async function () {
      if (getToken()) {
        if (!this.permissions || Array.isArray(this.permissions)) {
          query('/api/adm/users/self/permissions')
            .then(response => {
              if (response.status === 200) {
                const { perms } = response.data.data;
                this.setPerm(perms);
              }
            })
            .catch(_ => {
              return sleep(5000).then(_ => {
                this.clearPerm();
              })
            })
        }
      } else {
        this.clearPerm();
      }
    },
    getPerm() {
      if (!this.permissions || Array.isArray(this.permissions)) {
        return {};
      }
      return this.permissions;
    }
  },
  useDefault: false,
});

function formatPerms(perms) {
  const permsObj = {};

  if (!Array.isArray(perms)) {
    console.warn('非预期的权限数据格式: ', perms);
  } else {
    const permsFlat = arrayFlat(perms);
    permsFlat.forEach(perm => {
      permsObj[perm.identifier] = true;
    });
  }
  return permsObj;
}

function arrayFlat(arr) {
  const stack = [...arr];
  const rst = [];

  while (stack.length) {
    const item = stack.shift();
    if (Array.isArray(item.perms)) {
      stack.push(...item.perms);
    }
    rst.push(item);
  }

  return rst;
}