<template>
    <v-container fluid>
        <v-layout>
            <v-flex>
                <v-card style="padding: 20px">
                    <v-flex style="padding-left:12px; padding-right:12px;">
                        <h3 class="display-2 font-weight-light">Check these cards out</h3>
                        <p class="body-1">It took me way too long to figure out how to align things properly.</p>
                    </v-flex>

                    <v-layout flex align-center justify-space-around row wrap >
                        <v-flex xs3 v-for="card in cards" style="padding:10px 12px 10px 12px">
                            <v-card>
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                       aspect-ratio="2.75">
                                </v-img>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0" v-text="card.title"></h3>
                                    </div>
                                </v-card-title>
                                <v-card-text v-text="card.text"></v-card-text>
                                <v-card-actions>
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
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
    import Card from "./common/Card"
    const API_URL = 'http://localhost:4000';

    const apiService = new APIService();

    const cards = [
        {
            title: 'Card uno',
            img: '',
            text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
        },
        {
            title: 'Card 2',
            img: '',
            text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
        },
        {
            title: 'Card 3',
            img: '',
            text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
        },
        {
            title: 'Card 4',
            img: '',
            text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
        },

    ]

    export default {

        name: 'ListTodo',

        components: {
            Card
        },

        data() {

            return {

                todos: [],
                numberOfTodos:0,
                cards
            };

        },

        methods: {

            getTodos(){
                apiService.getTodos().then((data) => {

                    this.todos = data.data;
                    this.numberOfProducts = data.count;

                });
            },
            deleteTodo(todo){

                apiService.deleteTodo(todo).then((r)=>{



                    if(r.status === 204)
                    {


                        alert("Todo deleted");

                        this.$router.go()

                    }

                })

            },
        },

        mounted() {

            this.getTodos();

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