<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router";
import { differenceInDays } from 'date-fns'

const route = useRoute();

const survey = ref({
    email: '',
    categories: '',
    budget: '',
    purpose: '',
    terms: false
});

const submitSurvey = async function () {
    var url = '/api/surveys';
    var method = 'POST';

    if (route.name == 'update-survey') {
        url = url + '/' + survey.value._id;
        method = 'PUT';
    }

    // submit the survey to the backend
    const surveyResponse = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(survey.value)
    });
    // convert the response to json
    var surveyJson = await surveyResponse.json();
    console.log(surveyJson);
    // show the survey result charts
    showStat();
};

const showStat = async function () {
    var url = '/api/surveys/stats';

    var response = await fetch(url);
    var json = await response.json();
    console.log(json);
    statJson.value = json;
    options.value = {
        labels: json.map((item) => item._id),
        title: { text: props.purpose || "All Purposes" }
    };
    series.value = json.map((item) => item.total);
};

// set the budgets
const budgets = ["below$2999", "$3000-$5999", "$6000-$8999", "$9000-$11999", "$12000-$14999", "above $15000"];
// set the purposes
const purposes = ["Study", "Game", "AI", "Bussiness", "Others"];

// a function to get the survey from the backend
const getSurvey = async function () {
    // get the survey from the backend
    const response = await fetch('/api/surveys/' + route.params.id);
    // convert the response to json
    const json = await response.json();
    // log the json
    console.log(json);
    // set the survey
    survey.value = json;
}

const props = defineProps({
    categories: String,
});

const options = ref({});
const series = ref([]);
const statJson = ref([]);

onMounted(async () => {
    // if there is an id in the route
    if (route.params.id) {
        await getSurvey();
    }
});
</script>

<template>
    <main>
        <div class="row" id="container" style="width:1000px">
            <form class="col my-5" @submit.prevent="submitSurvey" v-if="route.name != 'view-survey'">
                <fieldset class="row mb-3">
                    <legend class="col col-form-label pt-0">Categories</legend>
                    <div class="col col-sm-20">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="PC" value="PC" checked>
                            <label class="form-check-label" for="PC">
                                PC
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="Laptop" value="Laptop">
                            <label class="form-check-label" for="Laptop">
                                Laptop
                            </label>
                        </div>
                    </div>
                </fieldset>

                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Budget</label>
                    <select class="form-select" aria-label="Default select example" v-model="survey.budget">
                        <option v-for="budget in budgets" :key="budget" :value="budget"> {{ budget }}
                        </option>
                    </select>
                </div>

                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Purpose</label>
                    <select class="form-select" aria-label="Default select example" v-model="survey.purpose">
                        <option v-for="purpose in purposes" :key="purpose" :value="purpose"> {{ purpose }}
                        </option>
                    </select>
                </div>

                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="terms" id="gridCheck1">
                            <label class="form-check-label" for="gridCheck1">
                                Agree to Terms and Conditions
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" id="submit" class="btn btn-outline-success">Submit</button>
            </form>
            <div id="charts" class="col">
                <apexchart type="donut" :options="options" :series="series" />
                <!-- <apexchart type="polarArea" :options="options" :series="series" /> -->
                <!-- <apexchart type="pie" :options="options" :series="series" /> -->
                <!-- <xyChart :data="statJson.value"></xyChart> -->
            </div>

        </div>
        <div v-if="route.name == 'view-survey'">
            <h1>{{ survey.email }}</h1>
            <p>Categories: {{ survey.categories }}</p>
            <p>Budget: {{ survey.budget }}</p>
            <p>Purpose: {{ survey.purpose }}</p>
            <p>Terms and Conditions: {{ survey.terms }}</p>
            <p>Last Modified: {{ differenceInDays(new Date(), new Date(survey.modified_at)) }} ago.</p>
        </div>
        <div class="mt-4">
            <router-link to="/surveys" class="btn btn-primary">Surveys Management</router-link>
            <router-link to="/users" class="btn btn-secondary ms-2">Users Management</router-link>
        </div>
    </main>
</template>