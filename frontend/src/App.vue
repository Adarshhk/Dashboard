<script setup>

import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { useCustomerStore } from './store/customerStore';

const customerStore = useCustomerStore();

customerStore.getCustomer();

</script>

<template>

      <div class="m-0 p-0 flex ">
            <div class="">
                  <Sidebar />
            </div>
            <div class="lg:ml-[350px] w-full">
                  <RouterView/>
            </div>
      </div>

</template>

<style scoped></style>
