<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-tree-simple-select-parent-view :ref="`gx_tree_simple_select_parent_view_1`">
      <template
        #item="current"
        :ref="`template_1`"
      ></template>
    </gx-tree-simple-select-parent-view>
    <u-text
      :ref="`text_1`"
      :text="$utils['ToString']('nasl.core.String', variable1)"
    ></u-text>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/tree',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: undefined,
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
    async tree_mounted(event) {
      await this.tree_mounted_mounted(event);
    },

    async tree_mounted_mounted(event) {},

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.tree_mounted();
  },
};
</script>
