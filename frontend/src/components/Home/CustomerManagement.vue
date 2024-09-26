<script setup>

import CustomerForm from './CustomerForm.vue';
import CustomerTable from './CustomerTable.vue';

//name , age group , occupation , prime memeber? , gender , salary LPA
</script>

<template>
    <div class="flex flex-col justify-end">
        <h1 class="text-left ml-5 text-4xl font-sans text-blue-500 font-bold mt-10 mb-10">Dashboard</h1>
        <CustomerTable/>
        <div>
            <h1 class="text-left ml-5 text-2xl font-sans text-blue-500 font-bold mt-10">Add New Customer</h1>
        </div>
        <CustomerForm/>
    </div>
</template>