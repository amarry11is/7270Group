<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Charts</ion-card-title>
      </ion-card-header>
      <ion-card-content>
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script setup>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { ref, onMounted } from "vue";
import { am5 } from "@amcharts/amcharts5";
import { am5xy } from "@amcharts/amcharts5/xy";
const items = ref([]);

let root = am5.Root.new("chartdiv");
let chart = root.container.children.push(
  am5xy.XYChart.new(root, {})
);

let yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);

let xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
    categoryField: "category"
  })
);
xAxis.data.setAll([{
  category: "Research"
}, {
  category: "Marketing"
}, {
  category: "Sales"
}];


onMounted(async () => {

  var response = await fetch("https://api.npoint.io/5529943ab6c290922ca9");

  if (response.ok) {
    items.value = await response.json();
  }
});
</script>