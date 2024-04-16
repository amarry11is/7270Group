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

const isSurveySubmitted = ref(false);

const submitSurvey = async function () {
    var url = '/api/surveys';
    var method = 'POST';

    if (route.name == 'survey-update') {
        url = url + '/' + survey.value._id + '/update';
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
    if (surveyResponse.ok) {
        // Check if submitted
        isSurveySubmitted.value = true;
        showStat();}
    };

    const showStat = async function () {
        // purpose
        var purposeurl = '/api/surveys/stats/purpose';
        var purposeresponse = await fetch(purposeurl);
        var purposejson = await purposeresponse.json();
        optionsPurpose.value = {
            chart: {
                type: 'donut',
                height: 300,
            },
            labels: purposejson.map((item) => item._id),
            // title: { text: props.purpose || "All Purposes" }
        };
        seriesPurpose.value = purposejson.map((item) => item.total);

        // budget
        var budgeturl = '/api/surveys/stats/budget';
        var budgetresponse = await fetch(budgeturl);
        var budgetjson = await budgetresponse.json();
        optionsBudget.value = {
            chart: {
                type: 'bar',
                height: 300
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                },
            },
            xaxis: {
                categories: budgetjson.map((item) => item._id),
            },
            // title: {
            //     text: props.budget || "All Budgets"
            // }
        };
        seriesBudget.value = [{
            name: "Total",
            data: budgetjson.map((item) => item.total)
        }];


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

    // const props = defineProps({
    //     categories: String,
    // });

    const optionsPurpose = ref({});
    const seriesPurpose = ref([]);

    const optionsBudget = ref({});
    const seriesBudget = ref([]);

    onMounted(async () => {
        // if there is an id in the route
        if (route.params.id) {
            await getSurvey();
        }
    });
</script>

<template>
    <div class="container py-5">
        <h1 class="mb-4 text-center">Computer Choice Survey</h1>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form @submit.prevent="submitSurvey" v-if="route.name != 'view-survey'" class="mt-3 mt-md-0 form-styling">
                    <fieldset class="mb-3">
                        <legend class="form-legend">Preference</legend>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="PC" value="PC" v-model="survey.categories">
                            <label class="form-check-label" for="PC">PC</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="categories" id="Laptop" value="Laptop" v-model="survey.categories">
                            <label class="form-check-label" for="Laptop">Laptop</label>
                        </div>
                    </fieldset>

                    <div class="mb-3">
                        <label for="budgetSelect" class="form-label form-legend">Budget</label>
                        <select class="form-select" id="budgetSelect" v-model="survey.budget">
                            <option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="purposeSelect" class="form-label form-legend">Purpose</label>
                        <select class="form-select" id="purposeSelect" v-model="survey.purpose">
                            <option v-for="purpose in purposes" :key="purpose" :value="purpose">{{ purpose }}</option>
                        </select>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="termsCheck" v-model="survey.terms">
                        <label class="form-check-label" for="termsCheck">Agree to Terms and Conditions</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                 </form>
                <div v-if="isSurveySubmitted" class="stats-display">
                    <apexchart type="donut" :options="optionsPurpose" :series="seriesPurpose" class="mb-4"></apexchart>
                    <apexchart type="bar" :options="optionsBudget" :series="seriesBudget"></apexchart>
                </div>
            </div>
        </div>
        <div v-if="route.name == 'view-survey'" class="survey-details">
            <h2>{{ survey.email }}</h2>
            <p>Categories: {{ survey.categories }}</p>
            <p>Budget: {{ survey.budget }}</p>
            <p>Purpose: {{ survey.purpose }}</p>
            <p>Terms and Conditions: {{ survey.terms ? 'Accepted' : 'Not Accepted' }}</p>
            <p>Last Modified: {{ differenceInDays(new Date(), new Date(survey.modified_at)) }} days ago.</p>
        </div>
        <div class="mt-4 navigation-buttons">
            <router-link to="/surveys" class="btn btn-secondary">Surveys Management</router-link>
            <router-link to="/users" class="btn btn-secondary ms-2">Users Management</router-link>
        </div>
    </div>
</template>

<style scoped>
.form-legend {
    font-size: 1rem; /* Adjust the font size to your liking */
    font-weight: bold;
}

.form-styling {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stats-display, .survey-details {
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.navigation-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

/* Further CSS styles to beautify the page */
</style>



