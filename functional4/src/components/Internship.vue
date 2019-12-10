<template>
    <div class="internships">
        <h1>Department of Communication</h1>
        <span class="totalInternships">Current Available Internships: {{ internshipItemCount }}
        <!-- uses computed property below to constantly update --> </span>

        <InternshipEntry
        v-for="(internship, index) in sortedInternshipByViews"
        v-bind:key="index"
        :internship="internship"
        />
        <!-- either put displayAllInternships or sortedInternshipByViews -->

    </div>
</template>


<script>

import InternshipEntry from '@/components/InternshipEntry'
export default {
   name:"Internship",
   components: {
       InternshipEntry
   },
   computed: {
       internshipItemCount() {
         return this.$store.getters.internshipItemCount;
           // go to the store and get the total number of internships
       },
       displayAllInternships() {
         return this.$store.getters.allInternships;
        //  go to the store and get all of the internships

        // this can be used above where I have **chose-a-computed-property**
       },
       sortedInternshipByViews(){

         let allInternships = this.$store.getters.allInternships;
         return allInternships.sort( (a,b)=> {
           return b.views - a.views
         });

        // this can be used above where I have **chose-a-computed-property**
       }
   }
}
</script>
