<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Charts</ion-card-title>
      </ion-card-header>
    </ion-card>
    <XYChartsContainer />
  </ion-page>
</template>

<script setup>
import { IonPage, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import XYChartsContainer from '@/components/XYChartsContainer.vue';
import { ref, onMounted } from "vue";
const items = ref([]);

onMounted(async () => {

  // var response = await fetch("https://api.npoint.io/5529943ab6c290922ca9");

  // if (response.ok) {
  //   items.value = await response.json();
  // }
});
</script>