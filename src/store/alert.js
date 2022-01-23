export default {
    namespaced: true,
    state: {
        status: false,
        color: 'success',
        text: '',
        icon: '',
    },
    mutations: {
        set: (state, payload) => {
            state.status = payload.status
            state.color = payload.color
            state.text = payload.text
            state.icon = payload.icon
        }
    },
    actions: {
        set: ({ commit }, payload) => {
            commit('set', payload)
        }
    },
    getters: {
        status: state => state.status,
        color: state => state.color,
        text: state => state.text,
        icon: state => state.icon,
    }
}