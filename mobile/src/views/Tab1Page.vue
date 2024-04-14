<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Survey</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Add Survey</ion-title>
        </ion-toolbar>
      </ion-header>

      <AddSurveyContainer />
    </ion-content>
  </ion-page>
</template>

<script setup >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import AddSurveyContainer from '@/components/AddSurveyContainer.vue';
</script>
