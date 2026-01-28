<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 2045px; height: 2045px; --custom-start: auto; min-height: 200px"
  >
    <u-navbar-multi
      :ref="`navbar_multi1`"
      style="--navbar-background: #ffffff; --navbar-color: #464f61; --navbar-item-color: #464f61; --navbar-item-color-hover: #464f61; --navbar-item-line-background: #002bec; --navbar-item-color-selected: #002bec; --navbar-divider-line-background: #e5e5e5"
    >
      <template
        #right
        :ref="`template3`"
      >
        <u-multi-layout-item
          :ref="`multi_layout_item1`"
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
              :ref="`template4`"
            >
              <u-dropdown-item
                :ref="`dropdown_item1`"
                @click="dropdown_item1_click($event)"
              >
                <u-text
                  :ref="`text5`"
                  :text="`安全退出`"
                ></u-text>
              </u-dropdown-item>
            </template>
            <template
              #title
              :ref="`template5`"
            >
              <u-linear-layout
                :ref="`linear_layout1`"
                :key="`linear_layout1`"
                :gap="`small`"
                v-if="$global.userInfo"
              >
                <u-image
                  :ref="`image10`"
                  :class="`cw-style-width cw-style-height`"
                  :fit="`cover`"
                  :src="`http://lcpapp-static.nos-eastchina1.126.net/user/cwasset/1755660564084_1db90cf88686447dacbedb3bed552031.png`"
                  style="--cw-style-width: 36px; --cw-style-height: 36px; width: 36px; height: 36px; vertical-align: middle"
                ></u-image>
                <span
                  :ref="`span1`"
                  :class="`cw-style-margin-left cw-style-margin cw-style-margin-right`"
                  style="--cw-style-margin-left: 10px; --cw-style-margin-right: 10px; display: inline-block; vertical-align: top; margin-left: 10px; margin-right: 10px"
                >
                  <u-text
                    :ref="`text41`"
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
        :ref="`template6`"
      >
        <u-multi-layout-item
          :ref="`multi_layout_item2`"
          :class="`cw-style-width`"
          :alignItems="`center`"
          style="--cw-style-width: 350px; width: 350px"
        >
          <u-text
            :ref="`text_1`"
            :class="`cw-style-width cw-style-margin-left cw-style-margin cw-style-margin-bottom cw-style-margin-top cw-style-margin-right cw-style-font-size cw-style-font-weight`"
            :text="`智能开发平台`"
            style="
              --cw-style-width: 255px;
              --cw-style-margin-left: 24px;
              --cw-style-margin-bottom: 16px;
              --cw-style-margin-top: 16px;
              --cw-style-margin-right: 14px;
              --cw-style-font-size: 20px;
              --cw-style-font-weight: bold;
              width: 255px;
              margin-top: 16px;
              margin-left: 24px;
              margin-bottom: 16px;
              margin-right: 14px;
              font-size: 20px;
              font-weight: bold;
              --custom-start: auto;
              line-height: 28px;
            "
          ></u-text>
        </u-multi-layout-item>
      </template>
      <u-navbar-item-multi :ref="`navbar_item_multi1`">
        <u-text
          :ref="`text43`"
          :class="`cw-style-font-weight`"
          :text="`产品`"
          style="--cw-style-font-weight: bold; font-weight: bold"
        ></u-text>
      </u-navbar-item-multi>
      <u-navbar-item-multi :ref="`navbar_item_multi2`">
        <u-text
          :ref="`text44`"
          :class="`cw-style-font-weight`"
          :text="`关于我们`"
          style="--cw-style-font-weight: bold; font-weight: bold"
        ></u-text>
      </u-navbar-item-multi>
    </u-navbar-multi>
    <u-absolute-layout
      :ref="`absolute_layout1`"
      :class="`cw-style-height cw-style-background-color`"
      style="--cw-style-height: 388px; --cw-style-background-color: #141932; height: 388px; background-color: #141932"
    >
      <u-image
        :ref="`image3`"
        :class="`cw-style-width cw-style-height`"
        :src="`/assets/user/cwasset/1755660564094_e0c10efae438414095e39eb74b1ca7a9.png`"
        :fit="`contain`"
        :key="0.846"
        style="
          --cw-style-width: 1440px;
          --cw-style-height: auto;
          z-index: 1;
          left: calc(50% + 1px);
          top: 0px;
          width: 1440px;
          right:;
          bottom: 0px;
          transform: translateX(-50%);
          --constraint-width-auto: 0;
          --constraint-height-auto: 1;
          height: auto;
          --last-width: 100.13908205841446%;
          --last-height: 388px;
          --constraint-y: top-bottom;
          --constraint-x: center;
        "
      ></u-image>
      <u-text
        :ref="`text6`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight cw-style-color`"
        :size="`large`"
        :text="`智能开发平台`"
        :key="0.381"
        style="
          --cw-style-width: 264px;
          --cw-style-height: 44px;
          --cw-style-font-size: 44px;
          --cw-style-font-weight: 600;
          --cw-style-color: #ffffff;
          z-index: 2;
          left: calc(50% - 465px);
          top: 91px;
          color: #ffffff;
          right: unset;
          bottom: unset;
          transform: translateX(-50%);
          width: 264px;
          height: 44px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          --custom-start: auto;
          font-size: 44px;
          font-weight: 600;
          line-height: 44px;
          --constraint-x: center;
          --constraint-y: top;
          --constraint-modified-x: 1;
        "
      ></u-text>
      <u-text
        :ref="`text7`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :size="`large`"
        :text="`低门槛、高上限的全栈应用搭建平台`"
        :key="0.381"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 24px;
          --cw-style-color: #ffffff;
          z-index: 3;
          left: calc(50% - 405px);
          top: 150px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          --custom-start: auto;
          font-size: 24px;
          --constraint-x: center;
          line-height: 32px;
        "
      ></u-text>
      <u-image
        :ref="`image4`"
        :class="`cw-style-width cw-style-height`"
        :src="`/assets/user/cwasset/1755660564099_ebdc7c5d727b45dbb810a53fca6078e7.png`"
        :fit="`contain`"
        :key="0.327"
        style="--cw-style-width: 499px; --cw-style-height:; z-index: 4; left: calc(50% - 347.5px); top: 198px; width: 499px; right:; bottom:; transform: translateX(-50%); --constraint-width-auto: 0; --constraint-height-auto: 0; height:; --last-width: 499px; --last-height:; --constraint-x: center"
      ></u-image>
      <u-button
        :ref="`button1`"
        :class="`cw-style-width cw-style-height cw-style-font-weight cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius`"
        :color="`primary`"
        :text="`免费试用`"
        :key="0.702"
        icon=""
        :display="`inline`"
        style="
          --cw-style-width: 136px;
          --cw-style-height: 44px;
          --cw-style-font-weight: bold;
          --cw-style-border-top-left-radius: 0px;
          --cw-style-border-top-right-radius: 0px;
          --cw-style-border-bottom-left-radius: 0px;
          --cw-style-border-bottom-right-radius: 0px;
          z-index: 5;
          left: calc(50% - 529px);
          top: 255px;
          right:;
          bottom:;
          transform: translateX(-50%);
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          font-weight: bold;
          width: 136px;
          height: 44px;
          --last-width: 136px;
          --last-height: 44px;
          --constraint-y: top;
          --constraint-x: center;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          --button-background-primary: #002bec;
          --button-background-primary-hover: #1a41ee;
          --custom-start: auto;
          display: grid;
          align-items: center;
          --button-background-primary-active: #002bec;
          --button-border-color-primary: #002bec;
        "
      ></u-button>
      <u-button
        :ref="`button3`"
        :class="`cw-style-width cw-style-height cw-style-font-weight cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius`"
        :color="`primary_secondary`"
        :text="`查看详情`"
        :key="0.702"
        icon=""
        :display="`inline`"
        style="
          --cw-style-width: 136px;
          --cw-style-height: 44px;
          --cw-style-font-weight: bold;
          --cw-style-border-top-left-radius: 0px;
          --cw-style-border-top-right-radius: 0px;
          --cw-style-border-bottom-left-radius: 0px;
          --cw-style-border-bottom-right-radius: 0px;
          z-index: 6;
          left: calc(50% - 379px);
          top: 255px;
          right:;
          bottom:;
          transform: translateX(-50%);
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          font-weight: bold;
          width: 136px;
          height: 44px;
          --last-width: 136px;
          --last-height: 44px;
          --constraint-y: top;
          --constraint-x: center;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          --button-background-primary: #002bec;
          --button-background-primary-hover: #1a41ee;
          --custom-start: auto;
          display: grid;
          align-items: center;
          --button-background-primary-secondary: #1f2339;
          --button-background-primary-secondary-hover: #36394d;
          --button-border-color-primary-secondary: #ffffff;
          --button-border-color-primary-secondary-hover: #ffffff;
          --button-border-color-primary-secondary-active: #ffffff;
          --button-color-primary-secondary-active: #ffffff;
          --button-color-primary-secondary-hover: #ffffff;
          --button-color-primary-secondary: #ffffff;
          --button-background-primary-secondary-active: #36394d;
        "
      ></u-button>
    </u-absolute-layout>
    <u-absolute-layout
      :ref="`absolute_layout3`"
      :class="`cw-style-height cw-style-background-color`"
      style="--cw-style-height: 632px; --cw-style-background-color: #ffffff; height: 632px; background-color: #ffffff"
    >
      <u-text
        :ref="`text8`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
        :size="`large`"
        :text="`业务数智化，皆可低代码`"
        :key="0.962"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 32px;
          --cw-style-font-weight: bold;
          z-index: 1;
          left: calc(50% + 3px);
          top: 80px;
          transform: translateX(-50%);
          right:;
          bottom:;
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          --constraint-x: center;
          font-weight: bold;
          --custom-start: auto;
          font-size: 32px;
          line-height: 32px;
        "
      ></u-text>
      <u-absolute-layout
        :ref="`absolute_layout4`"
        :class="`cw-style-width cw-style-height cw-style-background-color cw-style-border-style cw-style-border-color cw-style-border-left-width cw-style-border-width cw-style-border-right-width cw-style-border-top-width cw-style-border-bottom-width`"
        :key="0.45"
        style="
          --cw-style-width: 390px;
          --cw-style-height: 440px;
          --cw-style-background-color: #ffffff;
          --cw-style-border-style: solid;
          --cw-style-border-color: #dcdcdc;
          --cw-style-border-left-width: 1px;
          --cw-style-border-right-width: 1px;
          --cw-style-border-top-width: 1px;
          --cw-style-border-bottom-width: 1px;
          z-index: 2;
          left: calc(50% - 402px);
          top: 150px;
          width: 390px;
          right:;
          bottom:;
          transform: translateX(-50%);
          height: 440px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 390px;
          --last-height: 440px;
          background-color: #ffffff;
          border-color: #dcdcdc;
          border-top-width: 1px;
          border-left-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-style: solid;
          --constraint-x: center;
        "
      >
        <u-image
          :ref="`image5`"
          :class="`cw-style-width cw-style-height`"
          :src="`/assets/user/cwasset/1755660564104_c92a03851e684dfb87e2e03b2417f3b2.png`"
          :fit="`contain`"
          :key="0.772"
          style="--cw-style-width: 390px; --cw-style-height: 265px; z-index: 1; left: 0px; top: 0px; width: 390px; transform:; right:; bottom:; height: 265px; --constraint-width-auto: 0; --constraint-height-auto: 0; --last-width: 390px; --last-height: 265px"
        ></u-image>
        <u-text
          :ref="`text9`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
          :size="`large`"
          :text="`智能编程`"
          :key="0.071"
          style="
            --cw-style-width:;
            --cw-style-height:;
            --cw-style-font-size: 24px;
            --cw-style-font-weight: bold;
            z-index: 2;
            left: calc(50% - 122px);
            top: 289px;
            right:;
            bottom:;
            transform: translateX(-50%);
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            --constraint-x: center;
            width:;
            height:;
            --last-width:;
            --last-height:;
            --custom-start: auto;
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
          "
        ></u-text>
        <u-text
          :ref="`text10`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
          :text="`通过自然语言交互式智能编程，同时利用机器学 习，帮助低代码开发者进一步降低使用门槛、提高应用开发效率`"
          :key="0.197"
          style="
            --cw-style-width: 342px;
            --cw-style-height:;
            --cw-style-font-size: 16px;
            --cw-style-color: #666666;
            z-index: 3;
            left: 24px;
            top: 326px;
            right:;
            bottom:;
            transform:;
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            font-size: 16px;
            width: 342px;
            height:;
            --last-width: 342px;
            --last-height:;
            color: #666666;
          "
        ></u-text>
      </u-absolute-layout>
      <u-absolute-layout
        :ref="`absolute_layout6`"
        :class="`cw-style-width cw-style-height cw-style-background-color cw-style-border-style cw-style-border-color cw-style-border-left-width cw-style-border-width cw-style-border-right-width cw-style-border-top-width cw-style-border-bottom-width`"
        :key="0.45"
        style="
          --cw-style-width: 390px;
          --cw-style-height: 440px;
          --cw-style-background-color: #ffffff;
          --cw-style-border-style: solid;
          --cw-style-border-color: #dcdcdc;
          --cw-style-border-left-width: 1px;
          --cw-style-border-right-width: 1px;
          --cw-style-border-top-width: 1px;
          --cw-style-border-bottom-width: 1px;
          z-index: 3;
          left: calc(50% + 3px);
          top: 150px;
          width: 390px;
          right:;
          bottom:;
          transform: translateX(-50%);
          height: 440px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 390px;
          --last-height: 440px;
          background-color: #ffffff;
          border-color: #dcdcdc;
          border-top-width: 1px;
          border-left-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-style: solid;
          --constraint-x: center;
        "
      >
        <u-image
          :ref="`image6`"
          :class="`cw-style-width cw-style-height`"
          :src="`/assets/user/cwasset/1755660564115_6da91877db85445db1af9b7528131ddd.png`"
          :fit="`contain`"
          :key="0.772"
          style="--cw-style-width: 390px; --cw-style-height: 265px; z-index: 1; left: 0px; top: 0px; width: 390px; transform:; right:; bottom:; height: 265px; --constraint-width-auto: 0; --constraint-height-auto: 0; --last-width: 390px; --last-height: 265px"
        ></u-image>
        <u-text
          :ref="`text12`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
          :size="`large`"
          :text="`智能交互`"
          :key="0.071"
          style="
            --cw-style-width:;
            --cw-style-height:;
            --cw-style-font-size: 24px;
            --cw-style-font-weight: bold;
            z-index: 2;
            left: calc(50% - 122px);
            top: 289px;
            right:;
            bottom:;
            transform: translateX(-50%);
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            --constraint-x: center;
            width:;
            height:;
            --last-width:;
            --last-height:;
            --custom-start: auto;
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
          "
        ></u-text>
        <u-text
          :ref="`text13`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
          :text="`提供智能交互组件，利用自然语言生成代码技术，让用户做到即时智能查询、流畅智能交互、引领智能创新体验`"
          :key="0.197"
          style="
            --cw-style-width: 342px;
            --cw-style-height:;
            --cw-style-font-size: 16px;
            --cw-style-color: #666666;
            z-index: 3;
            left: 24px;
            top: 326px;
            right:;
            bottom:;
            transform:;
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            font-size: 16px;
            width: 342px;
            height:;
            --last-width: 342px;
            --last-height:;
            color: #666666;
          "
        ></u-text>
      </u-absolute-layout>
      <u-absolute-layout
        :ref="`absolute_layout7`"
        :class="`cw-style-width cw-style-height cw-style-background-color cw-style-border-style cw-style-border-color cw-style-border-left-width cw-style-border-width cw-style-border-right-width cw-style-border-top-width cw-style-border-bottom-width`"
        :key="0.45"
        style="
          --cw-style-width: 390px;
          --cw-style-height: 440px;
          --cw-style-background-color: #ffffff;
          --cw-style-border-style: solid;
          --cw-style-border-color: #dcdcdc;
          --cw-style-border-left-width: 1px;
          --cw-style-border-right-width: 1px;
          --cw-style-border-top-width: 1px;
          --cw-style-border-bottom-width: 1px;
          z-index: 4;
          left: calc(50% + 408px);
          top: 150px;
          width: 390px;
          right:;
          bottom:;
          transform: translateX(-50%);
          height: 440px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 390px;
          --last-height: 440px;
          background-color: #ffffff;
          border-color: #dcdcdc;
          border-top-width: 1px;
          border-left-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
          border-style: solid;
          --constraint-x: center;
        "
      >
        <u-image
          :ref="`image7`"
          :class="`cw-style-width cw-style-height`"
          :src="`/assets/user/cwasset/1755660564120_ae5c31b84cbb4158950203dad973e305.png`"
          :fit="`contain`"
          :key="0.772"
          style="--cw-style-width: 390px; --cw-style-height: 265px; z-index: 1; left: 0px; top: 0px; width: 390px; transform:; right:; bottom:; height: 265px; --constraint-width-auto: 0; --constraint-height-auto: 0; --last-width: 390px; --last-height: 265px"
        ></u-image>
        <u-text
          :ref="`text14`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
          :size="`large`"
          :text="`智能D2C`"
          :key="0.071"
          style="
            --cw-style-width:;
            --cw-style-height:;
            --cw-style-font-size: 24px;
            --cw-style-font-weight: bold;
            z-index: 2;
            left: calc(50% - 122px);
            top: 289px;
            right:;
            bottom:;
            transform: translateX(-50%);
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            --constraint-x: center;
            width:;
            height:;
            --last-width:;
            --last-height:;
            --custom-start: auto;
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
          "
        ></u-text>
        <u-text
          :ref="`text15`"
          :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
          :text="`通过深度学习和计算机视觉等技术来分析和理解业务原型稿中的元素，帮助低代码开发者将设计稿快速转换成页面`"
          :key="0.197"
          :style="{}"
          style="
            --cw-style-width: 342px;
            --cw-style-height:;
            --cw-style-font-size: 16px;
            --cw-style-color: #666666;
            z-index: 3;
            left: 24px;
            top: 326px;
            right:;
            bottom:;
            transform:;
            --constraint-width-auto: 0;
            --constraint-height-auto: 0;
            font-size: 16px;
            width: 342px;
            height:;
            --last-width: 342px;
            --last-height:;
            color: #666666;
          "
        ></u-text>
      </u-absolute-layout>
    </u-absolute-layout>
    <u-absolute-layout
      :ref="`absolute_layout2`"
      :class="`cw-style-height cw-style-background-color`"
      style="--cw-style-height: 565px; --cw-style-background-color: #f7f8fa; height: 565px; background-color: #f7f8fa"
    >
      <u-text
        :ref="`text11`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
        :size="`large`"
        :text="`改变企业软件生产方式`"
        :key="0.962"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 32px;
          --cw-style-font-weight: bold;
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-weight: bold;
          --custom-start: auto;
          font-size: 32px;
          line-height: 32px;
          z-index: 1;
          left: calc(50% + 3px);
          top: 80px;
          right:;
          bottom:;
          transform: translateX(-50%);
          --constraint-x: center;
        "
      ></u-text>
      <u-image
        :ref="`image8`"
        :class="`cw-style-width cw-style-height`"
        :src="`/assets/user/cwasset/1755660564120_ba75b086cd8a4956b15967b4c128d972.png`"
        :fit="`contain`"
        :key="0.628"
        style="
          --cw-style-width: 576px;
          --cw-style-height: 316px;
          z-index: 2;
          left: calc(50% - 309px);
          top: 170px;
          width: 576px;
          right:;
          bottom:;
          transform: translateX(-50%);
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          height: 316px;
          --last-width: 576px;
          --last-height: 316px;
          --constraint-x: center;
        "
      ></u-image>
      <u-text
        :ref="`text16`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
        :text="`全环节降低软件开发成本`"
        :key="0.625"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 20px;
          --cw-style-font-weight: bold;
          z-index: 3;
          left: calc(50% + 149px);
          top: 170px;
          font-size: 20px;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          --custom-start: auto;
          line-height: 32px;
          font-weight: bold;
          --constraint-y: top;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text18`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-font-weight`"
        :text="`项目交付周期平均缩短`"
        :key="0.625"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 20px;
          --cw-style-font-weight: bold;
          z-index: 5;
          left: calc(50% + 139px);
          top: 306px;
          font-size: 20px;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          --custom-start: auto;
          line-height: 32px;
          font-weight: bold;
          --constraint-y: top;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text17`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`这是一段文字描述，这是一段文字描述这是一段文字描述，这是一段文字描述，这是一段文字描述这是一段文字描述。`"
        :key="0.625"
        style="
          --cw-style-width: 564px;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 4;
          left: calc(50% + 321px);
          top: 210px;
          font-size: 16px;
          right:;
          bottom:;
          transform: translateX(-50%);
          width: 564px;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 564px;
          --last-height:;
          --custom-start: auto;
          --constraint-y: top;
          --constraint-x: center;
          color: #666666;
          line-height: 28px;
        "
      ></u-text>
      <u-text
        :ref="`text19`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`这是一段文字描述，这是一段文字描述这是一段文字描述，这是一段文字描述，这是一段文字描述这是一段文字描述。`"
        :key="0.625"
        style="
          --cw-style-width: 564px;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 6;
          left: calc(50% + 321px);
          top: 346px;
          font-size: 16px;
          right:;
          bottom:;
          transform: translateX(-50%);
          width: 564px;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 564px;
          --last-height:;
          --custom-start: auto;
          --constraint-y: top;
          --constraint-x: center;
          color: #666666;
          line-height: 28px;
        "
      ></u-text>
      <u-button
        :ref="`button4`"
        :class="`cw-style-width cw-style-height cw-style-font-weight cw-style-border-top-left-radius cw-style-border-radius cw-style-border-top-right-radius cw-style-border-bottom-left-radius cw-style-border-bottom-right-radius`"
        :color="`primary`"
        :text="`查看详情 `"
        :key="0.702"
        icon=""
        :display="`inline`"
        style="
          --cw-style-width: 136px;
          --cw-style-height: 44px;
          --cw-style-font-weight: bold;
          --cw-style-border-top-left-radius: 0px;
          --cw-style-border-top-right-radius: 0px;
          --cw-style-border-bottom-left-radius: 0px;
          --cw-style-border-bottom-right-radius: 0px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          font-weight: bold;
          width: 136px;
          height: 44px;
          --last-width: 136px;
          --last-height: 44px;
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 0px;
          --button-background-primary: #002bec;
          --button-background-primary-hover: #1a41ee;
          --custom-start: auto;
          display: grid;
          align-items: center;
          --button-background-primary-active: #002bec;
          --button-border-color-primary: #002bec;
          z-index: 9;
          left: calc(50% + 107px);
          top: 440px;
          right:;
          bottom:;
          transform: translateX(-50%);
          --constraint-x: center;
        "
      ></u-button>
    </u-absolute-layout>
    <u-absolute-layout
      :ref="`absolute_layout5`"
      :class="`cw-style-height cw-style-background-image`"
      :key="0.425"
      style="--cw-style-height: 400px; --cw-style-background-image: linear-gradient(180deg, #26262a 0%, #0d0c0e 100%); height: 400px; background-image: linear-gradient(180deg, #26262a 0%, #0d0c0e 100%)"
    >
      <u-text
        :ref="`text20`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`热门产品`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #ffffff;
          z-index: 1;
          left: calc(50% - 565px);
          top: 60px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text23`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`关于我们`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #ffffff;
          z-index: 4;
          left: calc(50% - 383px);
          top: 60px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text28`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`资源与文档`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #ffffff;
          z-index: 9;
          left: calc(50% - 191px);
          top: 60px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text33`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`诚邀合作`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #ffffff;
          z-index: 14;
          left: calc(50% - 15px);
          top: 60px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text37`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`管理与支持`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #ffffff;
          z-index: 18;
          left: calc(50% + 177px);
          top: 60px;
          color: #ffffff;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text21`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`智能开发平台`"
        :key="0.793"
        style="
          --cw-style-width: 96px;
          --cw-style-height: 16px;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 2;
          left: calc(50% - 549px);
          top: 100px;
          color: #666666;
          right: unset;
          bottom: unset;
          transform: translateX(-50%);
          width: 96px;
          height: 16px;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
          --constraint-y: top;
          --constraint-modified-x: 1;
        "
      ></u-text>
      <u-text
        :ref="`text24`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`公司简介`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 5;
          left: calc(50% - 383px);
          top: 100px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text29`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`新手帮助`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 10;
          left: calc(50% - 199px);
          top: 100px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text34`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`渠道合作`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 15;
          left: calc(50% - 15px);
          top: 100px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text38`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`控制台`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 19;
          left: calc(50% + 162px);
          top: 100px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text39`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`联系我们`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 20;
          left: calc(50% + 169px);
          top: 130px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text35`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`社区合作`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 16;
          left: calc(50% - 15px);
          top: 130px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text36`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`教育合作`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 17;
          left: calc(50% - 15px);
          top: 160px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text22`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`xx公司版权所有©1997-2026`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 21;
          left: calc(50% + 14.5234375px);
          top: 316px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text40`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`备案号`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 22;
          left: calc(50% + 5px);
          top: 346px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text30`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`产品文档`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 11;
          left: calc(50% - 199px);
          top: 130px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text25`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`媒体报道`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 6;
          left: calc(50% - 383px);
          top: 130px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text31`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`开发者资源`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 12;
          left: calc(50% - 191px);
          top: 160px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text32`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`备案帮助`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 13;
          left: calc(50% - 199px);
          top: 190px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text26`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`荣誉与认证`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 7;
          left: calc(50% - 375px);
          top: 160px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-text
        :ref="`text27`"
        :class="`cw-style-width cw-style-height cw-style-font-size cw-style-color`"
        :text="`友情链接`"
        :key="0.793"
        style="
          --cw-style-width:;
          --cw-style-height:;
          --cw-style-font-size: 16px;
          --cw-style-color: #666666;
          z-index: 8;
          left: calc(50% - 383px);
          top: 190px;
          color: #666666;
          right:;
          bottom:;
          transform: translateX(-50%);
          width:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width:;
          --last-height:;
          font-size: 16px;
          --custom-start: auto;
          line-height: 16px;
          --constraint-x: center;
        "
      ></u-text>
      <u-divider
        :ref="`divider1`"
        :class="`cw-style-width cw-style-height cw-style-border-color`"
        :dashed="`a`"
        :key="0.422"
        style="
          --cw-style-width: 1200px;
          --cw-style-height:;
          --cw-style-border-color: #2b2b2d;
          z-index: 3;
          left: calc(50% + 1px);
          top: 248px;
          width: 1200px;
          transform: translateX(-50%);
          right:;
          bottom:;
          height:;
          --constraint-width-auto: 0;
          --constraint-height-auto: 0;
          --last-width: 1200px;
          --last-height:;
          --constraint-x: center;
          border-color: #2b2b2d;
        "
      ></u-divider>
    </u-absolute-layout>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/index',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '首页',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async dropdown_item1_click(event) {
      await this.dropdown_item1_click_click(event);
    },

    async dropdown_item1_click_click(event) {
      await window.$global.logout({});
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
};
</script>
