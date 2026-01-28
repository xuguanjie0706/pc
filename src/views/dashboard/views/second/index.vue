<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <u-linear-layout
      :ref="`linear_layout_32`"
      :direction="`vertical`"
    >
      <u-linear-layout :ref="`linear_layout_21`">
        <u-form
          :ref="`form_2`"
          :layout="`inline`"
          key="form_2"
        >
          <u-form-item
            :ref="`form_item_12`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_114`"
            >
              <u-text
                :ref="`text_45`"
                :text="`property1`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_11`"
              :value.sync="filter1.property1"
              :placeholder="`请输入property1`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_13`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_115`"
            >
              <u-text
                :ref="`text_46`"
                :text="`property2`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_12`"
              :value.sync="filter1.property2"
              :placeholder="`请输入property2`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_14`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_116`"
            >
              <u-text
                :ref="`text_47`"
                :text="`userName`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_13`"
              :value.sync="filter1.userName"
              :placeholder="`请输入userName`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_15`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_117`"
            >
              <u-text
                :ref="`text_48`"
                :text="`code`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_14`"
              :value.sync="filter1.code"
              :placeholder="`请输入code`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_16`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_118`"
            >
              <u-text
                :ref="`text_49`"
                :text="`name`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_15`"
              :value.sync="filter1.name"
              :placeholder="`请输入name`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_17`"
            :layout="`center`"
            :labelSize="`auto`"
          >
            <u-button
              :ref="`button_6`"
              :color="`primary`"
              :text="`查 询`"
              @click="button_6_click($event)"
            ></u-button>
            <template
              #label
              :ref="`template_153`"
            ></template>
          </u-form-item>
        </u-form>
      </u-linear-layout>
      <u-linear-layout
        :ref="`linear_layout_22`"
        :mode="`flex`"
        :alignment="`start`"
        :justify="`end`"
      >
        <u-button
          :ref="`button_7`"
          :color="`primary`"
          :text="`创 建`"
          @click="button_7_click($event)"
        ></u-button>
      </u-linear-layout>
      <u-table-view
        :ref="`tableView_3`"
        @sync:state="(key, val) => onSyncState('tableView_3', key, val)"
        :dataSource="__tableView_3_handleDataSourceLoad()"
        :valueField="`entity1.id`"
        :pagination="true"
        :showSizer="true"
        :pageSize="20"
        :pageNumber="1"
        key="tableView_3"
      >
        <u-table-view-column
          :ref="`table_view_column_19`"
          :key="`table_view_column_19`"
          :type="`index`"
          :width="60"
        >
          <template
            #title
            :ref="`template_119`"
          >
            <u-text
              :ref="`text_50`"
              :text="`序号`"
            ></u-text>
          </template>
          <template
            #expander="current"
            :ref="`template_120`"
          >
            <u-table-view-expander :ref="`table_view_expander_19_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #cell="current"
            :ref="`template_158`"
          ></template>
          <template
            #editcell="current"
            :ref="`template_159`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_160`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_20`"
          :key="`table_view_column_20`"
          :field="`entity1.createdTime`"
        >
          <template
            #title
            :ref="`template_121`"
          >
            <u-text
              :ref="`text_51`"
              :text="`创建时间`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_122`"
          >
            <u-linear-layout
              :ref="`linear_layout_23_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_52_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).entity1 || {}).createdTime)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_123`"
          >
            <u-table-view-expander :ref="`table_view_expander_20_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_161`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_162`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_21`"
          :key="`table_view_column_21`"
          :field="`entity1.updatedTime`"
        >
          <template
            #title
            :ref="`template_124`"
          >
            <u-text
              :ref="`text_53`"
              :text="`更新时间`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_125`"
          >
            <u-linear-layout
              :ref="`linear_layout_24_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_54_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).entity1 || {}).updatedTime)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_126`"
          >
            <u-table-view-expander :ref="`table_view_expander_21_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_163`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_164`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_22`"
          :key="`table_view_column_22`"
          :field="`entity1.property1`"
        >
          <template
            #title
            :ref="`template_127`"
          >
            <u-text
              :ref="`text_55`"
              :text="`property1`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_128`"
          >
            <u-linear-layout
              :ref="`linear_layout_25_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_56_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).property1)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_129`"
          >
            <u-table-view-expander :ref="`table_view_expander_22_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_165`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_166`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_23`"
          :key="`table_view_column_23`"
          :field="`entity1.property2`"
        >
          <template
            #title
            :ref="`template_130`"
          >
            <u-text
              :ref="`text_57`"
              :text="`property2`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_131`"
          >
            <u-linear-layout
              :ref="`linear_layout_26_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_58_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).property2)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_132`"
          >
            <u-table-view-expander :ref="`table_view_expander_23_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_167`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_168`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_24`"
          :key="`table_view_column_24`"
          :field="`entity1.userName`"
        >
          <template
            #title
            :ref="`template_133`"
          >
            <u-text
              :ref="`text_59`"
              :text="`userName`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_134`"
          >
            <u-linear-layout
              :ref="`linear_layout_27_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_60_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).userName)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_135`"
          >
            <u-table-view-expander :ref="`table_view_expander_24_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_169`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_170`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_25`"
          :key="`table_view_column_25`"
          :field="`entity1.code`"
        >
          <template
            #title
            :ref="`template_136`"
          >
            <u-text
              :ref="`text_61`"
              :text="`code`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_137`"
          >
            <u-linear-layout
              :ref="`linear_layout_28_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_62_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).code)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_138`"
          >
            <u-table-view-expander :ref="`table_view_expander_25_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_171`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_172`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_26`"
          :key="`table_view_column_26`"
          :field="`entity1.name`"
        >
          <template
            #title
            :ref="`template_139`"
          >
            <u-text
              :ref="`text_63`"
              :text="`name`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_140`"
          >
            <u-linear-layout
              :ref="`linear_layout_29_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-text
                :ref="`text_64_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).entity1 || {}).name)"
              ></u-text>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_141`"
          >
            <u-table-view-expander :ref="`table_view_expander_26_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_173`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_174`"
          ></template>
        </u-table-view-column>
        <u-table-view-column
          :ref="`table_view_column_27`"
          :key="`table_view_column_27`"
        >
          <template
            #title
            :ref="`template_142`"
          >
            <u-text
              :ref="`text_65`"
              :text="`操作`"
            ></u-text>
          </template>
          <template
            #cell="current"
            :ref="`template_143`"
          >
            <u-linear-layout
              :ref="`linear_layout_30_${(current || {}).__nodeKey || (current || {}).index}`"
              :gap="`small`"
            >
              <u-link
                :ref="`link_5_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="`修改`"
                @click="link_5_click($event, current)"
              ></u-link>
              <u-link
                :ref="`link_6_${(current || {}).__nodeKey || (current || {}).index}`"
                :text="`删除`"
                @click="link_6_click($event, current)"
              ></u-link>
            </u-linear-layout>
          </template>
          <template
            #expander="current"
            :ref="`template_144`"
          >
            <u-table-view-expander :ref="`table_view_expander_27_${(current || {}).__nodeKey || (current || {}).index}`"></u-table-view-expander>
          </template>
          <template
            #editcell="current"
            :ref="`template_175`"
          ></template>
          <template
            #expand-content="current"
            :ref="`template_176`"
          ></template>
        </u-table-view-column>
        <template
          #loading
          :ref="`template_154`"
        ></template>
        <template
          #error
          :ref="`template_155`"
        ></template>
        <template
          #empty
          :ref="`template_156`"
        ></template>
        <template
          #dragGhost="current"
          :ref="`template_157`"
        ></template>
      </u-table-view>
    </u-linear-layout>
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
            v-if="isUpdate"
          ></u-button>
          <u-button
            :ref="`button_5`"
            :key="`button_5`"
            :color="`primary`"
            :text="`立即创建`"
            v-if="!isUpdate"
          ></u-button>
        </u-linear-layout>
      </template>
      <template
        #heading
        :ref="`template_64`"
      ></template>
    </u-modal>
    <u-modal
      :ref="`saveModal_2`"
      :is-heading-slot-empty="true"
    >
      <template
        #title
        :ref="`template_145`"
      >
        <u-text
          :ref="`text_66`"
          :key="`text_66`"
          :text="`修改`"
          v-if="isUpdate1"
        ></u-text>
        <u-text
          :ref="`text_67`"
          :key="`text_67`"
          :text="`创建`"
          v-if="!isUpdate1"
        ></u-text>
      </template>
      <template
        #body
        :ref="`template_151`"
      >
        <u-form
          :ref="`saveModalForm_2`"
          key="saveModalForm_2"
        >
          <u-form-item
            :ref="`form_item_18`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_146`"
            >
              <u-text
                :ref="`text_68`"
                :text="`property1`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_16`"
              :value.sync="input1.property1"
              :placeholder="`请输入property1`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_19`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_147`"
            >
              <u-text
                :ref="`text_69`"
                :text="`property2`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_17`"
              :value.sync="input1.property2"
              :placeholder="`请输入property2`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_20`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_148`"
            >
              <u-text
                :ref="`text_70`"
                :text="`userName`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_18`"
              :value.sync="input1.userName"
              :placeholder="`请输入userName`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_21`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_149`"
            >
              <u-text
                :ref="`text_71`"
                :text="`code`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_19`"
              :value.sync="input1.code"
              :placeholder="`请输入code`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
          <u-form-item
            :ref="`form_item_22`"
            :layout="`center`"
          >
            <template
              #label
              :ref="`template_150`"
            >
              <u-text
                :ref="`text_72`"
                :text="`name`"
              ></u-text>
            </template>
            <u-input
              :ref="`input_20`"
              :value.sync="input1.name"
              :placeholder="`请输入name`"
              :emptyValueIsNull="true"
            ></u-input>
          </u-form-item>
        </u-form>
      </template>
      <template
        #foot
        :ref="`template_152`"
      >
        <u-linear-layout :ref="`linear_layout_31`">
          <u-button
            :ref="`button_8`"
            :key="`button_8`"
            :color="`primary`"
            :text="`提交修改`"
            @click="button_8_click($event)"
            v-if="isUpdate1"
          ></u-button>
          <u-button
            :ref="`button_9`"
            :key="`button_9`"
            :color="`primary`"
            :text="`立即创建`"
            @click="button_9_click($event)"
            v-if="!isUpdate1"
          ></u-button>
        </u-linear-layout>
      </template>
      <template
        #heading
        :ref="`template_177`"
      ></template>
    </u-modal>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/dashboard/second',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      entity1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      input: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      filter: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      isUpdate: undefined,
      entity2: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      input1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      filter1: window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', undefined),
      isUpdate1: undefined,
      tableView_3_state_page: undefined,
      tableView_3_state_size: undefined,
      tableView_3_state_sort: undefined,
      tableView_3_state_order: undefined,
    };
  },
  meta: {
    title: 'lxy',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async second_created(event) {
      await this.second_created_init1(event);
      await this.second_created_init(event);
    },

    async second_created_init1(event) {
      window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clear'](this.filter1, `deep`, 'app.dataSources.defaultDS.entities.Entity1'));
    },

    async second_created_init(event) {
      window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clear'](this.filter, `deep`, 'app.dataSources.defaultDS.entities.Entity1'));
    },

    async button_7_click(event) {
      await this.button_7_click_create(event);
    },

    async button_7_click_create(event) {
      this.isUpdate1 = false;
      this.input1 = window.$genInitFromSchema('app.dataSources.defaultDS.entities.Entity1', window.$utils['Clone'](this.entity2));
      await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].open && this.$refs[`saveModal_2`].open());
    },

    async button_8_click(event) {
      await this.button_8_click_updateSubmit(event);
    },

    async button_8_click_updateSubmit(event) {
      if ((window.$genInitFromSchema('nasl.ui.ValidateResult', await (this.$refs && this.$refs[`saveModalForm_2`] && this.$refs[`saveModalForm_2`].validate && this.$refs[`saveModalForm_2`].validate())) || {}).valid) {
        window.$genInitFromSchema(
          'app.dataSources.defaultDS.entities.Entity1',
          await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.update']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/dashboard/second/0',
            },
            body: {
              entity: this.input1,
            },
          }),
        );
        await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].close && this.$refs[`saveModal_2`].close());
        await (this.$refs && this.$refs[`tableView_3`] && this.$refs[`tableView_3`].reload && this.$refs[`tableView_3`].reload());
      }
    },

    async button_9_click(event) {
      await this.button_9_click_submit(event);
    },

    async button_9_click_submit(event) {
      if ((window.$genInitFromSchema('nasl.ui.ValidateResult', await (this.$refs && this.$refs[`saveModalForm_2`] && this.$refs[`saveModalForm_2`].validate && this.$refs[`saveModalForm_2`].validate())) || {}).valid) {
        window.$genInitFromSchema(
          'app.dataSources.defaultDS.entities.Entity1',
          await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.create']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/dashboard/second/0',
            },

            body: this.input1,
          }),
        );
        await (this.$refs && this.$refs[`saveModal_2`] && this.$refs[`saveModal_2`].close && this.$refs[`saveModal_2`].close());
        await (this.$refs && this.$refs[`tableView_3`] && this.$refs[`tableView_3`].reload && this.$refs[`tableView_3`].reload());
      }
    },

    async button_6_click(event) {
      await this.button_6_click_reload(event);
    },

    async button_6_click_reload(event) {
      await (this.$refs && this.$refs[`tableView_3`] && this.$refs[`tableView_3`].reload && this.$refs[`tableView_3`].reload());
    },

    async link_5_click(event, current) {
      await this.link_5_click_modify(event, current);
    },

    async link_5_click_modify(event, current) {
      window.$destination(`/dashboard/info${window.$toQueryString({ id: (((current || {}).item || {}).entity1 || {}).id, param1: `wqwqqw` })}`, '_self', false);
    },

    async link_6_click(event, current) {
      await this.link_6_click_remove(event, current);
    },

    async link_6_click_remove(event, current) {
      await window.$logics['app.dataSources.defaultDS.entities.Entity1.logics.delete']({
        config: {
          download: false,
        },
        query: {
          id: (((current || {}).item || {}).entity1 || {}).id,
        },
        headers: {
          'lcap-calllogic-uuid': '/dashboard/second/0',
        },
        body: {},
      });
      await (this.$refs && this.$refs[`tableView_3`] && this.$refs[`tableView_3`].reload && this.$refs[`tableView_3`].reload());
    },

    __tableView_3_handleDataSourceLoad() {
      return this.__getOrCreateDataSource('__tableView_3_handleDataSourceLoad', [], async () => {
        return window.$genInitFromSchema(
          '{list: nasl.collection.List<{entity1: app.dataSources.defaultDS.entities.Entity1}>, total: nasl.core.Long}',
          await window.$logics['app.logics.loadSecondTableView3']({
            config: {
              download: false,
            },
            query: {},
            headers: {
              'lcap-calllogic-uuid': '/dashboard/second/0',
            },
            path: {},
            body: {
              page: this.tableView_3_state_page,
              size: this.tableView_3_state_size,
              sort: this.tableView_3_state_sort,
              order: this.tableView_3_state_order,
              filter: this.filter1,
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
    await this.second_created();
  },
};
</script>
