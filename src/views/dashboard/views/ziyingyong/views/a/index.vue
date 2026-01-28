<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/dashboard/ziyingyong/a',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
};
</script>
