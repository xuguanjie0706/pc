<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view
      :ref="`router_view1`"
      :disableKeepAlive="true"
    ></u-router-view>
    <u-linear-layout
      :ref="`linear_layout_2`"
      :direction="`vertical`"
      :wrap="true"
    >
      <u-linear-layout
        :ref="`linear_layout_3`"
        :wrap="true"
      >
        <cw-input-area-view
          :ref="`cw_input_area_view_1`"
          :class="`cw-style-padding-left cw-style-padding cw-style-padding-bottom cw-style-padding-top cw-style-padding-right cw-style-border-style cw-style-border-color cw-style-border-left-width cw-style-border-width cw-style-border-right-width cw-style-border-top-width cw-style-border-bottom-width cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius`"
          :value.sync="variable1"
          :titleMap="matchMap"
          :disabled="false"
          :placeholder="`请输入条款内容`"
          style="
            --cw-style-padding-left: 12px;
            --cw-style-padding-bottom: 8px;
            --cw-style-padding-top: 8px;
            --cw-style-padding-right: 12px;
            --cw-style-border-style: solid;
            --cw-style-border-color: #e6e7eb;
            --cw-style-border-left-width: 1px;
            --cw-style-border-right-width: 1px;
            --cw-style-border-top-width: 1px;
            --cw-style-border-bottom-width: 1px;
            --cw-style-border-top-left-radius: 4px;
            --cw-style-border-top-right-radius: 4px;
            --cw-style-border-bottom-left-radius: 4px;
            --cw-style-border-bottom-right-radius: 4px;
            border-top-width: 1px;
            border-left-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
            border-style: solid;
            border-color: #e6e7eb;
            border-top-color: #e6e7eb;
            border-bottom-color: #e6e7eb;
            border-left-color: #e6e7eb;
            border-right-color: #e6e7eb;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            padding-right: 12px;
          "
        ></cw-input-area-view>
      </u-linear-layout>
      <u-linear-layout
        :ref="`linear_layout_4`"
        :wrap="true"
      >
        <u-input
          :ref="`input_1`"
          :placeholder="`请输入`"
          :emptyValueIsNull="true"
          :value.sync="insertKey"
        ></u-input>
        <u-button
          :ref="`button_2`"
          :color="`primary`"
          :throttleTime="150"
          :text="`插入`"
          @click="button_2_click($event)"
        ></u-button>
        <u-button
          :ref="`button_3`"
          :color="`primary`"
          :throttleTime="150"
          :text="`赋值`"
          @click="button_3_click($event)"
        ></u-button>
        <u-button
          :ref="`button_5`"
          :color="`primary`"
          :throttleTime="150"
          :text="`复制成2`"
          @click="button_5_click($event)"
        ></u-button>
        <u-text
          :ref="`text_1`"
          :text="$utils['ToString']('nasl.core.String', variable2)"
        ></u-text>
      </u-linear-layout>
      <u-linear-layout
        :ref="`linear_layout_5`"
        :wrap="true"
      ></u-linear-layout>
    </u-linear-layout>
    <u-text
      :ref="`text_2`"
      :text="`普通文本`"
      @click="text_2_click($event)"
    ></u-text>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/customInput',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: undefined,
      matchMap: undefined,
      titleMap: undefined,
      insertKey: undefined,
      variable2: undefined,
      variable4: window.$genInitFromSchema('nasl.collection.Map<nasl.core.String, app.structures.Structure1>', undefined),
    };
  },
  meta: {
    title: '字段插入',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async customInput_created(event) {
      await this.customInput_created_created(event);
    },

    async customInput_created_created(event) {
      let list = window.$genInitFromSchema('nasl.collection.List<{name: nasl.core.String, value: nasl.core.String}>', undefined);
      /* 销售合同主表字段 */ list = await (async () => {
        const arr = [
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `tradeCountryCode`;
            obj.value = `【贸易国别】`;
            return obj;
          })(),
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `tradeType`;
            obj.value = `【贸易类型】`;
            return obj;
          })(),
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `busTypeCode`;
            obj.value = `【业务类型】`;
            return obj;
          })(),
        ];
        return arr;
      })();
      this.matchMap =
        window.$utils['ToString']('nasl.core.String', `{`) +
        window.$utils['ToString'](
          'nasl.core.String',
          window.$utils['Join'](
            window.$genInitFromSchema(
              'nasl.collection.List<nasl.core.String>',
              await window.$utils['ListTransformAsync'](
                list,
                (item) => window.$utils['ToString']('nasl.core.String', (item || {}).name) + window.$utils['ToString']('nasl.core.String', `:{comment:\"`) + window.$utils['ToString']('nasl.core.String', (item || {}).value) + window.$utils['ToString']('nasl.core.String', `11\"}`),
              ),
            ),
            `,`,
          ),
        ) +
        window.$utils['ToString']('nasl.core.String', `}`);
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `匹配Map-->`) + window.$utils['ToString']('nasl.core.String', this.matchMap)));
      this.titleMap = await window.$utils['JsonSerialize'](list);
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `titleMap-->`) + window.$utils['ToString']('nasl.core.String', this.titleMap)));
      await (async () => {
        this.matchMap = {
          f: { comment: '【$是否展示】' },
          b: { comment: '【你好】' },
        };
      })();
    },

    async text_2_click(event) {
      await this.text_2_click_click(event);
    },

    async text_2_click_click(event) {},

    async button_2_click(event) {
      await this.button_2_click_click(event);
    },

    async button_2_click_click(event) {
      let variable3 = undefined;
      variable3 = window.$utils['ToString']('nasl.core.String', this.insertKey);
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `insertKey-->`) + window.$utils['ToString']('nasl.core.String', variable3)));
      await (async () => {
        this.$refs['cw_input_area_view_1'].handleClick(variable3, 'wise');
      })();
    },

    async button_3_click(event) {
      await this.button_3_click_click(event);
    },

    async button_3_click_click(event) {
      this.variable2 = await this.$library['hg_relation_map'].changeStrByMap(this.variable1, this.titleMap);
    },

    async button_5_click(event) {
      await this.button_5_click_click(event);
    },

    async button_5_click_click(event) {
      this.variable2 = this.variable1;
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.customInput_created();
  },
};
</script>
