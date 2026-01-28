<template>
  <l-root :ref="`lRoot1`">
    <u-multi-layout
      :ref="`multi_layout1`"
      :direction="`vertical`"
    >
      <u-multi-layout-item
        :ref="`multi_layout_item1`"
        :class="`cw-style-height`"
        style="--cw-style-height: 60px; height: 60px"
      >
        <u-navbar-multi :ref="`navbar_multi1`">
          <template
            #right
            :ref="`template1`"
          >
            <u-multi-layout-item
              :ref="`multi_layout_item6`"
              :alignItems="`center`"
              :justify="`end`"
            >
              <u-dropdown
                :ref="`dropdown1`"
                :class="`cw-style-margin-right cw-style-margin`"
                style="--cw-style-margin-right: 10px; margin-right: 10px"
              >
                <template
                  #default
                  :ref="`template3`"
                >
                  <u-dropdown-item
                    :ref="`dropdown_item1`"
                    @click="dropdown_item1_click($event)"
                  >
                    <u-text
                      :ref="`text2`"
                      :text="`安全退出`"
                    ></u-text>
                  </u-dropdown-item>
                </template>
                <template
                  #title
                  :ref="`template4`"
                >
                  <u-linear-layout
                    :ref="`linear_layout1`"
                    :key="`linear_layout1`"
                    :gap="`small`"
                    v-if="$global.userInfo"
                  >
                    <u-image
                      :ref="`image2`"
                      :class="`cw-style-width cw-style-height`"
                      :src="`/assets/avatar-default.svg`"
                      :fit="`cover`"
                      style="--cw-style-width: 36px; --cw-style-height: 36px; width: 36px; height: 36px; vertical-align: middle"
                    ></u-image>
                    <span
                      :ref="`span1`"
                      :class="`cw-style-margin-left cw-style-margin cw-style-margin-right`"
                      style="--cw-style-margin-left: 10px; --cw-style-margin-right: 10px; display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px"
                    >
                      <u-text
                        :ref="`text3`"
                        :text="$utils['ToString']('nasl.core.String', ($global.userInfo || {}).DisplayName)"
                      ></u-text>
                    </span>
                  </u-linear-layout>
                </template>
              </u-dropdown>
            </u-multi-layout-item>
          </template>
          <template
            #left
            :ref="`template2`"
          >
            <u-multi-layout-item
              :ref="`multi_layout_item7`"
              :class="`cw-style-width`"
              :alignItems="`center`"
              style="--cw-style-width: 200px; width: 200px"
            >
              <u-image
                :ref="`image1`"
                :class="`cw-style-width cw-style-height cw-style-margin`"
                :fit="`cover`"
                :src="`/assets/lcap-logo-light.svg`"
                style="--cw-style-width: 28px; --cw-style-height: 28px; --cw-style-margin: 16px 14px; width: 28px; height: 28px; margin: 16px 14px; --custom-start: auto; vertical-align: middle"
              ></u-image>
              <u-text
                :ref="`text1`"
                :size="`large`"
                :text="`应用名称`"
                style="--custom-start: auto; vertical-align: middle"
              ></u-text>
            </u-multi-layout-item>
          </template>
          <u-navbar-item-multi
            :ref="`navbar_item_multi1`"
            :destination="``"
            :target="`_self`"
          >
            <u-text
              :ref="`text6`"
              :text="`顶部导航1`"
            ></u-text>
          </u-navbar-item-multi>
          <u-navbar-item-multi
            :ref="`navbar_item_multi2`"
            :target="`_self`"
          >
            <u-text
              :ref="`text7`"
              :text="`顶部导航2`"
            ></u-text>
          </u-navbar-item-multi>
        </u-navbar-multi>
      </u-multi-layout-item>
      <u-multi-layout-item :ref="`multi_layout_item2`">
        <u-multi-layout :ref="`multi_layout2`">
          <u-multi-layout-item
            :ref="`multi_layout_item3`"
            :class="`cw-style-width`"
            :fixed="true"
            style="--cw-style-width: 200px; width: 200px; left: 0"
          >
            <u-sidebar
              :ref="`sidebar1`"
              :router="true"
            >
              <u-sidebar-item
                :ref="`sidebar_item1`"
                :value="null"
                :destination="`/dashboard/first`"
              >
                <u-text
                  :ref="`text4`"
                  :text="`导航链接1`"
                ></u-text>
              </u-sidebar-item>
              <u-sidebar-item
                :ref="`sidebar_item2`"
                :value="null"
                :destination="`/dashboard/second`"
              >
                <u-text
                  :ref="`text5`"
                  :text="`导航链接2`"
                ></u-text>
              </u-sidebar-item>
              <u-sidebar-item
                :ref="`sidebar_item_1`"
                :value="null"
                :destination="`/dashboard/ziyingyong/third`"
              >
                <u-text
                  :ref="`text_1`"
                  :text="`导航链接3`"
                ></u-text>
              </u-sidebar-item>
              <u-sidebar-item
                :ref="`sidebar_item_2`"
                :value="null"
                :destination="`/dashboard/ziyingyong/a`"
              >
                <u-text
                  :ref="`text_2`"
                  :text="`导航链接4`"
                ></u-text>
              </u-sidebar-item>
              <u-sidebar-item
                :ref="`sidebar_item_3`"
                :value="null"
                :destination="`/dashboard/four`"
              >
                <u-text
                  :ref="`text_1605`"
                  :text="`导航链接5`"
                ></u-text>
              </u-sidebar-item>
              <u-sidebar-item
                :ref="`sidebar_item_4`"
                :value="null"
                :destination="`/dashboard/five`"
              >
                <u-text
                  :ref="`text_1606`"
                  :text="`导航链接6`"
                ></u-text>
              </u-sidebar-item>
            </u-sidebar>
          </u-multi-layout-item>
          <u-multi-layout-item
            :ref="`multi_layout_item4`"
            :class="`cw-style-padding cw-style-margin-left cw-style-margin`"
            style="--cw-style-padding: 40px 40px 40px 40px; --cw-style-margin-left: 200px; margin-left: 200px; padding: 40px 40px 40px 40px"
          >
            <u-crumb
              :ref="`crumb1`"
              :auto="true"
            ></u-crumb>
            <gx-tab-bar-view
              :ref="`gx_tab_bar_view_4`"
              v-dependencies.reload="[]"
              :dataSource="variable1"
              :defaultTabs="[{ title: '首页', path: '/', id: '首页', closable: true }]"
              :ignoreRoutes="['/dashboard/five']"
              @tab-change="gx_tab_bar_view_4_tabchange($event)"
              @active-change="gx_tab_bar_view_4_activechange($event)"
            >
              <template
                #item="current"
                :ref="`template_4`"
              >
                <u-dropdown
                  :ref="`dropdown_4_${(current || {}).__nodeKey || (current || {}).index}`"
                  :class="`cw-style-width cw-style-background-color cw-style-padding-left cw-style-padding cw-style-padding-right cw-style-color cw-style-border-style cw-style-border-left-width cw-style-border-width cw-style-border-right-width cw-style-border-top-width cw-style-border-bottom-width cw-css-rule-dropdown_4___1df7px01`"
                  :type="`primary`"
                  :appendTo="`body`"
                  :widthStretch="`false`"
                  :heightStretch="`false`"
                  :trigger="`right-click`"
                  :style="{ 'background-color': `#fff`, '--cw-style-background-color': `#fff` }"
                  style="
                    --cw-style-width: auto;
                    --cw-style-padding-left: 0px;
                    --cw-style-padding-right: 0px;
                    --cw-style-color: #0c1e3d;
                    --cw-style-border-style: solid;
                    --cw-style-border-left-width: 0px;
                    --cw-style-border-right-width: 0px;
                    --cw-style-border-top-width: 0px;
                    --cw-style-border-bottom-width: 0px;
                    border-top-width: 0px;
                    border-left-width: 0px;
                    border-right-width: 0px;
                    border-bottom-width: 0px;
                    border-style: solid;
                    color: #0c1e3d;
                    width: auto;
                    padding-left: 0px;
                    padding-right: 0px;
                    --dropdown-popper-width: 140px;
                    --custom-start: auto;
                    box-shadow: none;
                    display: flex;
                    align-items: center;
                    background-color: #fff !important;
                  "
                >
                  <template
                    #title
                    :ref="`template_3669_${(current || {}).__nodeKey || (current || {}).index}`"
                  >
                    <u-text
                      :ref="`text_71_${(current || {}).__nodeKey || (current || {}).index}`"
                      :class="`cw-style-height cw-css-rule-text_71___1df7px01`"
                      :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).title)"
                      :heightStretch="`false`"
                      :style="{}"
                      style="--cw-style-height: 46px; height: 46px"
                    ></u-text>
                  </template>
                  <u-dropdown-item
                    :ref="`dropdown_item_12_${(current || {}).__nodeKey || (current || {}).index}`"
                    :class="`cw-style-padding-left cw-style-padding cw-style-padding-right cw-style-margin-left cw-style-margin cw-style-margin-right cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius cw-css-rule-dropdown_item_12___1df7px01`"
                    @click="dropdown_item_12_click($event, current)"
                    style="
                      --cw-style-padding-left: 6px;
                      --cw-style-padding-right: 6px;
                      --cw-style-margin-left: 4px;
                      --cw-style-margin-right: 4px;
                      --cw-style-border-top-left-radius: 4px;
                      --cw-style-border-top-right-radius: 4px;
                      --cw-style-border-bottom-left-radius: 4px;
                      --cw-style-border-bottom-right-radius: 4px;
                      padding-right: 6px;
                      padding-left: 6px;
                      margin-left: 4px;
                      margin-right: 4px;
                      border-top-left-radius: 4px;
                      border-bottom-left-radius: 4px;
                      border-top-right-radius: 4px;
                      border-bottom-right-radius: 4px;
                    "
                  >
                    <u-text
                      :ref="`text_1602_${(current || {}).__nodeKey || (current || {}).index}`"
                      :class="`cw-style-color`"
                      :text="`关闭其它标签`"
                      style="--cw-style-color: #53576a; color: #53576a"
                    ></u-text>
                  </u-dropdown-item>
                  <u-dropdown-item
                    :ref="`dropdown_item_13_${(current || {}).__nodeKey || (current || {}).index}`"
                    :class="`cw-style-padding-left cw-style-padding cw-style-padding-right cw-style-margin-left cw-style-margin cw-style-margin-right cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius cw-css-rule-dropdown_item_13___1df7px01`"
                    @click="dropdown_item_13_click($event, current)"
                    style="
                      --cw-style-padding-left: 6px;
                      --cw-style-padding-right: 6px;
                      --cw-style-margin-left: 4px;
                      --cw-style-margin-right: 4px;
                      --cw-style-border-top-left-radius: 4px;
                      --cw-style-border-top-right-radius: 4px;
                      --cw-style-border-bottom-left-radius: 4px;
                      --cw-style-border-bottom-right-radius: 4px;
                      padding-right: 6px;
                      padding-left: 6px;
                      margin-left: 4px;
                      margin-right: 4px;
                      border-top-left-radius: 4px;
                      border-bottom-left-radius: 4px;
                      border-top-right-radius: 4px;
                      border-bottom-right-radius: 4px;
                    "
                  >
                    <u-text
                      :ref="`text_1603_${(current || {}).__nodeKey || (current || {}).index}`"
                      :class="`cw-style-color`"
                      :text="`关闭左侧标签`"
                      style="--cw-style-color: #53576a; color: #53576a"
                    ></u-text>
                  </u-dropdown-item>
                  <u-dropdown-item
                    :ref="`dropdown_item_14_${(current || {}).__nodeKey || (current || {}).index}`"
                    :class="`cw-style-padding-left cw-style-padding cw-style-padding-right cw-style-margin-left cw-style-margin cw-style-margin-right cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius cw-css-rule-dropdown_item_14___1df7px01`"
                    @click="dropdown_item_14_click($event, current)"
                    style="
                      --cw-style-padding-left: 6px;
                      --cw-style-padding-right: 6px;
                      --cw-style-margin-left: 4px;
                      --cw-style-margin-right: 4px;
                      --cw-style-border-top-left-radius: 4px;
                      --cw-style-border-top-right-radius: 4px;
                      --cw-style-border-bottom-left-radius: 4px;
                      --cw-style-border-bottom-right-radius: 4px;
                      padding-right: 6px;
                      padding-left: 6px;
                      margin-left: 4px;
                      margin-right: 4px;
                      border-top-left-radius: 4px;
                      border-bottom-left-radius: 4px;
                      border-top-right-radius: 4px;
                      border-bottom-right-radius: 4px;
                    "
                  >
                    <u-text
                      :ref="`text_1604_${(current || {}).__nodeKey || (current || {}).index}`"
                      :class="`cw-style-color`"
                      :text="`关闭右侧标签`"
                      style="--cw-style-color: #53576a; color: #53576a"
                    ></u-text>
                  </u-dropdown-item>
                </u-dropdown>
              </template>
            </gx-tab-bar-view>
            <u-router-view
              :ref="`router_view1`"
              :disableKeepAlive="false"
            ></u-router-view>
            <u-anchor
              :ref="`anchor_1`"
              :label="`qian1`"
            ></u-anchor>
          </u-multi-layout-item>
        </u-multi-layout>
      </u-multi-layout-item>
    </u-multi-layout>
  </l-root>
