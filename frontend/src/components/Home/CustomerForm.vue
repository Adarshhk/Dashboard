<script setup>
import { reactive, ref } from 'vue';
import { useCustomerStore } from '../../store/customerStore';

const customerStore = useCustomerStore();
const customer = reactive({
  id: customerStore.customers.length + 1,
  fullName: "",
  ageGroup: "18-24",
  occupation: "Government Service",
  gender: "Male",
  salaryLPA: 0
})
function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
const handleSubmit = () => {
  const data = {
  id: generateRandomId(),
  fullName: customer.fullName,
  ageGroup: customer.ageGroup,
  occupation: customer.occupation,
  gender: customer.gender,
  salaryLPA: customer.salaryLPA
  }

  customerStore.addCustomer(data)
}
</script>

<template>

  <form class="mt-10 mx-10 " @submit.prevent="handleSubmit">
    <div class="mb-5">
      <label for="fullName" class="block mb-2 text-sm font-medium text-gray-600 ">Full Name</label>
      <input type="text" v-model="customer.fullName" name="fullName" id="fullName"
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 ">
    </div>
    <div class="mb-5 flex justify-between ">
      <div class="w-1/2 mr-10">
        <label for="occupation" class="block mb-2 text-sm font-medium text-gray-600">Occupation</label>
        <select id="occupation" v-model="customer.occupation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

          <option value="Government Service">Govt. Service</option>
          <option value="Private Employee">Pvt. Employee</option>
          <option value="PSU Employee">PSU Employee</option>
          <option value="Student">Student</option>
        </select>
      </div>
      <div class="w-1/2">
        <label for="ageGroup" class="block mb-2 text-sm font-medium text-gray-600">Age Group</label>
        <select id="ageGroup" v-model="customer.ageGroup"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-50">35-50</option>
          <option value="50+">50+</option>
        </select>
      </div>

    </div>
    <fieldset>
      <legend class="block mb-2 text-sm font-medium text-gray-600">Gender</legend>
      <div class="flex items-center mb-4">
        <input id="Male" type="radio" name="gender" value="Male" v-model="customer.gender"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 " checked>
        <label for="Male" class="block ms-2  text-sm font-medium text-gray-900 ">
          Male
        </label>
      </div>

      <div class="flex items-center mb-4">
        <input id="Female" type="radio" name="gender" value="Female" v-model="customer.gender"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
        <label for="Female" class="block ms-2 text-sm font-medium text-gray-900 ">
          Female
        </label>
      </div>

      <div class=" flex items-center mb-4">
        <input id="Others" type="radio" name="Otgenderhers" value="Others" v-model="customer.gender"
          class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
        <label for="Others" class="block ms-2 text-sm font-medium text-gray-900 ">
          Others
        </label>
      </div>

    </fieldset>

    <div class="mb-5">
      <label for="salary" class="block mb-2 text-sm font-medium text-gray-600 ">Salary (in LPA)</label>
      <input type="number" name="salary" id="salary" v-model="customer.salaryLPA"
        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 ">
    </div>
  
    <button type="submit"
      class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add
      Customer</button>
  </form>
</template>