<template>
  <div id="app">
    Parent counter : {{ getCounter }} <br>
    <button @click="asyncIncrement({ by: 50, duration: 500})">+</button>
    <button @click="subCounter">-</button>
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'getCounter'
        ])
    },
    methods: {
        ...mapMutations([
           'addCounter'
        ]),
        ...mapActions([
            'asyncIncrement'
        ]),
        // addCounter() {
        //     this.$store.commit('addCounter', {
        //         value: 10,
        //         arr: ['a', 'b', 'c']
        //     });
        // },
        subCounter() {
            this.$store.commit('subCounter');
        }
    },
    components: {
        'child' : Child
    }
};
</script>