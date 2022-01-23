export default {
    namespaced: true,
    state: {
        drawers: false,
        users: "Admin",
        menus: [
            {
                title: "Beranda",
                icon: "mdi-home",
                route: "/",
            },
            {
                title: "Daftar Data",
                icon: "mdi-view-list",
                route: "/list-data",
            },
        ]
    },
    getters: {
        drawers: state => state.drawers,
        users: state => state.users,
        menus: state => state.menus,
    },
    mutations: {
        setDrawer: (state, drawers) => {
            state.drawers = drawers
        },
    },
    actions: {
        setDrawer: ({ commit }, drawers) => {
            commit('setDrawer', drawers)
        },
    }
}