<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-text
      :ref="`text_1`"
      :text="$utils['ToString']('nasl.core.String', variable3)"
    ></u-text>
    <u-text
      :ref="`text_2`"
      :text="$utils['ToString']('nasl.core.String', variable1)"
    ></u-text>
    <u-text
      :ref="`text_3`"
      :text="$utils['ToString']('nasl.core.String', variable2)"
    ></u-text>
    <u-button
      :ref="`button_1`"
      :color="`primary`"
      :throttleTime="150"
      :text="`异步`"
      @click="button_1_click($event)"
    ></u-button>
    <u-button
      :ref="`button_2`"
      :color="`primary`"
      :throttleTime="150"
      :text="`同步`"
      @click="button_2_click($event)"
    ></u-button>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/promiseAll',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: undefined,
      variable2: undefined,
      variable3: undefined,
    };
  },
  meta: {
    title: '异步操作',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async logic1() {
      let result = undefined;
      result = await window.$logics['app.logics.logic1']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/promiseAll/1',
        },
        path: {},
        body: {},
      });
      return result;
    },

    async logic2() {
      let result = undefined;
      result = await window.$logics['app.logics.logic2']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/promiseAll/1',
        },
        path: {},
        body: {},
      });
      return result;
    },

    async logic3() {},

    async promiseAll_mounted(event) {
      await this.promiseAll_mounted_mounted(event);
    },

    async promiseAll_mounted_mounted(event) {
      await (async () => {
        // const a = await Promise.all([this.logic1(),this.logic2(),this.logic3()])
        // // console.log(a)
        // this.logic2()
        // this.logic1()
        // this.logic3()
      })();
    },

    async button_1_click(event) {
      await this.button_1_click_click(event);
    },

    async button_1_click_click(event) {
      await (async () => {
        const all = await Promise.all([this.logic1(), this.logic2()]);

        console.log(222, all);

        this.variable3 = '都完成了';
      })();
    },

    async button_2_click(event) {
      await this.button_2_click_click(event);
    },

    async button_2_click_click(event) {
      await window.$logics['app.logics.logic1']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/promiseAll/0',
        },
        path: {},
        body: {},
      });
      await window.$logics['app.logics.logic2']({
        config: {
          download: false,
        },
        query: {},
        headers: {
          'lcap-calllogic-uuid': '/promiseAll/0',
        },
        path: {},
        body: {},
      });
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.promiseAll_mounted();
  },
};
</script>
