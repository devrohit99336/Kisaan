<template>
    <div class="airport">
        <div class="wrapper">
            <div v-for="airport in airports" :key="airport.abbreviation">
                <p>{{ airport.abbreviation }}</p>
                <p>{{ airport.name }}</p>
                <p>{{ airport.city }}, {{ airport.state }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import allAirports from '@/data/airports.js'
    import {
        ref
    } from 'vue'
    export default {
        props: {
            airport: {
                type: Object,
                required: true
            }
        },
        setup() {
            const airports = ref(allAirports)
            return {
                airports
            }
        },
        // data(){
        //     return{
        //         irports : allAirports,
        //     }
        // },

        // methods:{
        //     demo(){
        //         console.log("function is called");
        //         console.log(this.irports);
        //     }
        // },
        // mounted(){
        //     console.log("welcome to airports page");
        //     this.demo();
        // }
    }
</script>

<style scoped>
    .airport {
        border: 3px solid;
        border-radius: .5rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .airport p:first-child {
        font-weight: bold;
        font-size: 2.5rem;
        margin: 1rem 0;
    }

    .airport p:last-child {
        font-style: italic;
        font-size: .8rem;
    }
</style>


<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
        max-width: 960px;
        margin: 0 auto;
    }

    p,
    h3 {
        grid-column: span 3;
    }
</style>