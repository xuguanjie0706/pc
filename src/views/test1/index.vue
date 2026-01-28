<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-text
      :ref="`text_3`"
      :text="$utils['ToString']('nasl.collection.List<{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}>', contentList)"
    ></u-text>
    <u-list-components
      :ref="`list_components_1`"
      :colnum="1"
      :dataSource="contentList"
      v-dependencies.reload="[]"
      key="list_components_1"
    >
      <template
        #default="current"
        :ref="`template_1`"
      >
        <u-linear-layout
          :ref="`linear_layout_2_${(current || {}).__nodeKey || (current || {}).index}`"
          :direction="`vertical`"
          :wrap="true"
        >
          <u-linear-layout
            :ref="`linear_layout_3_${(current || {}).__nodeKey || (current || {}).index}`"
            :wrap="true"
          >
            <cw-input-area-view
              :ref="`cw_input_area_view_1_${(current || {}).__nodeKey || (current || {}).index}`"
              :value.sync="current.item.property1"
              :disabled="true"
              :titleMap="matchMap"
            ></cw-input-area-view>
          </u-linear-layout>
          <u-linear-layout
            :ref="`linear_layout_10_${(current || {}).__nodeKey || (current || {}).index}`"
            :wrap="true"
          >
            <u-list-components
              :ref="`list_components_2_${(current || {}).__nodeKey || (current || {}).index}`"
              :colnum="1"
              :dataSource="((current || {}).item || {}).property2"
              v-dependencies.reload="[]"
              key="list_components_2"
            >
              <template
                #default="current1"
                :ref="`template_6_${(current || {}).__nodeKey || (current || {}).index}`"
              >
                <u-linear-layout
                  :ref="`linear_layout_6_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"
                  :direction="`vertical`"
                  :wrap="true"
                >
                  <u-linear-layout
                    :ref="`linear_layout_11_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"
                    :wrap="true"
                  >
                    <cw-input-area-view
                      :ref="`cw_input_area_view_3_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"
                      :value.sync="current1.item"
                      :disabled="true"
                      :titleMap="matchMap"
                      @change="cw_input_area_view_3_change($event, current1, current)"
                    ></cw-input-area-view>
                  </u-linear-layout>
                </u-linear-layout>
              </template>
            </u-list-components>
          </u-linear-layout>
          <u-linear-layout
            :ref="`linear_layout_4_${(current || {}).__nodeKey || (current || {}).index}`"
            :wrap="true"
          >
            <u-button
              :ref="`button_1_${(current || {}).__nodeKey || (current || {}).index}`"
              :color="`primary`"
              :throttleTime="150"
              :text="`编辑`"
              @click="button_1_click($event, current)"
            ></u-button>
          </u-linear-layout>
        </u-linear-layout>
      </template>
    </u-list-components>
    <u-modal
      :ref="`modal_1`"
      :is-heading-slot-empty="true"
    >
      <template
        #foot
        :ref="`template_2`"
      >
        <u-linear-layout
          :ref="`linear_layout_5`"
          :justify="`center`"
        >
          <u-button
            :ref="`button_2`"
            :color="`primary`"
            :text="`插入`"
            @click="button_2_click($event)"
          ></u-button>
          <u-button
            :ref="`button_5`"
            :color="`primary`"
            :text="`插入`"
            @click="button_5_click($event)"
          ></u-button>
          <u-button
            :ref="`button_3`"
            :text="`关闭`"
            @click="button_3_click($event)"
          ></u-button>
        </u-linear-layout>
      </template>
      <template
        #body
        :ref="`template_3`"
      >
        <u-linear-layout
          :ref="`linear_layout_7`"
          :direction="`vertical`"
          :wrap="true"
        >
          <u-linear-layout
            :ref="`linear_layout_8`"
            :wrap="true"
          >
            <u-linear-layout
              :ref="`linear_layout_12`"
              :direction="`vertical`"
              :wrap="true"
            >
              <u-linear-layout
                :ref="`linear_layout_13`"
                :wrap="true"
              >
                <cw-input-area-view
                  :ref="`cw_input_area_view_2`"
                  :value.sync="content.property1"
                  :disabled="false"
                  :titleMap="matchMap"
                ></cw-input-area-view>
              </u-linear-layout>
              <u-linear-layout
                :ref="`linear_layout_14`"
                :wrap="true"
              >
                <u-list-components
                  :ref="`list_components_3`"
                  :colnum="1"
                  :dataSource="(content || {}).property2"
                  v-dependencies.reload="[]"
                  key="list_components_3"
                >
                  <template
                    #default="current"
                    :ref="`template_7`"
                  >
                    <u-linear-layout
                      :ref="`linear_layout_16_${(current || {}).__nodeKey || (current || {}).index}`"
                      :direction="`vertical`"
                      :wrap="true"
                    >
                      <u-linear-layout
                        :ref="`linear_layout_17_${(current || {}).__nodeKey || (current || {}).index}`"
                        :wrap="true"
                      >
                        <cw-input-area-view
                          :ref="`cw_input_area_view_4_${(current || {}).__nodeKey || (current || {}).index}`"
                          :value.sync="current.item"
                          :disabled="false"
                          :titleMap="matchMap"
                          @change="cw_input_area_view_4_change($event, current)"
                        ></cw-input-area-view>
                      </u-linear-layout>
                    </u-linear-layout>
                  </template>
                </u-list-components>
              </u-linear-layout>
            </u-linear-layout>
          </u-linear-layout>
          <u-linear-layout
            :ref="`linear_layout_9`"
            :wrap="true"
          >
            <u-input
              :ref="`input_1`"
              :placeholder="`请输入`"
              :emptyValueIsNull="true"
              :value.sync="insertKey"
            ></u-input>
          </u-linear-layout>
        </u-linear-layout>
      </template>
      <template
        #title
        :ref="`template_4`"
      >
        <u-text
          :ref="`text_2`"
          :text="`标题`"
        ></u-text>
      </template>
      <template
        #heading
        :ref="`template_5`"
      ></template>
    </u-modal>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/test1',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      contentList: window.$genInitFromSchema('nasl.collection.List<{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}>', undefined),
      content: window.$genInitFromSchema('{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}', undefined),
      index: undefined,
      matchMap: undefined,
      list: window.$genInitFromSchema('nasl.collection.List<{name: nasl.core.String, value: nasl.core.String}>', undefined),
      insertKey: undefined,
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
    async test1_created(event) {
      await this.test1_created_created(event);
    },

    async test1_created_created(event) {
      let variable3 = window.$genInitFromSchema('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.core.String>>', undefined);
      this.contentList = await (async () => {
        const arr = [
          await (async () => {
            const obj = {};
            obj.property1 = null;
            obj.property2 = null;
            obj.property1 = `000`;
            obj.property2 = await (async () => {
              const arr = [`111`, `222`, `333`];
              return arr;
            })();
            return obj;
          })(),
        ];
        return arr;
      })();
      this.list = await (async () => {
        const arr = [
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `tradeCountryCode`;
            obj.value = `贸易国别`;
            return obj;
          })(),
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `tradeType`;
            obj.value = `贸易类型`;
            return obj;
          })(),
          await (async () => {
            const obj = {};
            obj.name = null;
            obj.value = null;
            obj.name = `busTypeCode`;
            obj.value = `业务类型`;
            return obj;
          })(),
        ];
        return arr;
      })();
      variable3 = window.$genInitFromSchema(
        'nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.core.String>>',
        await window.$utils['MapTransformAsync'](
          window.$genInitFromSchema(
            'nasl.collection.Map<nasl.core.String, nasl.core.String>',
            await window.$utils['ListToMapAsync'](
              this.list,
              (item) => (item || {}).name,
              (item) => (item || {}).value,
            ),
          ),
          (key, value) => key,
          async (key, value) =>
            await (async () => {
              const obj = {};
              let k;
              k = `comment`;
              obj[k] = window.$utils['ToString']('nasl.core.String', `【`) + window.$utils['ToString']('nasl.core.String', value) + window.$utils['ToString']('nasl.core.String', `111】`);
              return obj;
            })(),
        ),
      );
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.collection.Map<nasl.core.String, nasl.collection.Map<nasl.core.String, nasl.core.String>>', variable3)));
      await (async () => {
        this.matchMap = variable3;
      })();
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `匹配Map-->`) + window.$utils['ToString']('nasl.core.String', this.matchMap)));
    },

    async button_2_click(event) {
      await this.button_2_click_click(event);
    },

    async button_2_click_click(event) {
      let variable3 = undefined;
      variable3 = window.$utils['ToString']('nasl.core.String', this.insertKey);
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `insertKey-->`) + window.$utils['ToString']('nasl.core.String', variable3)));
      await (async () => {
        this.$refs['cw_input_area_view_2'].handleClick(variable3, 'wise');
      })();
    },

    async button_5_click(event) {
      await this.button_5_click_click(event);
    },

    async button_5_click_click(event) {
      let variable3 = undefined;
      variable3 = window.$utils['ToString']('nasl.core.String', this.insertKey);
      await console['info'](window.$utils['ToString']('nasl.core.String', window.$utils['ToString']('nasl.core.String', `insertKey-->`) + window.$utils['ToString']('nasl.core.String', variable3)));
      await (async () => {
        this.$refs['cw_input_area_view_4_1'].handleClick(variable3, 'wise');
      })();
    },

    async button_3_click(event) {
      await this.button_3_click_click(event);
    },

    async button_3_click_click(event) {
      await (this.$refs && this.$refs[`modal_1`] && this.$refs[`modal_1`].close && this.$refs[`modal_1`].close());
      window.$genInitFromSchema(
        '{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}',
        window.$utils['Set'](this.contentList, this.index, window.$genInitFromSchema('{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}', window.$utils['Clone'](this.content))),
      );
      await (this.$refs && this.$refs[`list_components_1`] && this.$refs[`list_components_1`].reload && this.$refs[`list_components_1`].reload());
    },

    async button_1_click(event, current) {
      await this.button_1_click_click(event, current);
    },

    async button_1_click_click(event, current) {
      this.index = (current || {}).index;
      this.content = window.$genInitFromSchema('{property1: nasl.core.String, property2: nasl.collection.List<nasl.core.String>}', window.$utils['Clone']((current || {}).item));
      await (this.$refs && this.$refs[`modal_1`] && this.$refs[`modal_1`].open && this.$refs[`modal_1`].open());
    },

    async cw_input_area_view_3_change(event, current1, current) {
      await this.cw_input_area_view_3_change_change(event, current1, current);
    },

    async cw_input_area_view_3_change_change(event, current1, current) {
      await (async () => {
        console.log(this.contentList, 2342);
      })();
    },

    async cw_input_area_view_4_change(event, current) {
      await this.cw_input_area_view_4_change_change(event, current);
    },

    async cw_input_area_view_4_change_change(event, current) {
      await (async () => {
        console.log(this.content);
        this.content.property2[current.index] = current.item;
        console.log(event, current);

        console.log(this.content);
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.test1_created();
  },
};
</script>
