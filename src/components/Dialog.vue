<template>
  <keep-alive>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      persistent
      transition="dialog-bottom-transition"
    >
      <Login />
    </v-dialog>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  components: {
    Login: () => import("./Login.vue"),
  },
};
</script>