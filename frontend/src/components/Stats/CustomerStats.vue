<script setup>
//total customer , male female ratio , majority age group , avg salary
 // students , govt employee , pvt. employee , earners , non earners
 import { useCustomerStore } from '../../store/customerStore';

 const customerStore = useCustomerStore();
 const studentCount = customerStore.studentCount;
 const genderCount = customerStore.genderCount; 
 const mfRatio = genderCount.male/genderCount.female == NaN ? 0 :(genderCount.male/genderCount.female).toFixed(2);
 
</script>

<template>
    <div class="lg:ml-0 ml-20 ">

    
    <div class="flex flex-col justify-center lg:justify-end ">
        <h1 class="text-left ml-10 lg:ml-5 text-4xl font-sans text-blue-500 font-bold mt-24 mb-10">Dashboard</h1>
        <div class="flex mx-auto  w-full">
            <div class="p-2  mr-6 w-1/3 bg-blue-700 rounded-md py-5 shadom-md">
                <p class="ml-4 font-semibold text-sm text-white">Total Customers</p>
                <h1 class="text-white ml-4 font-bold text-5xl my-4 ">
                    {{customerStore.totalCustomer}}
                </h1>
                <p class="ml-4 font-light text-sm text-white">Growth by 33%</p>
            </div>
            <div class="overflow-hidden p-2 mr-10 w-1/3 bg-blue-600 rounded-md py-5 shadow-md">
                <p class="  ml-4 font-semibold text-sm text-white">Male to Female Ratio</p>
                <h1 class="ml-4 text-white font-bold text-5xl my-4 ">
                   {{ mfRatio }}
                </h1>
                <span class="ml-4 font-light text-sm text-white">Females :  {{ genderCount.female }}</span>
                <span class="ml-4 font-light text-sm text-white">Males : {{ genderCount.male }}</span>
            </div>
        </div>
        <div class="mt-4 flex mx-auto  w-full">
            <div class="p-2  mr-6  w-1/3 bg-blue-700 rounded-md py-5 shadom-md">
                <p class="ml-4 font-semibold text-sm text-white">Majority Age-Group</p>
                <h1 class="text-white ml-4 font-bold text-5xl my-4 ">
                    25-34
                </h1>
                <p class="ml-4 font-light text-sm text-white">Ahead by 7 persons</p>
            </div>
            <div class="overflow-hidden p-2 mr-10 w-1/3 bg-blue-600 rounded-md py-5 shadow-md">
                <p class="  ml-4 font-semibold text-sm text-white">Average LPA</p>
                <h1 class="ml-4 text-white font-bold text-5xl my-4 ">
                    15
                </h1>
                <span class="ml-4 font-light text-sm text-white">More data required </span>
                
            </div>
        </div>
        
    </div>

    <div class="mt-14 mb-10">
        <ul>
            <li class="my-3"><span class="font-medium text-gray-600 text-lg">Student Count : </span><span class="text-gray-800 font-medium text-lg">{{ studentCount }}</span></li>
            <li class="my-3"><span class="font-medium text-gray-600 text-lg">Private Employee : </span><span class="text-gray-800 font-medium text-lg">{{ customerStore.pvtCount }}</span></li>
            <li class="my-3"><span class="font-medium text-gray-600 text-lg">Government Service : </span><span class="text-gray-800 font-medium text-lg">{{ customerStore.govtCount }}</span></li>
            <li class="my-3"><span class="font-medium text-gray-600 text-lg">PSU Employee :  </span><span class="text-gray-800 font-medium text-lg">{{ customerStore.psuCount }}</span></li>
        </ul>
    </div>
</div>
</template>