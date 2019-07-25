<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="amber">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex sm3>
                                <v-card-text>
                                    <span>
                                        <ul>
                                            <li>
                                                {{ProjectName}}
                                            </li>
                                            <li>
                                                paid {{Paid}}
                                            </li>
                                            <li>
                                                {{Type}}
                                            </li>
                                        </ul>
                                    </span>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm3>
                                <v-card-text>
                                    <span>
                                        <ul>
                                            <li>
                                                est cost {{EstCost}}
                                            </li>
                                            <li>
                                                our cost {{OurCost}}
                                            </li>
                                            <li>
                                                total cost {{TotalCost}}
                                            </li>
                                        </ul>
                                    </span>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm3>
                                <v-card-text>
                                    <span>
                                        <ul>
                                            <li>
                                                {{Platform}}
                                            </li>
                                            <li>
                                                {{Notes}}
                                            </li>
                                            <li>
                                                hours worked {{HoursWorked}}
                                            </li>
                                        </ul>
                                    </span>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-btn round>edit</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props:{
        CompanyId: Number,
        EstCost: Number,
        HoursWorked: Number,
        Notes: String,
        OurCost: Number,
        Paid: String,
        Platform: String,
        ProjectName: String,
        TotalCost: Number,
        Type: String    
    },
        methods: {
    }
}
</script>

<style>
ul{
   list-style: none;
}
</style>
