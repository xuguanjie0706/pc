<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-radios
      :ref="`radios_1`"
      :value.sync="variable1"
      valueField=""
      v-dependencies.reload="[]"
      @before-select="radios_1_beforeselect($event)"
    >
      <template
        #item="current"
        :ref="`template_1`"
      ></template>
      <u-radio
        :ref="`radio_1`"
        :label="2"
      >
        <template
          #item
          :ref="`template_2`"
        >
          <u-text
            :ref="`text_1`"
            :text="`节点`"
          ></u-text>
        </template>
      </u-radio>
      <u-radio
        :ref="`radio_2`"
        :label="1"
        @before-select="radio_2_beforeselect($event)"
      >
        <template
          #item
          :ref="`template_3`"
        >
          <u-text
            :ref="`text_2`"
            :text="`节点`"
          ></u-text>
        </template>
      </u-radio>
    </u-radios>
    <u-text
      :ref="`text_3`"
      :text="$utils['ToString']('nasl.core.String', variable1)"
    ></u-text>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/radio',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: undefined,
    };
  },
  meta: {
    title: '点击取消',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async radios_1_beforeselect(event) {
      await this.radios_1_beforeSelect_beforeselect(event);
    },

    async radios_1_beforeSelect_beforeselect(event) {
      await (async () => {
        console.log(event.value, event.oldValue, event);
        if (event.value === event.oldValue) {
          this.variable1 = undefined;
          event.preventDefault();
        }
      })();
    },

    async radio_2_beforeselect(event) {
      await this.radio_2_beforeSelect_beforeselect(event);
    },

    async radio_2_beforeSelect_beforeselect(event) {},

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
};
</script>
