<template>
  <keep-alive>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
    >
      <component :is="currentComponent" @closed="setDialogStatus"></component>
    </v-dialog>
  </keep-alive>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    DeleteDialog: () => import("./Delete.vue"),
    CreateEditDialog: () => import("./CreateEdit.vue"),
  },
  computed: {
    ...mapGetters({
      dialogStatus: "dialog/status",
      currentComponent: "dialog/component",
    }),

    dialog: {
      get() {
        return this.dialogStatus;
      },
      set(value) {
        this.setDialogStatus(value);
      },
    },
  },

  methods: {
    ...mapActions({
      setDialogStatus: "dialog/setStatus",
    }),
  },
};
</script>