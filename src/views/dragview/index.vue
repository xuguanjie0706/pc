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
      :class="`cw-style-width cw-style-height`"
      :label="`draggable`"
      style="--cw-style-width: 100px; --cw-style-height: 100px; width: 100px; height: 100px; position: fixed; left: 0px; top: 31.9921875px"
    >
      <u-text
        :ref="`text_2`"
        :text="`点我移动`"
      ></u-text>
    </u-anchor>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/dragview',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {};
  },
  meta: {
    title: '点击拖拽案例',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async dragview_mounted(event) {
      await this.dragview_mounted_mounted(event);
    },

    async dragview_mounted_mounted(event) {
      await (async () => {
        var dragEl = document.getElementById('draggable');
        document.querySelector('#draggable');
        var dragging = false;
        var offsetX = 0,
          offsetY = 0;
        var startX = 0,
          startY = 0;

        dragEl.addEventListener('mousedown', function (e) {
          // 只响应鼠标左键
          if (e.button !== 0) return;
          dragging = true;
          // 记录鼠标在元素内的偏移
          offsetX = e.clientX - dragEl.offsetLeft;
          offsetY = e.clientY - dragEl.offsetTop;
          // 记录初始位置
          startX = dragEl.offsetLeft;
          startY = dragEl.offsetTop;
          // 防止选中文字
          document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', function (e) {
          if (!dragging) return;
          // 计算新的位置
          var newLeft = e.clientX - offsetX;
          var newTop = e.clientY - offsetY;

          // 边界检测
          var minLeft = 0;
          var minTop = 0;
          var maxLeft = document.documentElement.clientWidth - dragEl.offsetWidth;
          var maxTop = document.documentElement.clientHeight - dragEl.offsetHeight;

          newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
          newTop = Math.max(minTop, Math.min(newTop, maxTop));

          dragEl.style.left = newLeft + 'px';
          dragEl.style.top = newTop + 'px';
        });

        document.addEventListener('mouseup', function (e) {
          if (dragging) {
            dragging = false;
            document.body.style.userSelect = '';
          }
        });

        // 防止点击时元素跳动
        dragEl.addEventListener('click', function (e) {
          // 不做任何位置变动
        });
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.dragview_mounted();
  },
};
</script>
