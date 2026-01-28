<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <abbreviated-list
      :ref="`abbreviated_list_6`"
      v-dependencies.reload="[]"
      :dataSource="list"
    >
      <template
        #item="current"
        :ref="`template_8`"
      >
        <u-text
          :ref="`text_6_${(current || {}).__nodeKey || (current || {}).index}`"
          :text="$utils['ToString']('nasl.core.String', (current || {}).item)"
        ></u-text>
      </template>
    </abbreviated-list>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/abbreviatedlist',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      list: window.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
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
    async abbreviatedlist_created(event) {
      await this.abbreviatedlist_created_created(event);
    },

    async abbreviatedlist_created_created(event) {},

    async abbreviatedlist_mounted(event) {
      await this.abbreviatedlist_mounted_mounted(event);
    },

    async abbreviatedlist_mounted_mounted(event) {
      await (async () => {
        setTimeout(() => {
          this.list = [1, 2, 3, 4];
        }, 1000);
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.abbreviatedlist_created();
  },

  async mounted() {
    await this.abbreviatedlist_mounted();
  },
};
</script>
