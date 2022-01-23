<template>
  <v-card>
    <v-card-title> Apakah anda yakin akan menghapus data ini? </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.native="closeDeleteDialog()">Batal</v-btn>
      <v-btn color="error" @click="deleteItemConfirm()">Hapus</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  watch: {
    dialogDelete(val) {
      val || this.closeDeleteDialog();
    },
  },

  computed: {
    ...mapGetters({
      editedIndexs: "crud/editedIndexs",
      editedItems: "crud/editedItems",
      defaultItems: "crud/defaultItems",
      citizens: "crud/citizens",
    }),
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

  methods: {
    ...mapActions({
      setEditedIndex: "crud/setEditedIndex",
      setEditedItem: "crud/setEditedItem",
      setDefaultItem: "crud/setDefaultIitem",
    }),
    clearForm() {
      this.editedItem.textSelection = "";
      this.enabled = false;
    },
    closeDeleteDialog() {
      this.$emit("closed", false);
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.clearForm();
      });
    },
    deleteItemConfirm() {
      var deletedItem = this.citizen.splice(this.editedIndexs, 1);
      console.log(deletedItem);
      this.closeDeleteDialog();
    },
  },
};
</script>