</template>
<script>
export default {
  name: '/dashboard',
  mixins: [
    window.$mixins.enhancedCss(`:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___] {
  background-color: #fff;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary] [class*=u-dropdown_icon___], :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary_secondary] [class*=u-dropdown_icon___], :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=normal] [class*=u-dropdown_icon___] {
  display: none;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary] {
  background-color: #fff;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary]:hover, :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary]._hover {
  background-color: #EFF1F2;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary]:active, :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___][type=primary]._active {
  background-color: #EFF1F2;
}
:where(.cw-css-rule-dropdown_4___1df7px01) [class*=u-dropdown_icon___] {
}
:where(.cw-css-rule-dropdown_4___1df7px01) [class*=u-dropdown_popper___] {
  min-width: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]:hover, :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]._hover {
  background-color: #EFF1F2;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]:active, :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]._active {
  background-color: #EFF1F2;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]:focus, :where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___]._focus {
  background-color: #EFF1F2;
}
:where(.cw-css-rule-dropdown_4___1df7px01)[class*=u-dropdown___] [class*=u-dropdown_icon___] {
}
:where(.cw-css-rule-dropdown_4___1df7px01) [class*=u-dropdown_title___] {
}
:where(.cw-css-rule-text_71___1df7px01)[class*=u-text___]:hover, :where(.cw-css-rule-text_71___1df7px01)[class*=u-text___]._hover {
  color: #0fa485;
}
:where(.cw-css-rule-dropdown_item_12___1df7px01)[class*=u-dropdown_item___]:hover, :where(.cw-css-rule-dropdown_item_12___1df7px01)[class*=u-dropdown_item___]._hover {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #f6f6f6;
}
:where(.cw-css-rule-dropdown_item_13___1df7px01)[class*=u-dropdown_item___]:hover, :where(.cw-css-rule-dropdown_item_13___1df7px01)[class*=u-dropdown_item___]._hover {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #f6f6f6;
}
:where(.cw-css-rule-dropdown_item_14___1df7px01)[class*=u-dropdown_item___]:hover, :where(.cw-css-rule-dropdown_item_14___1df7px01)[class*=u-dropdown_item___]._hover {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #f6f6f6;
}
`),
    window.$mixins.dataSourceUtils(),
  ],
  data() {
    return {
      variable1: window.$genInitFromSchema('nasl.collection.List<app.structures.Structure3>', undefined),
      variable2: window.$genInitFromSchema('nasl.collection.List<nasl.core.String>', undefined),
      tableView_3_state_page: undefined,
      tableView_3_state_size: undefined,
      tableView_3_state_sort: undefined,
      tableView_3_state_order: undefined,
    };
  },
  meta: {
    title: '总览页',
    crumb: undefined,
    crumbI18n: undefined,
    first: 'index',
    auth: undefined,
  },
  methods: {
    async dashboard_created(event) {
      await this.dashboard_created_created(event);
    },

    async dashboard_created_created(event) {
      await (async () => {
        console.log(this.$eventBus);
      })();
    },

    async dashboard_mounted(event) {
      await this.dashboard_mounted_mounted(event);
    },

    async dashboard_mounted_mounted(event) {
      await (async () => {
        this.$eventBus.$on('tab-update', (data) => {
          console.log(data, 'tab-update');
          this.$refs['gx_tab_bar_view_4'].updateTabCache(data);
        });

        this.$eventBus.$on('tab-close', (data) => {
          console.log(data, 'tab-close');
          this.$refs['gx_tab_bar_view_4'].removeTabByFullPath(data);
        });
      })();
    },

    async gx_tab_bar_view_4_tabchange(event) {
      await this.gx_tab_bar_view_4_tabChange_tabchange(event);
    },

    async gx_tab_bar_view_4_tabChange_tabchange(event) {
      await (async () => {
        this.variable2 = event.paths;
      })();
    },

    async gx_tab_bar_view_4_activechange(event) {
      await this.gx_tab_bar_view_4_activeChange_activechange(event);
    },

    async gx_tab_bar_view_4_activeChange_activechange(event) {
      await (async () => {
        console.log(event, 'devn');
      })();
    },

    async dropdown_item1_click(event) {
      await this.dropdown_item1_click_logout(event);
    },

    async dropdown_item1_click_logout(event) {
      await window.$global.logout({});
    },

    async dropdown_item_12_click(event, current) {
      await this.dropdown_item_12_click_click(event, current);
    },

    async dropdown_item_12_click_click(event, current) {
      await (this.$refs && this.$refs[`gx_tab_bar_view_4`] && this.$refs[`gx_tab_bar_view_4`].removeTabByIndex && this.$refs[`gx_tab_bar_view_4`].removeTabByIndex((current || {}).index));
      /* 判断点“关闭其它标签”的是否为选项卡实际选中的 */
    },

    async dropdown_item_13_click(event, current) {
      await this.dropdown_item_13_click_click(event, current);
    },

    async dropdown_item_13_click_click(event, current) {
      await (this.$refs && this.$refs[`gx_tab_bar_view_4`] && this.$refs[`gx_tab_bar_view_4`].removeTabsBefore && this.$refs[`gx_tab_bar_view_4`].removeTabsBefore((current || {}).index));
    },

    async dropdown_item_14_click(event, current) {
      await this.dropdown_item_14_click_click(event, current);
    },

    async dropdown_item_14_click_click(event, current) {
      await (this.$refs && this.$refs[`gx_tab_bar_view_4`] && this.$refs[`gx_tab_bar_view_4`].removeTabsAfter && this.$refs[`gx_tab_bar_view_4`].removeTabsAfter((current || {}).index));
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.dashboard_created();
  },

  async mounted() {
    await this.dashboard_mounted();
  },
};
</script>
