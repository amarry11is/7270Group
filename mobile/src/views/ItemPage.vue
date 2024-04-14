<template>
    <ion-page>
        <ion-card>
            <img :alt="item.name" :src="item.image" />
            <ion-card-header>
                <ion-card-title>{{ item.name }}</ion-card-title>
                <ion-card-subtitle>{{ item.price }}</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                {{ item.desc }}
            </ion-card-content>

            <ion-button v-if="!selected" @click="addToCart()">Add To Cart</ion-button>
            <ion-button v-if="selected" @click="removeFromCart()">Remove From Cart</ion-button>
        </ion-card>
    </ion-page>
</template>

<script setup>
import { IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { ref, onMounted, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const item = ref({ id: "", name: "", image: "", desc: "", price: 0 });
const cartItems = ref(inject('cart').value);

const selected = computed(() => {
    return cartItems.value.includes(route.params.id);
});

const addToCart = function () {
    cartItems.value.push(route.params.id);
}

const removeFromCart = function () {

    const index = cartItems.value.indexOf(route.params.id);
    if (index > -1) { // only splice array when item is found
        cartItems.value.splice(index, 1); // 2nd parameter means remove one item only
    }
}
onMounted(async () => {

    const response = await fetch("https://api.npoint.io/5529943ab6c290922ca9");

    if (response.ok) {
        const fashionItems = await response.json();

        item.value = fashionItems.find(function (item) {
            return item.id == route.params.id;
        });
    }
});
</script>