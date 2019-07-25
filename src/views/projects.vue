<template>
    <div class="project">
    <projectCard 
    v-for="project in projects" :key="project.CompanyId"
    v-bind:ProjectName="project.ProjectName"
    v-bind:EstCost="project.EstCost"
    v-bind:TotalCost="project.TotalCost"
    v-bind:Paid="project.Paid"
    v-bind:OurCost="project.OurCost"
    v-bind:Platform="project.Platform"
    v-bind:Type="project.Type"
    v-bind:HoursWorked="project.HoursWorked"
    v-bind:Notes="project.Notes"
    ></projectCard>
    </div>
</template>

<script>
import projectCard from '../components/project'

export default {
    props:[
        'id'
    ],
 components:{
        projectCard
    },
    computed: {
        projects(){
            return this.$store.getters.loadedProjects
        }
    }
}
</script>