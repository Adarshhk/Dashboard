<script setup>
    import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>

    <div class="bg-blue-600 ">
        <span class=" absolute text-white text-4xl top-5 left-4 cursor-pointer" @click="toggleSidebar()">
            <fa class="bi bi-filter-left px-2 rounded-md" icon="square-caret-right" style="color: black;" />
        </span>
        <div
      :class="[
        'sidebar fixed top-0 bottom-0 lg:left-0 duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen',
        isSidebarOpen ? 'left-0' : 'left-[-300px]'
      ]"
    >
            <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center rounded-md ">
                    
                    <h1 class="text-[15px]  ml-3 text-xl text-gray-200 font-bold">Dashboard</h1>
                    <fa class="bi bi-x ml-20 cursor-pointer lg:hidden" icon="xmark" @click="toggleSidebar()"/>
                </div>
                <hr class="my-2 text-gray-600">

                <div>
                
                    <RouterLink to="/"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-house-door-fill"></i>
                        <div class="text-xl ml-4 text-gray-200"><fa icon="chart-pie" style="color: #74C0FC;" class="text-2xl mr-4" />Home</Div>
                        </RouterLink>
                    <RouterLink to="/stats"
                        class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                        <i class="bi bi-bookmark-fill"></i>
                        <div class="text-xl ml-4 text-gray-200">
                            <fa icon="square-poll-vertical" style="color: #74C0FC;" class="text-2xl mr-4" />
                            Statistics
                        </div>
                    </RouterLink>
                    <hr class="my-4 text-gray-600">
                </div>
            </div>
        </div>
    </div>

</template>
