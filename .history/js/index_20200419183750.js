// 柱状图模块1
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置项
    var option = {
        color: ["#3398DB"],
        legend: {
            data: ["2011年", "2012年"],
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        // 修改图表大小
        grid: {
            top: "10%",
            right: "0%",
            bottom: "4%",
            left: "0%",
            containLabel: true,
        },
        // 修改x轴的信息
        xAxis: [
            {
                type: "category",
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业",
                ],
                axisTick: {
                    alignWithLabel: true,
                },
                // 设置x轴标签文字样式
                // x轴的文字颜色和大小
                axisLabel: {
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "12",
                },
                //  x轴样式不显示
                axisLine: {
                    show: true,
                    // 如果想要设置单独的线条样式
                    // lineStyle: {
                    //    color: "rgba(255,255,255,.1)",
                    //    width: 1,
                    //    type: "solid"}
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                // y 轴文字标签样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12",
                },
                // y 轴分隔线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.3)",
                    },
                },
                // y轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid",
                    },
                },
            },
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                // 修改柱子宽度
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5,
                },
            },
        ],
    };
    // 实列化
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 柱状图2
(function () {
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
        grid: {
            left: "22%",
            top: "10%",
            bottom: "10%",
            containLabel: false,
        },
        xAxis: {
            // 不显示x轴
            show: false,
        },
        yAxis: [
            {
                type: "category",
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                // 是否反转坐标
                inverse: true,
                //不显示y轴线条
                axisLine: {
                    show: false,
                },
                // 不显示刻度
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: "#fff",
                },
            },
            {
                show: true,
                inverse: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false,
                },
                // 不显示刻度
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff",
                    },
                },
            },
        ],
        series: [
            {
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: [70, 34, 60, 78, 69],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // color可以用函数改变
                    color: function (params) {
                        // console.log(params);
                        return myColor[params.dataIndex];
                    },
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // {c}会自动的解析数据data里面的的数据
                        formatter: "{c}%",
                    },
                },
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [100, 100, 100, 100, 100],
            },
        ],
    };
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 折线图1
(function () {
    var yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            ],
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
            ],
        },
    ];
    var myChart = echarts.init(document.querySelector(".line .chart"));
    const option = {
        // 修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis",
        },
        // 图例组件
        legend: {
            // 如果series的对象有name值可以不用写
            // data: ["新增粉丝", "新增游客"],
            textStyle: {
                color: "#4c9bfd", // 图例文字颜色
            },
            right: "10%", // 距离右边10%
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, //显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true, // 包含刻度文字在内
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        xAxis: {
            type: "category",
            boundaryGap: false, // 去除轴内间距
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            axisTick: {
                show: false, //去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd", //文本颜色
            },
            axisLine: {
                show: false, //去除轴线
            },
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false, // 去除刻度
            },
            axisLabel: {
                color: "#4c9bfd", // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a", // 分割线颜色
                },
            },
        },
        series: [
            {
                name: "新增粉丝",
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                type: "line",
                // 折线修饰为圆滑
                smooth: true,
            },
            {
                name: "新增游客",
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                type: "line",
                smooth: true,
            },
        ],
    };
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // .点击切换效果
    $(".line h2").on("click", "a", function () {
        // console.log($(this).index());
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    });
})();
// 折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: "axis",
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12",
            },
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                    "14",
                    "15",
                    "16",
                    "17",
                    "18",
                    "19",
                    "20",
                    "21",
                    "22",
                    "23",
                    "24",
                    "25",
                    "26",
                    "26",
                    "28",
                    "29",
                    "30",
                ],
                // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)",
                    },
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    },
                },
            },
        ],
        series: [
            {
                name: "播放量",
                type: "line",
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2,
                },
                // stack: "总量",
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    20,
                    60,
                    50,
                    40,
                ],
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2,
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                data: [
                    130,
                    10,
                    20,
                    40,
                    30,
                    40,
                    80,
                    60,
                    20,
                    40,
                    90,
                    40,
                    20,
                    140,
                    30,
                    40,
                    130,
                    20,
                    20,
                    40,
                    80,
                    70,
                    30,
                    40,
                    30,
                    120,
                    20,
                    99,
                    50,
                    20,
                ],
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2,
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)",
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)",
                                },
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)",
                    },
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
        ],
    };
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
//饼图1
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12",
            },
        },
        series: [
            {
                name: "年龄分布",
                type: "pie",
                // 设置饼形图在容器中的位置
                center: ["50%", "50%"],
                //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
                radius: ["40%", "70%"],
                // 不显示标签文字
                label: { show: false },
                // 不显示连接线
                labelLine: { show: false },
                avoidLabelOverlap: false,
                emphasis: {
                    label: {
                        show: true,
                        fontSize: "30",
                        fontWeight: "bold",
                    },
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" },
                ],
            },
        ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
