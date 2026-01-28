<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-form
      :ref="`form_3`"
      key="form_3"
    >
      <u-form-item
        :ref="`form_item_12`"
        :layout="`center`"
      >
        <template
          #label
          :ref="`template_55`"
        >
          <u-text
            :ref="`text_24`"
            :text="`property2`"
          ></u-text>
        </template>
        <u-input
          :ref="`input_10`"
          :value.sync="entity2.property2"
          :placeholder="`请输入property2`"
          :emptyValueIsNull="true"
        ></u-input>
      </u-form-item>
    </u-form>
    <u-button
      :ref="`button_7`"
      :color="`primary`"
      :throttleTime="150"
      :text="`确 定`"
      @click="button_7_click($event)"
    ></u-button>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/input',
  mixins: [window.$mixins.keyboardEvent([{ name: 'input_keydown', type: 'keydown' }]), window.$mixins.dataSourceUtils()],
  data() {
    return {
      entity1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      entity2: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
    };
  },
  meta: {
    title: '输入框',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async input_keydown(event) {
      await this.input_keydown_keydown(event);
    },

    async input_keydown_keydown(event) {
      await (async () => {
        console.log(this.$refs['input_10']);
        // this.$refs['input_10'].$el.querySelector("input").blur()
        console.log(event.keyCode);

        if (event.keyCode === 13) {
          console.log(123);
          this.$refs['input_10'].$el.querySelector('input').blur();
        }
      })();
    },

    async button_7_click(event) {
      await this.button_7_click_click(event);
    },

    async button_7_click_click(event) {
      await (async () => {
        console.log(this.$refs['input_10']);
        this.$refs['input_10'].$el.querySelector('input').blur();
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async keydown() {
    await this.input_keydown();
  },
};
</script>
