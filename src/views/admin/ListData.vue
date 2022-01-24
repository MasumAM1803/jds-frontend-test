<template>
  <v-main>
    <alert />
    <v-container v-if="admin">
      <div id="title" class="text-uppercase">
        <h1>daftar warga desa a</h1>
      </div>
      <div id="table-citizens" class="mt-4">
        <v-card>
          <v-data-table :headers="headers" :items="citizen" :search="search">
            <template v-slot:[`item.foto_ektp`]="{ item }">
              <v-img
                :src="
                  item.foto_ektp.imageUrl
                "
                max-width="200px"
                alt="Foto EKTP"
              />
            </template>
            <template v-slot:[`item.foto_kk`]="{ item }">
              <v-img
                :src="
                  item.foto_kk.imageUrl
                "
                max-width="200px"
                alt="Foto Kartu Keluarga"
              />
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <div class="d-flex text-center">
                <v-icon medium class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon medium @click="deleteItem(item)"> mdi-delete </v-icon>
              </div>
            </template>

            <!-- DIALOG -->
            <template v-slot:top>
              <v-dialog width="800px" max-width="800px">
                <template v-slot:activator="{ attrs }">
                  <v-row class="mb-4">
                    <v-col cols="12" md="6" sm="6">
                      <v-btn
                        color="primary"
                        dark
                        class="mt-4 ml-4"
                        v-bind="attrs"
                        @click="createItem()"
                      >
                        Tambah Data
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Cari..."
                        single-line
                        hide-details
                        sort-by="nama"
                        class="ml-4 mr-4"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </template>
              </v-dialog>
              <DialogCRUD />
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-container>
    <v-container v-if="!admin">
      <Dialog />
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import headers from "../../assets/header-table.js";

export default {
  components: {
    Alert: () => import("../../components/Alert.vue"),
    DialogCRUD: () => import("../../components/crud/DialogCRUD.vue"),
    Dialog: () => import("../../components/Dialog.vue"),
  },
  data: () => ({
    search: "",
    headers: null,
  }),

  computed: {
    ...mapGetters({
      statusAdmin: "auth/admin",
      editedIndexs: "crud/editedIndexs",
      editedItems: "crud/editedItems",
      defaultItems: "crud/defaultItems",
      citizens: "crud/citizens",
    }),
    admin: {
      get() {
        return this.statusAdmin;
      },
      set(value) {
        this.setStatusAdmin(value);
      },
    },
    editedIndex: {
      get() {
        return this.editedIndexs;
      },
      set(value) {
        this.setEditedIndex(value);
      },
    },
    editedItem: {
      get() {
        return this.editedItems;
      },
      set(value) {
        this.setEditedItem(value);
      },
    },
    defaultItem: {
      get() {
        return this.defaultItems;
      },
      set(value) {
        this.setDefaultItem(value);
      },
    },
    citizen: {
      get() {
        return this.citizens;
      },
      set(value) {
        this.setCitizens(value);
      },
    },
  },

  created() {
    this.headers = headers;
    this.initialize();
  },

  methods: {
    ...mapActions({
      setStatusAdmin: "auth/setAdmin",
      setAlert: "alert/set",
      setDialogComponent: "dialog/setComponent",
      setEditedIndex: "crud/setEditedIndex",
      setEditedItem: "crud/setEditedItem",
      setDefaultItem: "crud/setDefaultIitem",
      setCitizens: "crud/setCitizens",
    }),
    directLogin() {
      this.$router.push("/login");
    },
    initialize() {
      this.citizen = this.citizens;
    },
    editItem(item) {
      this.editedIndex = this.citizens.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.setDialogComponent({ component: "CreateEditDialog" });
    },
    deleteItem(item) {
      this.editedIndex = this.citizens.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.setDialogComponent({ component: "DeleteDialog" });
    },
    createItem() {
      this.setDialogComponent({ component: "CreateEditDialog" });
    },
  },
};
</script>