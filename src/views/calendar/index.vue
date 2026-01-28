<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <x-calendar-view :ref="`x_calendar_view_4`">
      <template
        #content="current"
        :ref="`template_7`"
      ></template>
      <template
        #extra="current"
        :ref="`template_8`"
      ></template>
    </x-calendar-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/calendar',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: window.$genInitFromSchema('nasl.collection.List<app.structures.Structure1>', undefined),
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
    async calendar_created(event) {
      await this.calendar_created_created(event);
    },

    async calendar_created_created(event) {
      await (async () => {
        this.variable1 = [
          { value: 'month', label: '月' },
          { value: 'day', label: '日' },
          { value: 'week', label: '周' },
        ];
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.calendar_created();
  },
};
</script>
