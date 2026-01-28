<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-trans-view
      :ref="`gx_trans_view_1`"
      :baseWidth="`1920`"
    >
      <u-date-time-picker
        :ref="`date_time_picker_2`"
        :emptyValueIsNull="true"
        :converter="`json`"
        :appendTo="`reference`"
      ></u-date-time-picker>
      <u-dropdown :ref="`dropdown_1`">
        <template
          #title
          :ref="`template_1`"
        >
          <u-text
            :ref="`text_1`"
            :text="`下拉菜单`"
          ></u-text>
        </template>
        <u-dropdown-item :ref="`dropdown_item_1`">
          <u-text
            :ref="`text_2`"
            :text="`选项一`"
          ></u-text>
        </u-dropdown-item>
        <u-dropdown-item :ref="`dropdown_item_2`">
          <u-text
            :ref="`text_3`"
            :text="`选项二`"
          ></u-text>
        </u-dropdown-item>
        <u-dropdown-item :ref="`dropdown_item_3`">
          <u-text
            :ref="`text_4`"
            :text="`选项三`"
          ></u-text>
        </u-dropdown-item>
      </u-dropdown>
      <u-select
        :ref="`select_1`"
        :placeholder="`请选择`"
        :pagination="true"
        :pageSize="50"
        :emptyValueIsNull="true"
        :sorting="`{ field: undefined, order: \'asc\' }`"
        key="select_1"
      >
        <template
          #option="current"
          :ref="`template_2`"
        ></template>
        <template
          #renderFooter
          :ref="`template_3`"
        ></template>
        <u-select-item :ref="`select_item_1`">
          <u-text
            :ref="`text_5`"
            :text="`选项`"
          ></u-text>
        </u-select-item>
      </u-select>
    </gx-trans-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/trans',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '放缩组件',
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
