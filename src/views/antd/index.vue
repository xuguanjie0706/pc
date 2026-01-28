<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-global-loading
      :ref="`gx_global_loading_1`"
      text=""
    ></gx-global-loading>
    <gx-tree-select
      :ref="`gx_tree_select_1`"
      v-dependencies.reload="[]"
      :dataSource="variable1"
      :valueField="`id`"
      :parentField="`parentId`"
    ></gx-tree-select>
    <gx-socket-view
      :ref="`gx_socket_view_2`"
      :endpoint="`http://localhost:3000/ws`"
    ></gx-socket-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/antd',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: window.$genInitFromSchema('nasl.collection.List<app.structures.Tree>', undefined),
    };
  },
  meta: {
    title: '',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async antd_created(event) {
      await this.antd_created_created(event);
    },

    async antd_created_created(event) {
      await this.$library['cw_global_loading'].loadingPlugin({ blacklist: ['/api/lcplogics/logic2'] });
      await (async () => {
        this.variable1 = [
          {
            id: '05701',
            name: '浙江省化工进出口有限公司',
            parentId: null,
          },
          {
            id: '1015',
            name: '浙江瑞凯化工有限公司',
            parentId: null,
          },
          {
            id: '1016',
            name: '浙江富凯进出口有限公司',
            parentId: null,
          },
          {
            id: '0570101',
            name: '经理室',
            parentId: '05701',
          },
          {
            id: '0570102',
            name: '党群工作部（纪律检查室）',
            parentId: '05701',
          },
        ];
      })();
    },

    async antd_mounted(event) {
      await this.antd_mounted_mounted(event);
    },

    async antd_mounted_mounted(event) {
      await window.$logics['app.logics.logic2']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/antd/0',
        },
        path: {},
        body: {},
      });
      await window.$logics['app.logics.logic1']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/antd/0',
        },
        path: {},
        body: {},
      });
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.antd_created();
  },

  async mounted() {
    await this.antd_mounted();
  },
};
</script>
