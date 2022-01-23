export default {
    namespaced: true,
    state: {
        admin: false,
    },
    getters: {
        admin: state => state.admin
    },
    mutations: {
        setAdmin: (state, payload) => {
            state.admin = payload
        }
    },
    actions: {
        setAdmin: ({ commit }, payload) => {
            commit('setAdmin', payload)
        }
    }
}