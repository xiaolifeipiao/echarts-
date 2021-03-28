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
                data: ["印尼", "美国", "印度", "中国", "世界人口(万)"],
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
                data: [23489, 29034, 104970, 131744, 630230],
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
                yAxisIndex: 0,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [19325, 23438, 31000, 121594, 134141, 681807],
            },
        ],
    };
    myChart.setOption(option);
})();
