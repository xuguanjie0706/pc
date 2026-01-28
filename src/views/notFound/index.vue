<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :justify="`center`"
    :type="`flex`"
    :alignment="`center`"
    style="--cw-style-height: 100vh; height: 100vh"
  >
    <u-linear-layout
      :ref="`uLinearLayout2`"
      :justify="`center`"
      :direction="`vertical`"
    >
      <img
        :ref="`img1`"
        :width="`240`"
        :src="`/assets/error-code.svg`"
      />
      <h1
        :ref="`h11`"
        :class="`cw-style-padding-bottom cw-style-padding cw-style-margin cw-style-margin-top cw-style-font-size`"
        style="--cw-style-padding-bottom: 20px; --cw-style-margin: 0; --cw-style-margin-top: -15px; --cw-style-font-size: 64px; margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px"
      >
        <u-text
          :ref="`uText1`"
          :text="`404`"
        ></u-text>
      </h1>
      <h2
        :ref="`h21`"
        :class="`cw-style-color`"
        style="--cw-style-color: var(--color-light); color: var(--color-light)"
      >
        <u-text
          :ref="`uText2`"
          :text="`抱歉，你访问的页面不存在`"
        ></u-text>
      </h2>
      <u-button
        :ref="`uButton1`"
        :text="`返回首页`"
        :color="`primary`"
        :link="`${`/`}`"
        :shape="`round`"
      ></u-button>
    </u-linear-layout>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/notFound',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '找不到页面',
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
