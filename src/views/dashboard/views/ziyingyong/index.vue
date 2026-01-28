<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-input
      :ref="`input_1`"
      :placeholder="`我是子应用`"
      :emptyValueIsNull="true"
    ></u-input>
    <u-anchor
      :ref="`anchor_1`"
      :label="`qian`"
    >
      <gx-loading-view
        :ref="`gx_loading_view_1`"
        :text="`加载中...`"
      ></gx-loading-view>
    </u-anchor>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/dashboard/ziyingyong',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      microApp: undefined,
      variable1: window.$genInitFromSchema('app.structures.Structure2', undefined),
      variable2: undefined,
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
    async ziyingyong_mounted(event) {
      await this.ziyingyong_mounted_mounted(event);
    },

    async ziyingyong_mounted_mounted(event) {
      let eventBus = undefined;
      await (async () => {
        eventBus = this.$eventBus;

        this.$eventBus.$on('router-push', (data) => {
          this.$push('/fdafda');
        });

        // this.$eventBus.$emit("router-change",route)
      })();
      this.variable2 = await this.$library['gx_qiankun_lib'].loadMicroAppAction(
        await (async () => {
          const obj = {};
          obj.name = null;
          obj.entry = null;
          obj.container = null;
          obj.props = null;
          obj.name = `app1`;
          obj.container = `#qian`;
          obj.props = await (async () => {
            const obj = {};
            let k;
            k = `eventBus`;
            obj[k] = eventBus;
            return obj;
          })();
          obj.entry = `//dev.zi2.cwasset.lcap.163yun.com/`;
          return obj;
        })(),
      );
    },

    async ziyingyong_destroyed(event) {
      await this.ziyingyong_destroyed_destroyed(event);
    },

    async ziyingyong_destroyed_destroyed(event) {
      await (async () => {
        console.log(this.variable2, 12321321);
        this.variable2?.unmount();
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.ziyingyong_mounted();
  },

  async destroyed() {
    await this.ziyingyong_destroyed();
  },
};
</script>
