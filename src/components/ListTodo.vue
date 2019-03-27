<template>
    <v-container fluid>
        <v-layout column>
            <v-flex>
                <v-subheader>NASA</v-subheader>
            </v-flex>
            <v-flex>
                <v-card style="padding: 20px">
                    <v-flex style="padding-left:12px; padding-right:12px;">
                        <h3 class="display-2 font-weight-light">APOD</h3>
                        <p class="body-1">Knowledge bombs</p>
                    </v-flex>

                    <v-layout flex align-center justify-space-around row wrap >
                        <v-flex xs6 v-for="article in this.aAPOD" style="padding:10px 12px 10px 12px">
                            <v-card>
                                <v-img v-bind:src="article.url"
                                       aspect-ratio="2.75">
                                </v-img>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0" v-text="article.title"></h3>
                                    </div>
                                </v-card-title>
                                <v-card-text v-text="article.explanation"></v-card-text>
                                <v-card-actions>
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-flex style="padding-left:12px; padding-right:12px;">
                        <h3 class="display-2 font-weight-light">DONKI</h3>
                        <p class="body-1">info overload</p>
                    </v-flex>
                    <v-layout align-center flex flex-start row wrap>
                        <v-flex xs2 v-for="notification in this.aNotifications" style="padding: 2px;">
                            <v-card>
                                <v-card-title primary-title v-text="notification.messageType"></v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {APIService} from '../services/APIService.js';
    import {NASAService} from "../services/NASAService";
    import Card from "./common/Card"
    const API_URL = 'http://localhost:4000';

    const apiService = new APIService();
    const nasaService = new NASAService();

    export default {

        name: 'ListTodo',

        components: {
            Card
        },

        data() {

            return {

                aAPOD: [],
                aNotifications: []
            };

        },

        methods: {

            getNasaApod(){
                nasaService.APOD().then((data) => {

                    this.aAPOD.push(data);
                    this.aAPOD.push(data);

                    console.log(this.aAPOD);

                });
            },
            getNasaNotifications() {
                nasaService.DONKI().then((data) => {
                    let aTemp = [];
                    data.forEach(function(element) {
                        aTemp.push(element);
                    });
                    this.aNotifications = aTemp;
                });
            },
            deleteTodo(todo){

                return 'Not implemented'

            },
        },

        mounted() {

            this.getNasaApod();
            this.getNasaNotifications();

        },

    }

</script>

<style scoped>

    .list-horizontal li {

        display:inline-block;

    }

    .list-horizontal li:before {

        content: '\00a0\2022\00a0\00a0';

        color:#999;

        color:rgba(0,0,0,0.5);

        font-size:11px;

    }

    .list-horizontal li:first-child:before {

        content: '';

    }

</style>