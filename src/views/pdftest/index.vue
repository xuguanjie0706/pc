<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-anchor
      :ref="`anchor_1`"
      :label="`qianqian`"
    >
      <u-card
        :ref="`card_2`"
        :class="`cw-style-width`"
        :coverSlot="true"
        style="--cw-style-width: 280px; width: 280px"
      >
        <template
          #cover
          :ref="`template_2`"
        >
          <u-image
            :ref="`image_1`"
            :src="`//static-vusion.nos.lcap.163yun.com/assets/cloud-ui/1.jpg`"
            :fit="`contain`"
          ></u-image>
        </template>
        <template
          #title
          :ref="`template_3`"
        >
          <u-text
            :ref="`text_3`"
            :text="`卡片`"
          ></u-text>
        </template>
        <u-text
          :ref="`text_4`"
          :text="`卡片内容`"
        ></u-text>
      </u-card>
      <u-input
        :ref="`input_1`"
        :placeholder="`请输入`"
        :emptyValueIsNull="true"
      ></u-input>
    </u-anchor>
    <u-anchor
      :ref="`anchor_2`"
      :label="`qianqian1`"
    >
      <u-input
        :ref="`input_2`"
        :placeholder="`请输入`"
        :emptyValueIsNull="true"
      ></u-input>
      <u-alert
        :ref="`alert_1`"
        :type="`info`"
      >
        <template
          #title
          :ref="`template_6`"
        >
          <u-text
            :ref="`text_7`"
            :text="`公告内容`"
          ></u-text>
        </template>
      </u-alert>
    </u-anchor>
    <u-button
      :ref="`button_1`"
      :color="`primary`"
      :throttleTime="150"
      :text="`确 定`"
      @click="button_1_click($event)"
    ></u-button>
    <u-button
      :ref="`button_2`"
      :color="`primary`"
      :throttleTime="150"
      :text="`确 定`"
      @click="button_2_click($event)"
    ></u-button>
    <u-button
      :ref="`button_3`"
      :color="`primary`"
      :throttleTime="150"
      :text="`确 定`"
      @click="button_3_click($event)"
    ></u-button>
    <u-toast-single
      :ref="`toast_single_1`"
      :text="`弹出消息`"
      :duration="0"
      :color="`loading`"
    >
      <template
        #item
        :ref="`template_7`"
      ></template>
    </u-toast-single>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/pdftest',
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
    async pdftest_created(event) {
      await this.pdftest_created_created(event);
    },

    async pdftest_created_created(event) {
      await this.$library['hg_make_pdf_lib'].preloadHtml2PdfWorker();
    },

    async button_1_click(event) {
      await this.button_1_click_click(event);
    },

    async button_1_click_click(event) {
      let variable1 = undefined;
      await (this.$refs && this.$refs[`toast_single_1`] && this.$refs[`toast_single_1`].open && this.$refs[`toast_single_1`].open());
      await window.$global.showMessage(window.$utils['ToString']('nasl.core.String', ''));
      await (async () => {
        console.log(variable1);

        const a = await this.$library['hg_make_pdf_lib'].html2Pdf(`#qianqian`, `1.pdf`, `blob`);
        console.log(a, 'a');
        const url = URL.createObjectURL(a);
        console.log(url, 'url');
        window.open(url);
      })();
      await (this.$refs && this.$refs[`toast_single_1`] && this.$refs[`toast_single_1`].close && this.$refs[`toast_single_1`].close());
    },

    async button_2_click(event) {
      await this.button_2_click_click(event);
    },

    async button_2_click_click(event) {
      let variable1 = undefined;
      await (async () => {
        console.log(variable1);

        const a = await this.$library['hg_make_pdf_lib'].html2Pdf(`#qianqian1`, `1.pdf`, `blob`);
        console.log(a, 'a');
        const url = URL.createObjectURL(a);
        console.log(url, 'url');
        window.open(url);
      })();
      await (this.$refs && this.$refs[`toast_single_1`] && this.$refs[`toast_single_1`].close && this.$refs[`toast_single_1`].close());
    },

    async button_3_click(event) {
      await this.button_3_click_click(event);
    },

    async button_3_click_click(event) {
      let variable1 = undefined;
      await (this.$refs && this.$refs[`toast_single_1`] && this.$refs[`toast_single_1`].open && this.$refs[`toast_single_1`].open());
      await (async () => {
        this.$refs['button_2'].$el.click();
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.pdftest_created();
  },
};
</script>
