import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const instance = axios.create({
    baseURL: 'http://www.emsifa.com/api-wilayah-indonesia/api'
})

export default instance