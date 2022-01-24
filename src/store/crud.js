// import citizen from "../assets/data-dummy.js";

export default {
    namespaced: true,
    state: {
        editedIndexs: -1,
        editedItems: {
            nama: "",
            umur: 25,
            nik: 0,
            no_kk: 0,
            jenis_kelamin: "",
            alamat: "",
            provinsi: "",
            kota: "",
            kecamatan: "",
            desa: "",
            rt: 1,
            rw: 1,
            penghasil_sebelum_pandemi: 0,
            penghasil_sesudah_pandemi: 0,
            alasan: "",
            foto_ektp: null,
            foto_kk: null,
            textSelection: "",
        },
        defaultItems: {
            nama: "",
            umur: 25,
            nik: 0,
            no_kk: 0,
            jenis_kelamin: "",
            alamat: "",
            provinsi: "",
            kota: "",
            kecamatan: "",
            desa: "",
            rt: 1,
            rw: 1,
            penghasil_sebelum_pandemi: 0,
            penghasil_sesudah_pandemi: 0,
            alasan: "",
            foto_ektp: null,
            foto_kk: null,
            textSelection: "",
        },
        citizens: [],
        genders: ["Pria", "Wanita"],
    },
    getters: {
        editedIndexs: state => state.editedIndexs,
        editedItems: state => state.editedItems,
        defaultItems: state => state.defaultItems,
        citizens: state => state.citizens,
        genders: state => state.genders,
    },
    mutations: {
        setEditedIndex: (state, editedIndexs) => {
            state.editedIndexs = editedIndexs
        },
        setEditedItem: (state, editedItems) => {
            state.editedItems = editedItems
        },
        setDefaultItem: (state, defaultItems) => {
            state.defaultItems = defaultItems
        },
        setCitizens: (state, citizens) => {
            state.citizens = citizens
        },
    },
    actions: {
        setEditedIndex: ({ commit }, editedIndexs) => {
            commit('setEditedIndex', editedIndexs)
        },
        setEditedItem: ({ commit }, editedItems) => {
            commit('setEditedItem', editedItems)
        },
        setDefaultItem: ({ commit }, defaultItems) => {
            commit('setDefaultItem', defaultItems)
        },
        setCitizens: ({ commit }, citizens) => {
            commit('setCitizens', citizens)
        },
    }
}