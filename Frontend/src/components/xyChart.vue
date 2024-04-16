<script setup>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { onMounted, defineProps } from "vue";

const props = defineProps({
  data: Array,
});

onMounted(async () => {
  let root = am5.Root.new(this.$refs.chartdiv);

  root.setThemes([am5themes_Animated.new(root)]);

  let chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      layout: root.verticalLayout
    })
  );

  var url = '/api/surveys/stats';

  var response = await fetch(url);
  var json = await response.json();
  
  // Create Y-axis
  let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );

  // Create X-Axis
  let xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      categoryField: "category"
    })
  );
  xAxis.data.setAll(eval(JSON.stringify(json)));

  // Create series
  let series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "total",
      categoryXField: "_id"
    })
  );
  series.data.setAll(eval(JSON.stringify(json)));
});

// export default {
//   name: 'xyChart',
//   mounted() {
//     let root = am5.Root.new(this.$refs.chartdiv);

//     root.setThemes([am5themes_Animated.new(root)]);

//     let chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panY: false,
//         layout: root.verticalLayout
//       })
//     );

//     // Create Y-axis
//     let yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {})
//       })
//     );

//     // Create X-Axis
//     let xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         renderer: am5xy.AxisRendererX.new(root, {}),
//         categoryField: "category"
//       })
//     );
//     xAxis.data.setAll(eval(JSON.stringify(props.data)));

//     // Create series
//     let series = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         name: "Series",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "total",
//         categoryXField: "_id"
//       })
//     );
//     series.data.setAll(eval(JSON.stringify(props.data)));
//   },

//   beforeUnmount() {
//     if (this.root) {
//       this.root.dispose();
//     }
//   }
// }

</script>

<template>
  <div class="xyChart" ref="chartdiv"></div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}
</style>