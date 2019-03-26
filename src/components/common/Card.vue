<template>
    <v-layout>
        <v-flex style="margin: 6px 4px 0 4px;">
            <v-spacer></v-spacer>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ title }}</h3>
                        <div> {{ text }} </div>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

    export default {

        name: 'Card',

        components: {
        },

        props: {
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        },


        data() {

            return {
            };
        },

        mounted() {

        },

    }

</script>
