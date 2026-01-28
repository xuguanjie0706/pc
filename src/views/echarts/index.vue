<template>
  <u-linear-layout
    :ref="`uLinearLayout1`"
    :class="`cw-style-height`"
    :type="`root`"
    :gap="`none`"
    style="--cw-style-height: 100%; height: 100%; --custom-start: auto; min-height: 200px"
  >
    <u-router-view :ref="`router_view1`"></u-router-view>
    <gx-trans-view
      :ref="`gx_trans_view_1`"
      :baseWidth="`1920`"
    >
      <cw-echart-basic-view
        :ref="`cw_echart_basic_view_1`"
        :options="info"
      ></cw-echart-basic-view>
      <u-text
        :ref="`text_1`"
        :text="`普通文本`"
        v-tooltip="`faffafda`"
      ></u-text>
      <u-anchor
        :ref="`anchor_1`"
        :class="`cw-style-width cw-style-height`"
        :label="`myChart`"
        style="--cw-style-width: 400px; --cw-style-height: 400px; width: 400px; height: 400px"
      ></u-anchor>
    </gx-trans-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/echarts',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      info: undefined,
    };
  },
  meta: {
    title: '锚点实现echarts',
    crumb: undefined,
    crumbI18n: undefined,
    first: undefined,
    auth: undefined,
  },
  methods: {
    async echarts_mounted(event) {
      await this.echarts_mounted_mounted(event);
    },

    async echarts_mounted_mounted(event) {
      await (async () => {
        //页面缩放
        // document.body.style.zoom = "0.8";

        function loadScript(src) {
          const script = document.createElement('script');
          script.src = src;
          const res = new Promise((res, rej) => {
            script.onload = res;
            script.onerror = rej;
          });
          document.head.appendChild(script);
          return res;
        }

        // 等待ECharts加载完成
        const src = 'https://unpkg.com/echarts@5.3.2/dist/echarts.min.js';
        await loadScript(src);
        // const src2 = 'https://cdn.jsdelivr.net/npm/echarts-liquidfill@3.1.0/dist/echarts-liquidfill.min.js';
        // await loadScript(src2);

        // 初始化图表
        var chartDom1 = document.getElementById('myChart');
        var myChart1 = echarts.init(chartDom1);

        // 坐标修正函数 - 处理由于缩放/滚动导致的坐标偏移
        function getCorrectPosition(event, chartDom) {
          // 获取图表容器的DOM信息
          const rect = chartDom.getBoundingClientRect();
          // 计算缩放比例（处理容器可能的缩放变换）
          const scaleX = chartDom.offsetWidth / rect.width || 1;
          const scaleY = chartDom.offsetHeight / rect.height || 1;

          // 计算修正后的坐标
          return {
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY,
          };
        }

        // 重写图表的鼠标事件处理，添加坐标修正
        myChart1.getZr().on('mousemove', function (event) {
          if (event.event) {
            // 原生鼠标事件
            const correctPos = getCorrectPosition(event.event, myChart1.getZr().dom);
            // 替换事件中的坐标为修正后的坐标
            event.offsetX = correctPos.x;
            event.offsetY = correctPos.y;
          }
        });
        var option1 = {
          // graphic: {
          //   // 使用 transform 补偿缩放
          //   transform: [{
          //     type: 'scale',
          //     x: 0.410938,
          //     y: 0.410938
          //   }]
          // },
          title: {
            text: 'Stacked Line',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        };

        myChart1.setOption(option1);

        this.info = option1;

        const myChart2 = this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance;

        console.log(myChart2.getZr());
        myChart2.getZr().on('mousemove', function (event) {
          if (event.event) {
            // 原生鼠标事件
            const correctPos = getCorrectPosition(event.event, myChart2.getZr().dom);
            // 替换事件中的坐标为修正后的坐标
            event.offsetX = correctPos.x;
            event.offsetY = correctPos.y;
          }
        });

        myChart2.setOption(this.info);

        // // 监听窗口大小变化，重新调整图表尺寸
        // window.addEventListener('resize', function() {
        //     myChart1.resize();
        // });
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async mounted() {
    await this.echarts_mounted();
  },
};
</script>
