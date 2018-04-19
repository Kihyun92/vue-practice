import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        getCounter: state => state.counter
    },
    mutations: {
        addCounter: (state, payload) => {
            // state.counter = payload.value;
            return state.counter++;
        },
        subCounter: (state, payload) => {
            return state.counter--;
        }
    },
    actions: {
        addCounter: (context) => {
            return context.commit('addCounter');
        },
        asyncIncrement: (context, payload) => {
            return setTimeout(() => {
                context.commit('addCounter', payload.by);
            }, payload.duration);
        }
    }
});