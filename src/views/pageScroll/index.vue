<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-linear-layout
      :ref="`linear_layout_1`"
      :class="`cw-style-width cw-style-height`"
      :direction="`horizontal`"
      :wrap="true"
      style="--cw-style-width: 200px; --cw-style-height: 200px; width: 200px; height: 200px; --custom-start: auto; overflow-y: auto; --scrollbar-size: 0px"
    >
      <u-linear-layout
        :ref="`linear_layout_2`"
        :class="`cw-style-width cw-style-height`"
        :direction="`horizontal`"
        :wrap="true"
        style="--cw-style-width: 200px; --cw-style-height: 500px; height: 500px; width: 200px"
      ></u-linear-layout>
    </u-linear-layout>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/pageScroll',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '页面滚动',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async pageScroll_mounted(event) {
      await this.pageScroll_mounted_mounted(event);
    },

    async pageScroll_mounted_mounted(event) {
      await (async () => {
        const chatBox = this.$refs['linear_layout_1'].$el;

        chatBox.scrollTo({
          top: chatBox.scrollHeight,
          behavior: 'smooth',
        });
        //  chatBox.scrollTop = chatBox.scrollHeight;
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.pageScroll_mounted();
  },
};
</script>
