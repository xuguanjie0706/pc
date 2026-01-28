<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-move-view
      :ref="`gx_move_view_1`"
      :class="`cw-style-width cw-style-height`"
      :isShow="true"
      style="--cw-style-width: 100px; --cw-style-height: 100px; width: 100px; height: 100px"
    >
      <template
        #popover
        :ref="`template_1`"
      >
        <u-text
          :ref="`text_2`"
          :text="`普通文本`"
        ></u-text>
      </template>
      <u-text
        :ref="`text_1`"
        :text="`普通文本`"
        v-tooltip="`999`"
      ></u-text>
    </gx-move-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/chat',
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
