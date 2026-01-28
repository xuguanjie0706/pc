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
      @resize="gx_trans_view_1_resize($event)"
    >
      <cw-echart-basic-view
        :ref="`cw_echart_basic_view_1`"
        :options="variable1"
      ></cw-echart-basic-view>
    </gx-trans-view>
  </u-linear-layout>
</template>
<script>
export default {
  name: '/transEcharts',
  mixins: [window.$mixins.dataSourceUtils()],
  data() {
    return {
      variable1: undefined,
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
    async transEcharts_created(event) {
      await this.transEcharts_created_created(event);
    },

    async transEcharts_created_created(event) {
      await (async () => {
        this.variable1 = {
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
            position: function (point, params, dom, rect, size) {
              // 获取页面当前缩放比例（兼容不同浏览器）
              const zoom = 1.2;

              // 修正 x、y 坐标（除以缩放比例，还原到原始尺寸位置）
              const x = point[0] / zoom;
              const y = point[1] / zoom;

              // 返回修正后的位置（可根据需要微调偏移量）
              return [x + 10, y - 10];
            },
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
      })();
    },

    async transEcharts_mounted(event) {
      await this.transEcharts_mounted_mounted(event);
    },

    async transEcharts_mounted_mounted(event) {
      await (async () => {
        // console.log(123)
        function getCorrectPosition(event, chartDom) {
          // 获取图表容器的DOM信息
          const rect = chartDom.getBoundingClientRect();
          // 计算缩放比例（处理容器可能的缩放变换）
          const scaleX = chartDom.offsetWidth / rect.width || 1;
          const scaleY = chartDom.offsetHeight / rect.height || 1;

          return {
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY,
          };
        }

        const charts = this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance;
        const zr = this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance.getZr();
        zr.on('mousemove', (event) => {
          // console.log(123,this.$refs['cw_echart_basic_view_1'].$el)
          if (event.event) {
            // 原生鼠标事件
            const correctPos = getCorrectPosition(event.event, zr.dom);
            // 替换事件中的坐标为修正后的坐标
            event.offsetX = correctPos.x;
            event.offsetY = correctPos.y;
          }
        });

        var that = this;

        function handleZoomResize() {
          console.log(123);
          // 关键：重新设置容器尺寸（触发 ECharts 重计算）
          charts.resize();
          charts.setOption(that.variable1);
        }

        // 监听页面缩放事件（针对不同浏览器）
        window.addEventListener('resize', handleZoomResize); // 窗口缩放
        window.addEventListener('zoom', handleZoomResize); // 页面缩放（部分浏览器支持）
      })();
    },

    async gx_trans_view_1_resize(event) {
      await this.gx_trans_view_1_resize_resize(event);
    },

    async gx_trans_view_1_resize_resize(event) {
      await (async () => {
        // console.log(123)
        //  function getCorrectPosition(event, chartDom) {
        //           // 获取图表容器的DOM信息
        //           const rect = chartDom.getBoundingClientRect();
        //           // 计算缩放比例（处理容器可能的缩放变换）
        //           const scaleX = chartDom.offsetWidth / rect.width || 1;
        //           const scaleY = chartDom.offsetHeight / rect.height || 1;
        //           // 计算修正后的坐标
        //           return {
        //               x: (event.clientX - rect.left) * scaleX,
        //               y: (event.clientY - rect.top) * scaleY
        //           };
        //       }
        // this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance.getZr().on('mousemove', (event)=> {
        //         console.log(123,this.$refs['cw_echart_basic_view_1'].$el)
        //           if (event.event) { // 原生鼠标事件
        //               const correctPos = getCorrectPosition(event.event, this.$refs['cw_echart_basic_view_1'].$children[0].$el);
        //               // 替换事件中的坐标为修正后的坐标
        //               event.offsetX = correctPos.x;
        //               event.offsetY = correctPos.y;
        //           }
        //       });
        //     //   this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance.setOption(this.variable1)
        //         this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance.resize();
        // console.log(this.$refs['cw_echart_basic_view_1'].$children[0].chartInstance.resize)
      })();
    },

    onSyncState(elem, key, val) {
      this[`${elem}_state_${key}`] = val;
    },
  },
  async created() {
    await this.transEcharts_created();
  },

  async mounted() {
    await this.transEcharts_mounted();
  },
};
</script>
