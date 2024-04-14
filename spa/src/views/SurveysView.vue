<script setup>
import { ref, onMounted, watch } from "vue" // add watch

const search = ref("");

watch(() => search.value, () => {
    loadAsyncData();
});

const data = ref([]);
const total = ref(0);
const loading = ref(false);
const page = ref(1);
const perPage = ref(20);

const loadAsyncData = () => {
    const params = [
        // "api_key=bb6f51bef07465653c3e553d6ab161a8",
        // "language=en-US",
        // "include_adult=false",
        // "include_video=false",
        // `sort_by=${sortField.value}.${sortOrder.value}`,
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

</script>

<template>
    <section>
        <input class="form-control" v-model="search" placeholder="Search..." />

        <o-table :data="data" :loading="loading" paginated backend-pagination :total="total" :per-page="perPage"
            aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page"
            aria-current-label="Current page" @page-change="onPageChange">
            <o-table-column v-slot="props" field="original_title" label="Email" sortable>
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
        </o-table>
    </section>

</template>