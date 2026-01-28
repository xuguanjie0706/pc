<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <relation-map-view
      :ref="`relation_map_view_1`"
      :class="`cw-style-width`"
      v-dependencies.reload="[]"
      :dataSource="variable3"
      :header="variable2"
      @cell-click="relation_map_view_1_cellclick($event)"
      style="--cw-style-width: 900px; width: 900px"
    >
      <template
        #item="current"
        :ref="`template_1`"
      >
        <u-popup-combination
          :ref="`popup_combination_2_${(current || {}).__nodeKey || (current || {}).index}`"
          :disabled="!((current || {}).item || {}).hasChildren"
        >
          <template
            #reference
            :ref="`template_3_${(current || {}).__nodeKey || (current || {}).index}`"
          >
            <u-linear-layout
              :ref="`linear_layout_2_${(current || {}).__nodeKey || (current || {}).index}`"
              :direction="`vertical`"
              :wrap="true"
              :gap="`normal`"
              style="--space-base: 4px"
            >
              <u-linear-layout
                :ref="`linear_layout_3_${(current || {}).__nodeKey || (current || {}).index}`"
                :wrap="true"
              >
                <u-text
                  :ref="`text_1_${(current || {}).__nodeKey || (current || {}).index}`"
                  :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).label)"
                ></u-text>
              </u-linear-layout>
              <u-linear-layout
                :ref="`linear_layout_4_${(current || {}).__nodeKey || (current || {}).index}`"
                :wrap="true"
              >
                <u-link
                  :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`"
                  :class="` cw-css-rule-link_1___0wf5urd0`"
                  :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).value)"
                  style="--link-color: #0fa485; --link-color-hover: #26bd71"
                ></u-link>
              </u-linear-layout>
            </u-linear-layout>
          </template>
          <u-list-components
            :ref="`list_components_1_${(current || {}).__nodeKey || (current || {}).index}`"
            :colnum="1"
            :dataSource="[``]"
            v-dependencies.reload="[]"
            key="list_components_1"
          >
            <template
              #default="current1"
              :ref="`template_4_${(current || {}).__nodeKey || (current || {}).index}`"
            >
              <u-linear-layout
                :ref="`linear_layout_5_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"
                :class="`cw-style-background-color cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius`"
                :wrap="true"
                :direction="`horizontal`"
                :justify="`start`"
                :alignment="`start`"
                style="
                  --cw-style-background-color: #e0eef3;
                  --cw-style-border-top-left-radius: 5px;
                  --cw-style-border-top-right-radius: 5px;
                  --cw-style-border-bottom-left-radius: 5px;
                  --cw-style-border-bottom-right-radius: 5px;
                  background-color: #e0eef3;
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                "
              >
                <u-text
                  :ref="`text_5_${(current || {}).__nodeKey || (current || {}).index}_${(current1 || {}).__nodeKey || (current1 || {}).index}`"
                  :class="`cw-style-width cw-style-font-size`"
                  :text="
                    $utils['ToString'](
                      'nasl.core.String',
                      `xxx单据
xxxx号`,
                    )
                  "
                  style="--cw-style-width: 100%; --cw-style-font-size: 13px; font-size: 13px; width: 100%"
                ></u-text>
              </u-linear-layout>
            </template>
          </u-list-components>
        </u-popup-combination>
      </template>
    </relation-map-view>
    <gx-upload-view
      :ref="`gx_upload_view_1`"
      :mode="`camera-image`"
      @select="gx_upload_view_1_select($event)"
      @change="gx_upload_view_1_change($event)"
    ></gx-upload-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/relationmapview',
  mixins: [
    window.$mixins.enhancedCss(`:where(.cw-css-rule-link_1___0wf5urd0)[class*=u-link___]:hover, :where(.cw-css-rule-link_1___0wf5urd0)[class*=u-link___]._hover {
  color: #26BD71;
}
`),
    window.$mixins.dataSourceUtils(),
  ],
  data() {
    return {
      variable1: window.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      variable2: window.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      variable3: window.$genInitFromSchema('nasl.collection.List<app.structures.Structure4>', undefined),
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
    async relationmapview_created(event) {
      await this.relationmapview_created_created(event);
    },

    async relationmapview_created_created(event) {
      await (async () => {
        this.variable3 = [
          {
            title: '销售端',
            rows: [
              // 合同
              [
                { label: '报价单', value: 'xxxxxxxxxxxxxxxx', readonly: true },
                { label: '报价单', value: 'xxxxxxxxxxxxxxxx' },
                { label: '销售合同', value: 'HC23L07L059' },
              ],
              // 货物
              [{ label: '发货单', value: 'HC23L07L059-1' }],
              // 资金
              [{ label: '销售核销单', value: 'HC23L07L059-1-21', highlight: true }],
              // 发票
              [{ label: '销售发票申请单', value: 'FFPHC23L07L059' }],
            ],
          },
          {
            title: '采购端',
            rows: [
              [
                { label: '采购合同', value: 'HC23L07L059', links: ['HC23L07L059-01'], hasChildren: false },
                { label: '采购合同', value: 'HC23L07L059', links: ['HC23L07L059-02'], hasChildren: false },
              ],
              [
                { label: '到货单', value: 'HC23L07L059-01', links: ['JS-HC23L07L059'], hasChildren: false },
                { label: '到货单', value: 'HC23L07L059-02', links: ['JS-HC23L07L060'], hasChildren: false },
              ],
              [
                { label: '采购核销单', value: 'JS-HC23L07L059', links: ['2024PI00006'], hasChildren: true },
                { label: '采购核销单', value: 'JS-HC23L07L060', links: ['2024PI00034'], hasChildren: true },
              ],
              [
                { label: '采购发票', value: '2024PI00006' },
                { label: '采购发票', value: '2024PI00034' },
              ],
            ],
          },
          {
            title: '销售退货',
            rows: [[], [{ label: '退货单', value: 'HC23L07L060-02' }], [], []],
          },
          {
            title: '采购退货',
            rows: [[], [{ label: '退货单', value: 'HC23L07L060-02' }], [], []],
          },
        ];

        this.variable2 = ['合同1', '货物2', '资金3', '发票5'];
      })();
    },

    async relation_map_view_1_cellclick(event) {
      await this.relation_map_view_1_cellClick_cellclick(event);
    },

    async relation_map_view_1_cellClick_cellclick(event) {
      await (async () => {
        console.log(event, 222);
      })();
    },

    async gx_upload_view_1_select(event) {
      await this.gx_upload_view_1_select_select(event);
    },

    async gx_upload_view_1_select_select(event) {
      await (async () => {
        console.log(event);
      })();
    },

    async gx_upload_view_1_change(event) {
      await this.gx_upload_view_1_change_change(event);
    },

    async gx_upload_view_1_change_change(event) {},

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.relationmapview_created();
  },
};
</script>
