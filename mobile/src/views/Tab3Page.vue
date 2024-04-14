<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Charts</ion-card-title>
        <ion-card-subtitle>Total Price: $ {{ totalPrice }}</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-list>
          <ion-item v-for="item in selectedItems" :key="item.id">
            <ion-thumbnail slot="start">
              <img :alt="item.name" :src="item.image" />
            </ion-thumbnail>
            <ion-label>{{ item.name }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
    <ion-textarea label="Comments" placeholder="Type something here" v-model="comments"></ion-textarea>
    <ion-button @click="analyse()">Analyse</ion-button>
  </ion-page>
</template>

<script setup>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail, IonLabel, IonList, IonItem, IonButton, IonTextarea } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { ref, onMounted, inject, computed } from "vue";
import { TextAnalysisClient, AzureKeyCredential } from "@azure/ai-language-text";

const client = new TextAnalysisClient("https://comp7270lab10.cognitiveservices.azure.com/", new AzureKeyCredential("7b6ff05bcdf94f989022397076781f7b"));
const comments = ref("");
const items = ref([]);
const cartItems = ref(inject('cart').value);
const analyse = async function () {
  const documents = comments.value.split(".");

  const results = await client.analyze("SentimentAnalysis", documents);
  const onlySuccessful = results.filter((result) => result.error === undefined);
  alert(JSON.stringify(onlySuccessful));
};
const selectedItems = computed(() => {

  return items.value.filter((item) => {
    return cartItems.value.includes(item.id)
  })

});
const totalPrice = computed(() => {

  var price = 0;

  items.value.forEach((item) => {
    if (cartItems.value.includes(item.id)) {
      price += item.price
    }
  })

  return price;
});
onMounted(async () => {

  var response = await fetch("https://api.npoint.io/5529943ab6c290922ca9");

  if (response.ok) {
    items.value = await response.json();
  }
});
</script>