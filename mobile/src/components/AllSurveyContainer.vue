<template>
  <div>
    <ion-card>
      <ion-row>
        <ion-col size="9">
          <ion-input type="text" placeholder="Enter search keyword" v-model="inputText"
            @ionChange="handleInputChange"></ion-input>
        </ion-col>
        <ion-col size="3">
          <ion-button @click="search" expand="block">Search</ion-button>
        </ion-col>
      </ion-row>
    </ion-card>
  </div>
  <ion-card v-for="item in items" :key="item.id">
    <ion-card-header class="col">
      <ion-card-title>{{ item.name }}</ion-card-title>
      <ion-card-subtitle>$ {{ item.price }}</ion-card-subtitle>
    </ion-card-header>
    <ion-button @click="delete_survey()">Delete</ion-button>
    <ion-button @click="modify_survey()">Modify</ion-button>
  </ion-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { IonCard, IonRow, IonCol, IonInput, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const delete_survey = async function () {

};

const modify_survey = async function () {

};

const items = ref([{ id: "", name: "", image: "", desc: "", price: 0 }]);
const router = useRouter();

const navigateWithId = function (id) {
  router.push('/item/' + id)
};

onMounted(async () => {

  const response = await fetch("https://api.npoint.io/5529943ab6c290922ca9");

  if (response.ok) {
    const fashionItems = await response.json();

    items.value = fashionItems.filter(function (item) {
      return item;
    })
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
