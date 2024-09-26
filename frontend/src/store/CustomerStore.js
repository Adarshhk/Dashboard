import { defineStore } from "pinia";
import axios from 'axios'

export const useCustomerStore = defineStore('customerStore', {
    state: () => ({
        loading : false,
        customers: []
    }),
    getters : {
        totalCustomer() {
            return this.customers.length;
        },
        studentCount() {
            const data = this.customers.filter(customer => customer.occupation === "Student");
            return data.length;
        }
        ,
        pvtCount() {
            const data = this.customers.filter(customer => customer.occupation === "Private Employee");
            return data.length;
        }
        ,govtCount() {
            const data = this.customers.filter(customer => customer.occupation === "Government Service");
            return data.length;
        }
        ,psuCount() {
            const data = this.customers.filter(customer => customer.occupation === "PSU employee");
            return data.length;
        }
        ,
        genderCount() {
            const count = {
                male: 0,
                female: 0,
                others: 0,
            };
        
            this.customers.forEach(customer => {
                
                if (customer.gender === "Male") count.male++;
                else if (customer.gender === "Female") count.female++;
                else if (customer.gender === "Others") count.others++;
            });
        
            return count;
        }
        
    },

    actions : {
        async getCustomer(){
            try {
                this.loading = true;
                const res = await axios.get(`http://localhost:3000/customers`)
                
                this.customers = res.data;
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error.message);
            }
        },
        async addCustomer(customer){
            this.loading = true;
            this.customers.push(customer);
            const res = await axios.post("http://localhost:3000/customers" , JSON.stringify(customer))
           
            this.loading = false;
        },

        async removeCustomer(id){
            this.loading = true;
            this.customers = this.customers.filter(customer => customer.id != id )
            const res = await axios.delete(`http://localhost:3000/customers/${id}`)
          
            this.loading = false;
        }
    }
})