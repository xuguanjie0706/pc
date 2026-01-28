<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-info-list :ref="`info_list_1`">
      <u-info-list-group :ref="`info_list_group_1`">
        <template
          #title
          :ref="`template_1`"
        >
          <u-text
            :ref="`text_1`"
            :text="`基本信息`"
          ></u-text>
        </template>
        <u-info-list-item :ref="`info_list_item_1`">
          <template
            #label
            :ref="`template_2`"
          >
            <u-text
              :ref="`text_2`"
              :text="`property1`"
            ></u-text>
          </template>
          <u-text
            :ref="`text_3`"
            :text="$utils['ToString']('nasl.core.String', (entity1 || {}).property1)"
          ></u-text>
        </u-info-list-item>
        <u-info-list-item :ref="`info_list_item_2`">
          <template
            #label
            :ref="`template_3`"
          >
            <u-text
              :ref="`text_4`"
              :text="`property2`"
            ></u-text>
          </template>
          <u-text
            :ref="`text_5`"
            :text="$utils['ToString']('nasl.core.String', (entity1 || {}).property2)"
          ></u-text>
        </u-info-list-item>
        <u-info-list-item :ref="`info_list_item_3`">
          <template
            #label
            :ref="`template_4`"
          >
            <u-text
              :ref="`text_6`"
              :text="`userName`"
            ></u-text>
          </template>
          <u-text
            :ref="`text_7`"
            :text="$utils['ToString']('nasl.core.String', (entity1 || {}).userName)"
          ></u-text>
        </u-info-list-item>
        <u-info-list-item :ref="`info_list_item_4`">
          <template
            #label
            :ref="`template_5`"
          >
            <u-text
              :ref="`text_8`"
              :text="`code`"
            ></u-text>
          </template>
          <u-text
            :ref="`text_9`"
            :text="$utils['ToString']('nasl.core.String', (entity1 || {}).code)"
          ></u-text>
        </u-info-list-item>
        <u-info-list-item :ref="`info_list_item_5`">
          <template
            #label
            :ref="`template_6`"
          >
            <u-text
              :ref="`text_10`"
              :text="`name`"
            ></u-text>
          </template>
          <u-text
            :ref="`text_11`"
            :text="$utils['ToString']('nasl.core.String', (entity1 || {}).name)"
          ></u-text>
        </u-info-list-item>
        <template
          #extra
          :ref="`template_7`"
        ></template>
      </u-info-list-group>
    </u-info-list>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/details',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      entity1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      id: Object.prototype.hasOwnProperty.call(this.$route.query, 'id') && !['undefined', 'null'].includes(this.$route.query.id) ? window.$genInitFromSchema('nasl.core.Long', this.$route.query.id) : undefined,
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
    async details_created(event) {
      await this.details_created_load(event);
    },

    async details_created_load(event) {
      this.entity1 = window.$genInitFromSchema(
        'app.dataSources.defaultDS.entities.Entity1',
        await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.get']({
          config: {
            download: false,
          },
          query: {
            id: this.id,
          },
          headers: {
            'lcap-calllogic-uuid': '/details/0',
          },
          body: {},
        }),
      );
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.details_created();
  },
};
</script>
