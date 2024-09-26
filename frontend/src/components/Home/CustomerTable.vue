
<script setup>
//name , age group , occupation , gender , salary LPA
import { useCustomerStore } from '../../store/customerStore';

const customerStore = useCustomerStore();

const handleDelete = (id) => {
  customerStore.removeCustomer(id)
}
</script>
<template>

<div class="flex items-center justify-center mx-10" >
  <div class="overflow-x-auto w-full h-96 overflow-y-auto">
    <table class=" min-w-full bg-white shadow-md rounded-xl">
      <thead class="bg-white">
        <tr class="bg-blue-gray-100 text-gray-700">
          <th class="py-3 px-4 text-left">Customer Name</th>
          <th class="py-3 px-4 text-left">Gender</th>
          <th class="py-3 px-4 text-left">Occupation</th>
          <th class="py-3 px-4 text-left">Age-Group</th>
          <th class="py-3 px-4 text-left">Salary (in LPA)</th>
          <th class="py-3 px-4 text-left">Remove</th>
        </tr>
        
      </thead>
      
      <tbody class="text-blue-gray-900 ">
        
        <tr v-for="customer in customerStore.customers" class="border-b border-blue-gray-200">
          <td class="py-3 px-4">{{ customer.fullName }}</td>
          <td class="py-3 px-4">{{ customer.gender }}</td>
          <td class="py-3 px-4">{{ customer.occupation }}</td>
          <td class="py-3 px-4">{{ customer.ageGroup }}</td>
          <td class="py-3 px-4">{{ customer.salaryLPA }}</td>
          <td class="py-3 px-4 ">
            <button class="font-medium text-red-600 hover:text-red-800" @click="handleDelete(customer.id)" ><fa icon="trash" /></button>
          </td>
        </tr>
        
      </tbody>
    </table>
    
  </div>
</div>
</template>