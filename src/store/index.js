import Vue from 'vue'
import Vuex from 'vuex'
import alert from './alert'
import dialog from './dialog'
import auth from './auth'
import crud from './crud'
import navbar from './navbar'
import axios from "../plugins/axios"
import VuexPersist from "vuex-persist"

const vuexPersist = new VuexPersist({
    key: 'data warga',
    Storage: localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
        alert,
        dialog,
        auth,
        crud,
        navbar,
    },
    state: {
        provinces: [],
        city: [],
        district: [],
        village: [],
    },
    mutations: {
        setProvinsi: (state, payload) => {
            state.provinces = payload
        },
        setCity: (state, payload) => {
            state.city = payload
        },
        setDistrict: (state, payload) => {
            state.district = payload
        },
        setVillage: (state, payload) => {
            state.village = payload
        },
    },
    actions: {
        getProvinces(context, payload) {
            const config = {
                method: "GET",
                url: payload.api,
            }
            axios(config)
                .then((response) => {
                    let provinces  = response.data
                    context.commit('setProvinsi', provinces)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getCity(context, payload) {
            const config = {
                method: "GET",
                url: payload.api,
            }
            axios(config)
                .then((response) => {
                    let city  = response.data
                    context.commit('setCity', city)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getDistrict(context, payload) {
            const config = {
                method: "GET",
                url: payload.api,
            }
            axios(config)
                .then((response) => {
                    let district  = response.data
                    context.commit('setDistrict', district)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getVillage(context, payload) {
            const config = {
                method: "GET",
                url: payload.api,
            }
            axios(config)
                .then((response) => {
                    let village  = response.data
                    context.commit('setVillage', village)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})