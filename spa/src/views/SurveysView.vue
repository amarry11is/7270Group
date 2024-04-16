<script setup>
import { ref, onMounted, watch } from "vue" // add watch
import { useRouter } from 'vue-router';

const search = ref("");

watch(() => search.value, () => {
    loadAsyncData();
});

const router = useRouter();
const data = ref([]);
const total = ref(0);
const loading = ref(false);
const page = ref(1);
const perPage = ref(20);

const loadAsyncData = () => {
    const params = [
        `page=${page.value}`,
        `email=${search.value}`,
    ].join("&");
    loading.value = true;

    fetch(`/api/surveys?${params}`)
        .then((response) => response.json())
        .then((result) => {
            perPage.value = result.perPage;
            total.value = result.total;
            data.value = result.surveys

            loading.value = false;
        })
        .catch((error) => {
            data.value = [];
            total.value = 0;
            loading.value = false;
            throw error;
        });
};

/*
 * Handle modify button click event
 */
const handleModifyBtnClick = async (survey_id) => {
    router.push({ name: 'survey-update', params: { id: survey_id } });
};

/*
 * Handle delete button click event
 */
const handleDeleteBtnClick = async (survey_id) => {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`/api/surveys/${survey_id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error("Failed to delete the Survey.");
        }

        alert("Survey deleted successfully");
        loadAsyncData();
    } catch (error) {
        console.error(error);
        alert("Failed to delete Survey");
    }
};

/*
 * Handle page-change event
 */
const onPageChange = (p) => {
    page.value = p;
    loadAsyncData();
};

/*
 * Type style in relation to the value
 */
const type = (value) => {
    const number = parseFloat(value);
    if (number < 6) {
        return "is-danger";
    } else if (number >= 6 && number < 8) {
        return "is-warning";
    } else if (number >= 8) {
        return "is-success";
    }
};

onMounted(() => {
    loadAsyncData();
});

onMounted(() => {
    document.title = "Surveys Management";
});

</script>

<template>
    <section>
        <input class="form-control" v-model="search" placeholder="Search..." />

        <o-table :data="data" :loading="loading" paginated backend-pagination :total="total" :per-page="perPage"
            aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page"
            aria-current-label="Current page" @page-change="onPageChange">
            <o-table-column v-slot="props" field="original_title" label="email" sortable>
                {{ props.row.email }}
            </o-table-column>
            <o-table-column v-slot="props" field="categories" label="categories" sortable>
                {{ props.row.categories }}
            </o-table-column>
            <o-table-column v-slot="props" field="budget" label="budget" numeric sortable>
                {{ props.row.budget }}
            </o-table-column>
            <o-table-column v-slot="props" field="purpose" label="purpose" numeric sortable>
                {{ props.row.purpose }}
            </o-table-column>
            <o-table-column v-slot="props">
                <button class="btn btn-primary" @click="handleModifyBtnClick(props.row._id)">Modify</button>
            </o-table-column>
            <o-table-column v-slot="props">
                <button class="btn btn-danger" @click="handleDeleteBtnClick(props.row._id)">Delete</button>
            </o-table-column>
        </o-table>
    </section>

</template>