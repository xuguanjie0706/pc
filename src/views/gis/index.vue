<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <cw-gis-view
      :ref="`cw_gis_view_3`"
      :enableClickMarker="true"
      @map-click="cw_gis_view_3_mapclick($event)"
    ></cw-gis-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/gis',
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
    async cw_gis_view_3_mapclick(event) {
      await this.cw_gis_view_3_mapClick_mapclick(event);
    },

    async cw_gis_view_3_mapClick_mapclick(event) {
      await (async () => {
        console.log(event);
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
};
</script>
