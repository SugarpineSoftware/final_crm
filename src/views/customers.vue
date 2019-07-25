<template>
    <div class="customers">
    <customerCard 
    v-for="customer in customers" :key="customer.id"
    v-bind:ImgUrl="customer.ImgUrl"
    v-bind:CompanyName="customer.CompanyName"
    v-bind:OwnerFName="customer.OwnerFName"
    v-bind:OwnerLName="customer.OwnerLName"
    v-bind:ContactFName="customer.ContactFName"
    v-bind:ContactLName="customer.ContactLName"
    v-bind:Phone1="customer.Phone1"
    v-bind:Phone2="customer.Phone2"
    v-bind:Email1="customer.Email1"
    v-bind:Email2="customer.Email2"
    v-bind:Website="customer.Website"
    v-bind:GeneralNotes="customer.GeneralNotes"
    ></customerCard>
    </div>
</template>

<script>
import customerCard from '../components/customer'

export default {
    props:[
        'id'
    ],
 components:{
        customerCard
    },
    computed: {
        customers(){
            return this.$store.getters.loadedCustomers
        }
    }
}
</script>