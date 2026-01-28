<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-swiper-video-view
      :ref="`gx_swiper_video_view_1`"
      :text="$utils['ToString']('nasl.collection.List<nasl.core.String>', variable1)"
      @close="gx_swiper_video_view_1_close($event)"
    ></gx-swiper-video-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/swiper',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: window.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
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
    async swiper_created(event) {
      await this.swiper_created_created(event);
    },

    async swiper_created_created(event) {},

    async gx_swiper_video_view_1_close(event) {
      await this.gx_swiper_video_view_1_close_close(event);
    },

    async gx_swiper_video_view_1_close_close(event) {},

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.swiper_created();
  },
};
</script>
