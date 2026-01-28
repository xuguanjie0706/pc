<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-button
      :ref="`button_1`"
      :color="`primary`"
      :throttleTime="150"
      :text="`确 定`"
      @click="button_1_click($event)"
    ></u-button>
    <u-anchor
      :ref="`anchor_1`"
      :class="`cw-style-width`"
      :label="`printBody`"
      style="--cw-style-width: 2000px; width: 2000px"
    >
      <u-grid-layout :ref="`grid_layout_1`">
        <u-grid-layout-row
          :ref="`grid_layout_row_1`"
          :repeat="24"
        >
          <u-grid-layout-column
            :ref="`grid_layout_column_1`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_2`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_3`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
        </u-grid-layout-row>
      </u-grid-layout>
    </u-anchor>
    <u-linear-layout
      :ref="`linear_layout_12`"
      :direction="`vertical`"
    >
      <u-linear-layout :ref="`linear_layout_1`">
        <u-form
          :ref="`form_1`"
          :layout="`inline`"
          key="form_1"
        >
          <u-form-item
            :ref="`form_item_1`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_1`"
            >
              <u-text
                :ref="`text_1`"
                :text="`property1`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_1`"
              :value.sync="filter.property1"
              :placeholder="`请输入property1`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_2`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_2`"
            >
              <u-text
                :ref="`text_2`"
                :text="`property2`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_2`"
              :value.sync="filter.property2"
              :placeholder="`请输入property2`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_3`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_3`"
            >
              <u-text
                :ref="`text_3`"
                :text="`userName`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_3`"
              :value.sync="filter.userName"
              :placeholder="`请输入userName`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_4`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_4`"
            >
              <u-text
                :ref="`text_4`"
                :text="`code`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_4`"
              :value.sync="filter.code"
              :placeholder="`请输入code`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_5`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_5`"
            >
              <u-text
                :ref="`text_5`"
                :text="`name`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_5`"
              :value.sync="filter.name"
              :placeholder="`请输入name`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_6`"
            :layout="`center`"
            :labelSize="`auto`"
          >
            <u-button
              :ref="`button_2`"
              :color="`primary`"
              :text="`查 询`"
              @click="button_2_click($event)"
            ></u-button>
            <template
              #label
              :ref="`template_40`"
            ></template>
          </u-form-item>
        </u-form>
      </u-linear-layout>
      <u-linear-layout
        :ref="`linear_layout_2`"
        :mode="`flex`"
        :alignment="`start`"
        :justify="`end`"
      >
        <u-button
          :ref="`button_3`"
          :color="`primary`"
          :text="`创 建`"
          @click="button_3_click($event)"
        ></u-button>
      </u-linear-layout>
      <u-table-view
        :ref="`tableView_1`"
        @sync:state="(key, val) => onSyncState('tableView_1', key, val)"
        :dataSource="__tableView_1_handleDataSourceLoad()"
        :valueField="`entity1.id`"
        :pagination="true"
        :showSizer="true"
        :pageSize="20"
        :pageNumber="1"
        key="tableView_1"
      >
        <u-table-view-column
          :ref="`table_view_column_1`"
          :key="`table_view_column_1`"
          :type="`index`"
          :width="60"
        >
          <template
            #title
            :ref="`template_6`"
          >
            <u-text
              :ref="`text_6`"
              :text="`序号`"
            ></u-text>
          </template>
          <template
            #expander="current"
            :ref="`template_7`"
          >
            <u-table-view-expander :ref="`table_view_expander_1_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #cell="current"
            :ref="`template_45`"
          ></template>
          <template
            #editcell="current"
            :ref="`template_46`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_47`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_2`"
          :key="`table_view_column_2`"
          :field="`entity1.createdTime`"
        >
          <template
            #title
            :ref="`template_8`"
          >
            <u-text
              :ref="`text_7`"
              :text="`创建时间`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_9`"
          >
            <u-linear-layout
              :ref="`linear_layout_3_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_8_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).entity1 || {}).createdTime)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_10`"
          >
            <u-table-view-expander :ref="`table_view_expander_2_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_48`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_49`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_3`"
          :key="`table_view_column_3`"
          :field="`entity1.updatedTime`"
        >
          <template
            #title
            :ref="`template_11`"
          >
            <u-text
              :ref="`text_9`"
              :text="`更新时间`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_12`"
          >
            <u-linear-layout
              :ref="`linear_layout_4_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_10_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).entity1 || {}).updatedTime)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_13`"
          >
            <u-table-view-expander :ref="`table_view_expander_3_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_50`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_51`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_4`"
          :key="`table_view_column_4`"
          :field="`entity1.property1`"
        >
          <template
            #title
            :ref="`template_14`"
          >
            <u-text
              :ref="`text_11`"
              :text="`property1`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_15`"
          >
            <u-linear-layout
              :ref="`linear_layout_5_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_12_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).property1)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_16`"
          >
            <u-table-view-expander :ref="`table_view_expander_4_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_52`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_53`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_5`"
          :key="`table_view_column_5`"
          :field="`entity1.property2`"
        >
          <template
            #title
            :ref="`template_17`"
          >
            <u-text
              :ref="`text_13`"
              :text="`property2`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_18`"
          >
            <u-linear-layout
              :ref="`linear_layout_6_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_14_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).property2)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_19`"
          >
            <u-table-view-expander :ref="`table_view_expander_5_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_54`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_55`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_6`"
          :key="`table_view_column_6`"
          :field="`entity1.userName`"
        >
          <template
            #title
            :ref="`template_20`"
          >
            <u-text
              :ref="`text_15`"
              :text="`userName`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_21`"
          >
            <u-linear-layout
              :ref="`linear_layout_7_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_16_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).userName)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_22`"
          >
            <u-table-view-expander :ref="`table_view_expander_6_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_56`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_57`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_7`"
          :key="`table_view_column_7`"
          :field="`entity1.code`"
        >
          <template
            #title
            :ref="`template_23`"
          >
            <u-text
              :ref="`text_17`"
              :text="`code`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_24`"
          >
            <u-linear-layout
              :ref="`linear_layout_8_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_18_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).code)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_25`"
          >
            <u-table-view-expander :ref="`table_view_expander_7_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_58`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_59`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_8`"
          :key="`table_view_column_8`"
          :field="`entity1.name`"
        >
          <template
            #title
            :ref="`template_26`"
          >
            <u-text
              :ref="`text_19`"
              :text="`name`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_27`"
          >
            <u-linear-layout
              :ref="`linear_layout_9_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_20_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).name)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_28`"
          >
            <u-table-view-expander :ref="`table_view_expander_8_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_60`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_61`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_9`"
          :key="`table_view_column_9`"
        >
          <template
            #title
            :ref="`template_29`"
          >
            <u-text
              :ref="`text_21`"
              :text="`操作`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_30`"
          >
            <u-linear-layout
              :ref="`linear_layout_10_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-link
                :ref="`link_1_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="`修改`"
                @click="link_1_click($event, current)"
              ></u-link>
              <u-link
                :ref="`link_2_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="`删除`"
                @click="link_2_click($event, current)"
              ></u-link>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_31`"
          >
            <u-table-view-expander :ref="`table_view_expander_9_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_62`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_63`"
          ></template>
        </u-table-view-column>
        <template
          #loading
          :ref="`template_41`"
        ></template>
        <template
          #error
          :ref="`template_42`"
        ></template>
        <template
          #empty
          :ref="`template_43`"
        ></template>
        <template
          #dragGhost="current"
          :ref="`template_44`"
        ></template>
      </u-table-view>
    </u-linear-layout>
    <u-anchor
      :ref="`anchor_3`"
      :class="`cw-style-width`"
      :label="`printHeader`"
      style="--cw-style-width: 2000px; width: 2000px"
    >
      <u-grid-layout :ref="`grid_layout_3`">
        <u-grid-layout-row
          :ref="`grid_layout_row_3`"
          :repeat="24"
        >
          <u-grid-layout-column
            :ref="`grid_layout_column_7`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_8`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_9`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
        </u-grid-layout-row>
      </u-grid-layout>
    </u-anchor>
    <u-anchor
      :ref="`anchor_2`"
      :class="`cw-style-width`"
      :label="`printFooter`"
      style="--cw-style-width: 2000px; width: 2000px"
    >
      <u-grid-layout :ref="`grid_layout_2`">
        <u-grid-layout-row
          :ref="`grid_layout_row_2`"
          :repeat="24"
        >
          <u-grid-layout-column
            :ref="`grid_layout_column_4`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_5`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
          <u-grid-layout-column
            :ref="`grid_layout_column_6`"
            :span="8"
            :wrap="true"
          ></u-grid-layout-column>
        </u-grid-layout-row>
      </u-grid-layout>
    </u-anchor>
    <u-modal
      :ref="`saveModal_1`"
      :is-heading-slot-empty="true"
    >
      <template
        #title
        :ref="`template_32`"
      >
        <u-text
          :ref="`text_22`"
          :key="`text_22`"
          :text="`修改`"
          v-if="isUpdate"
        ></u-text>
        <u-text
          :ref="`text_23`"
          :key="`text_23`"
          :text="`创建`"
          v-if="!isUpdate"
        ></u-text>
      </template>
      <template
        #body
        :ref="`template_38`"
      >
        <u-form
          :ref="`saveModalForm_1`"
          key="saveModalForm_1"
        >
          <u-form-item
            :ref="`form_item_7`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_33`"
            >
              <u-text
                :ref="`text_24`"
                :text="`property1`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_6`"
              :value.sync="input.property1"
              :placeholder="`请输入property1`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_8`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_34`"
            >
              <u-text
                :ref="`text_25`"
                :text="`property2`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_7`"
              :value.sync="input.property2"
              :placeholder="`请输入property2`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_9`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_35`"
            >
              <u-text
                :ref="`text_26`"
                :text="`userName`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_8`"
              :value.sync="input.userName"
              :placeholder="`请输入userName`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_10`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_36`"
            >
              <u-text
                :ref="`text_27`"
                :text="`code`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_9`"
              :value.sync="input.code"
              :placeholder="`请输入code`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_11`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_37`"
            >
              <u-text
                :ref="`text_28`"
                :text="`name`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_10`"
              :value.sync="input.name"
              :placeholder="`请输入name`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
        </u-form>
      </template>
      <template
        #foot
        :ref="`template_39`"
      >
        <u-linear-layout :ref="`linear_layout_11`">
          <u-button
            :ref="`button_4`"
            :key="`button_4`"
            :color="`primary`"
            :text="`提交修改`"
            @click="button_4_click($event)"
            v-if="isUpdate"
          ></u-button>
          <u-button
            :ref="`button_5`"
            :key="`button_5`"
            :color="`primary`"
            :text="`立即创建`"
            @click="button_5_click($event)"
            v-if="!isUpdate"
          ></u-button>
        </u-linear-layout>
      </template>
      <template
        #heading
        :ref="`template_64`"
      ></template>
    </u-modal>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/print',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      entity1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      input: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      filter: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      isUpdate: undefined,
      tableView_1_state_page: undefined,
      tableView_1_state_size: undefined,
      tableView_1_state_sort: undefined,
      tableView_1_state_order: undefined,
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
    async print_created(event) {
      await this.print_created_init(event);
    },

    async print_created_init(event) {
      window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clear'](this.filter, `deep`, 'app.dataSources.defaultDS.entities.Entity1'));
    },

    async button_1_click(event) {
      await this.button_1_click_click(event);
    },

    async button_1_click_click(event) {
      await (async () => {
        const printBody = document.querySelector('#printBody');
        console.log(this.$library['hg_print_lib']);
        const file1 = await this.$library['hg_print_lib'].generatePurePdf(printBody, '2024年度销售业绩报告-pure.pdf', {
          format: 'a4',
          orientation: 'portrait',
          scale: 2,
          margin: {
            top: 10,
            right: 15,
            bottom: 20,
            left: 15,
          },
          imageType: 'jpeg',
          imageQuality: 0.7,
          compress: true,
          header: {
            el: 'printHeader',
          },
          footer: {
            el: 'printFooter',
          },
        });
      })();
    },

    async button_3_click(event) {
      await this.button_3_click_create(event);
    },

    async button_3_click_create(event) {
      this.isUpdate = false;
      this.input = window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clone'](this.entity1));
      await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].open && this.$refs[`saveModal_1`].open());
    },

    async button_4_click(event) {
      await this.button_4_click_updateSubmit(event);
    },

    async button_4_click_updateSubmit(event) {
      if ((window.$genInitFromSchema('nasl.ui.ValidateResult', await (this.$refs && this.$refs[`saveModalForm_1`] && this.$refs[`saveModalForm_1`].validate && this.$refs[`saveModalForm_1`].validate())) || {}).valid) {
        window.$genInitFromSchema(
          'app.dataSources.defaultDS.entities.Entity1',
          await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.update']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/print/0',
            },
            body: {
              entity: this.input,
            },
          }),
        );
        await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].close && this.$refs[`saveModal_1`].close());
        await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
      }
    },

    async button_5_click(event) {
      await this.button_5_click_submit(event);
    },

    async button_5_click_submit(event) {
      if ((window.$genInitFromSchema('nasl.ui.ValidateResult', await (this.$refs && this.$refs[`saveModalForm_1`] && this.$refs[`saveModalForm_1`].validate && this.$refs[`saveModalForm_1`].validate())) || {}).valid) {
        window.$genInitFromSchema(
          'app.dataSources.defaultDS.entities.Entity1',
          await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/print/0',
            },

            body: this.input,
          }),
        );
        await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].close && this.$refs[`saveModal_1`].close());
        await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
      }
    },

    async button_2_click(event) {
      await this.button_2_click_reload(event);
    },

    async button_2_click_reload(event) {
      await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
    },

    async link_1_click(event, current) {
      await this.link_1_click_modify(event, current);
    },

    async link_1_click_modify(event, current) {
      this.isUpdate = true;
      this.input = window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clone'](((current || {}).item || {}).entity1));
      await (this.$refs && this.$refs[`saveModal_1`] && this.$refs[`saveModal_1`].open && this.$refs[`saveModal_1`].open());
    },

    async link_2_click(event, current) {
      await this.link_2_click_remove(event, current);
    },

    async link_2_click_remove(event, current) {
      await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.delete']({
        config: {
          download: false,
        },
        query: {
          id: (((current || {}).item || {}).entity1 || {}).id,
        },
        headers: {
          'lcap-calllogic-uuid': '/print/0',
        },
        body: {},
      });
      await (this.$refs && this.$refs[`tableView_1`] && this.$refs[`tableView_1`].reload && this.$refs[`tableView_1`].reload());
    },

    __tableView_1_handleDataSourceLoad() {
      return this.__getOrCreateDataSource('__tableView_1_handleDataSourceLoad', [], async () => {
        return window.$genInitFromSchema(
          '{list: nasl.collection.List<{entity1: app.dataSources.defaultDS.entities.Entity1}>, total: nasl.core.Long}',
          await window.$logics['app.logics.loadPrintTableView1']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/print/0',
            },
            path: {},
            body: {
              page: this.tableView_1_state_page,
              size: this.tableView_1_state_size,
              sort: this.tableView_1_state_sort,
              order: this.tableView_1_state_order,
              filter: this.filter,
            },
          }),
        );
      });
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.print_created();
  },
};
</script>
