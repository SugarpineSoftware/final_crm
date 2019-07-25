import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedCustomers: [
      {ImgUrl:"https://i607.photobucket.com/albums/tt154/cenas/blackcompany_01.jpg", id:0, CompanyName:'sugarpinesoftware', OwnerFName:'eli', OwnerLName:'garcia', ContactFName:'cory', ContactLName:'green', Phone1:2062076, Phone2:2092076, Email1:"elijah@sugarpinesoftware.com", Email2:'cory@sugarpinesoftware.com', Website:"sugarpinesoftawre.com", GeneralNotes:'this is the general Notes',
      date:'2018-07-12'},
      {ImgUrl:"https://www.allaboutbirds.org/guide/assets/og/75335251-1200px.jpg", id:1, CompanyName:'fuckkk', OwnerFName:'god', OwnerLName:'mclovin', ContactFName:'satan', ContactLName:'smith', Phone1:2062076, Phone2:2092076, Email1:"elijah@sugarpinesoftware.com", Email2:'cory@sugarpinesoftware.com', Website:"sugarpinesoftawre.com", GeneralNotes:'this is the general Notes',
      date:'2019-07-12'
    }
    ],
    loadedProjects:[
      {CompanyId:0, EstCost: 2000, HoursWorked:10,Notes:"this Project is a bunch of dog shit",OurCost:500, Paid: "false", Platform: "iOS",ProjectName:"farts", TotalCost:3000, Type:"Print"},
      {CompanyId:0, EstCost: 2000, HoursWorked:10,Notes:"Fish Eggs",OurCost:500, Paid: false, Platform: "iOS",ProjectName:"PoopStuff", TotalCost:3000, Type:"Print"},
      {CompanyId:1, EstCost: 2000, HoursWorked:10,Notes:"This is for the second customer",OurCost:500, Paid: false, Platform: "iOS",ProjectName:"Second", TotalCost:3000, Type:"Print"}
    ],
    user:{
      id:'akshjfdakjsf',
    }

  },
  mutations: {

  },
  actions: {

  },
  getters:{
    loadedCustomers(state){
      return state.loadedCustomers.sort((customerA, customerB) => {
        return customerA.date > customerB.date
      })
    },
    loadedCustomer(state){
      return (customerId) =>{
        return state.loadedCustomers.find((customer) => {
          return customer.id === customerId
        })
      }
    },
    loadedProjects(state){
      return state.loadedProjects.sort((ProjectA, ProjectB) => {
        return ProjectA.date > ProjectB.date
      })
    },
    loadedProject(state){
      return (ProjectId) =>{
        return state.loadedProjects.find((Project) => {
          return Project.id === ProjectId
        })
      }
    }
  }
})
