const routes = [
    {
        path: "/print",
        component: () => import("../views/print/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/antd",
        component: () => import("../views/antd/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/trans",
        component: () => import("../views/trans/index.vue"),
        meta: {
            title: "放缩组件",
        },
    },
    {
        path: "/pdftest",
        component: () => import("../views/pdftest/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/customInput",
        component: () => import("../views/customInput/index.vue"),
        meta: {
            title: "字段插入",
        },
    },
    {
        path: "/details",
        component: () => import("../views/details/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/calendar",
        component: () => import("../views/calendar/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/abbreviatedlist",
        component: () => import("../views/abbreviatedlist/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/relationmapview",
        component: () => import("../views/relationmapview/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/transEcharts",
        component: () => import("../views/transEcharts/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/rightmouse",
        component: () => import("../views/rightmouse/index.vue"),
        meta: {
            title: "右键",
        },
    },
    {
        path: "/componentExtraFunction",
        component: () => import("../views/componentExtraFunction/index.vue"),
        meta: {
            title: "组件额外功能",
        },
    },
    {
        path: "/promiseAll",
        component: () => import("../views/promiseAll/index.vue"),
        meta: {
            title: "异步操作",
        },
    },
    {
        path: "/chat",
        component: () => import("../views/chat/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/tree",
        component: () => import("../views/tree/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/swiper",
        component: () => import("../views/swiper/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/input",
        component: () => import("../views/input/index.vue"),
        meta: {
            title: "输入框",
        },
    },
    {
        path: "/pageScroll",
        component: () => import("../views/pageScroll/index.vue"),
        meta: {
            title: "页面滚动",
        },
    },
    {
        path: "/radio",
        component: () => import("../views/radio/index.vue"),
        meta: {
            title: "点击取消",
        },
    },
    {
        path: "/fetch",
        component: () => import("../views/fetch/index.vue"),
        meta: {
            title: "代码块网络请求",
        },
    },
    {
        path: "/gis",
        component: () => import("../views/gis/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "/dragview",
        component: () => import("../views/dragview/index.vue"),
        meta: {
            title: "点击拖拽案例",
        },
    },
    {
        path: "/echarts",
        component: () => import("../views/echarts/index.vue"),
        meta: {
            title: "锚点实现echarts",
        },
    },
    {
        path: "/dashboard",
        component: () => import("../views/dashboard/index.vue"),
        meta: {
            title: "总览页",
            first: "index",
        },
        children: [
            {
                path: "index",
                component: () =>
                    import("../views/dashboard/views/index/index.vue"),
                meta: {
                    title: "",
                },
            },
            {
                path: "",
                redirect: "index",
            },
            {
                path: "five",
                component: () =>
                    import("../views/dashboard/views/five/index.vue"),
                meta: {
                    title: "",
                },
            },
            {
                path: "four",
                component: () =>
                    import("../views/dashboard/views/four/index.vue"),
                meta: {
                    title: "",
                },
            },
            {
                path: "info",
                component: () =>
                    import("../views/dashboard/views/info/index.vue"),
                meta: {
                    title: "",
                },
            },
            {
                path: "ziy",
                component: () =>
                    import("../views/dashboard/views/ziy/index.vue"),
                meta: {
                    title: "",
                },
                children: [
                    {
                        path: "third",
                        component: () =>
                            import(
                                "../views/dashboard/views/ziy/views/third/index.vue"
                            ),
                        meta: {
                            title: "",
                        },
                    },
                ],
            },
            {
                path: "ziyingyong",
                component: () =>
                    import("../views/dashboard/views/ziyingyong/index.vue"),
                meta: {
                    title: "",
                },
                children: [
                    {
                        path: "a",
                        component: () =>
                            import(
                                "../views/dashboard/views/ziyingyong/views/a/index.vue"
                            ),
                        meta: {
                            title: "",
                        },
                    },
                    {
                        path: "third",
                        component: () =>
                            import(
                                "../views/dashboard/views/ziyingyong/views/third/index.vue"
                            ),
                        meta: {
                            title: "",
                        },
                    },
                ],
            },
            {
                path: "first",
                component: () =>
                    import("../views/dashboard/views/first/index.vue"),
                meta: {
                    title: "xgj",
                },
            },
            {
                path: "second",
                component: () =>
                    import("../views/dashboard/views/second/index.vue"),
                meta: {
                    title: "lxy",
                },
            },
        ],
    },
    {
        path: "/",
        redirect: "/dashboard",
    },
    {
        path: "/notFound",
        component: () => import("../views/notFound/index.vue"),
        meta: {
            title: "找不到页面",
        },
    },
    {
        path: "/index",
        component: () => import("../views/index/index.vue"),
        meta: {
            title: "首页",
        },
    },
    {
        path: "/test1",
        component: () => import("../views/test1/index.vue"),
        meta: {
            title: "",
        },
    },
    {
        path: "*",
        redirect: "/notFound",
    },
];
export { routes };
