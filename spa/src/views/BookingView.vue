<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from "vue-router";
import { differenceInDays } from 'date-fns'

const route = useRoute();

const booking = ref({
    email: '',
    numTickets: 1,
    payment: 'Credit Card',
    team: '',
    superhero: '',
    terms: false
});

const submitBooking = async function () {
    var url = '/api/bookings';
    var method = 'POST';

    if (route.name == 'update-booking') {
        url = url + '/' + booking.value._id;
        method = 'PUT';
    }

    // submit the booking to the backend
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking.value)
    });
    // convert the response to json
    const json = await response.json();
    // log the json
    console.log(json);
    // alert the user
    alert(JSON.stringify(json));
};

// Use computed property to get the superheroes
const superheroes = computed(() => {
    if (booking.value.team == 'Avengers') {
        return ["Captain America", "Iron Man", "Thor", "Hulk", "Black Widow", "Hawkeye"];
    } else if (booking.value.team == "JLA") {
        return ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];
    } else {
        return [];
    }
});

onMounted(async () => {
    // if there is an id in the route
    if (route.params.id) {
        await getBooking();
    }

    watch(() => booking.value.team, (newValue) => {
        // if the new value is not empty
        if (newValue) {
            booking.value.superhero = superheroes.value[0];
        } else {
            booking.value.superhero = "";
        }
    });
});

// a function to get the booking from the backend
const getBooking = async function () {
    // get the booking from the backend
    const response = await fetch('/api/bookings/' + route.params.id);
    // convert the response to json
    const json = await response.json();
    // log the json
    console.log(json);
    // set the booking
    booking.value = json;
}
</script>

<template>
    <main>
        <form class="container my-5" @submit.prevent="submitBooking" v-if="route.name != 'view-booking'">
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" v-model="booking.email" required>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Number of Tickets</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputPassword3" v-model="booking.numTickets" min="1"
                        max="4">
                </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="booking.payment" id="gridRadios1"
                            value="Credit Card" checked>
                        <label class="form-check-label" for="gridRadios1">
                            Pay with Credit Card
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" v-model="booking.payment" id="gridRadios2"
                            value="Paypal">
                        <label class="form-check-label" for="gridRadios2">
                            Pay with Paypal
                        </label>
                    </div>
                    <div class="form-check disabled">
                        <input class="form-check-input" type="radio" v-model="booking.payment" id="gridRadios3"
                            value="Octopus" disabled>
                        <label class="form-check-label" for="gridRadios3">
                            Pay with Octopus
                        </label>
                    </div>
                </div>
            </fieldset>

            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Favourite Team</label>
                <select class="form-select" aria-label="Default select example" v-model="booking.team">
                    <option value="" selected>Open this select menu</option>
                    <option value="Avengers">Avengers</option>
                    <option value="JLA">Justice League</option>
                </select>
            </div>
            <div class="row mb-3">
                <label class="col-sm-2 col-form-label">Favourite Hero</label>
                <select class="form-select" aria-label="Default select example" v-model="booking.superhero"
                    :disabled="!booking.team">
                    <option v-for="superhero in superheroes" :key="superhero" :value="superhero"> {{ superhero }}
                    </option>
                </select>
            </div>
            <div class="row mb-3">
                <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="booking.terms">
                        <label class="form-check-label" for="gridCheck1">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Buy Tickets</button>
        </form>
        <div v-if="route.name == 'view-booking'">
            <h1>{{ booking.email }}</h1>
            <p>Number of Tickets: {{ booking.numTickets }}</p>
            <p>Payment Method: {{ booking.payment }}</p>
            <p>Favourite Team: {{ booking.team }}</p>
            <p>Favourite Hero: {{ booking.superhero }}</p>
            <p>Terms and Conditions: {{ booking.terms }}</p>
            <p>Last Modified: {{ differenceInDays(new Date(), new Date(booking.modified_at)) }} ago.</p>
        </div>

    </main>
</template>