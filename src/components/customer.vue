<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs3>
                                <v-img
                                :src="ImgUrl" height="64px" >
                                </v-img>
                            </v-flex>
                            <v-flex sm3>
                                <v-card-text>
                                    <span>
                                        <ul>
                                            <li>
                                                {{CompanyName}}
                                            </li>
                                            <li>
                                                {{OwnerFName}} {{OwnerLName}}
                                            </li>
                                            <li>
                                                {{ContactFName}} {{ContactLName}}
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
                                                {{Website}}
                                            </li>
                                            <li>
                                                {{Phone1}}
                                            </li>
                                            <li>
                                                {{Phone2}}
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
                                                {{Email1}}
                                            </li>
                                            <li>
                                                {{Email2}}
                                            </li>
                                            <li>
                                                {{GeneralNotes}}
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
    components:{
    },
    props:{
        ImgUrl: String,
        CompanyName: String,
        OwnerFName: String,
        OwnerLName: String,
        ContactFName: String,
        ContactLName: String,
        Phone1: Number,
        Phone2: Number,
        Email1: String,
        Email2: String,
        Website: String,
        GeneralNotes: String,
        id: Number
    },
        computed:{
            projects(){
                return this.$store.getters.loadedProjects
            }
        }
}
</script>

<style>
ul{
   list-style: none;
}
</style>
