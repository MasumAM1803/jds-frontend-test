<template>
  <div>
    <alert />
    <DialogCRUD />
    <div
      id="home"
      class="home-container bg_home text-center"
      style="padding-top: 100px"
    >
      <h1 class="text-uppercase">program bantuan<br />pandemi Covid-19</h1>
      <p>
        Bantuan pemerintah kepada masyarakat Indonesia yang terdampak oleh pandemi Covid-19
      </p>
      <v-btn
        v-if="!admin"
        :to="'/login'"
        large
        class="btn-home"
        color="primary"
      >
        Login
      </v-btn>
      <v-btn
        v-if="admin"
        :to="'/list-data'"
        large
        class="btn-home"
        color="primary"
      >
        daftar data warga
      </v-btn>
    </div>
    <v-footer app style="max-height: 40px; background-color: rgb(23,23,23); color: rgb(102,102,102)">
      <span class="ml-16 mt-1">Ma'sum A M &copy; 2021</span>
      <v-spacer></v-spacer>
      <a href="https://www.linkedin.com/in/masumabdulmatin/" target="_blank" class="mr-2"> 
        <v-icon class="mt-1" style="color:rgb(102,102,102)">mdi-linkedin</v-icon>
      </a>
      <a href="https://www.instagram.com/masumam03/" target="_blank" class="mr-16"> 
        <v-icon class="mt-1" style="color:rgb(102,102,102)">mdi-instagram</v-icon>
      </a>
    </v-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Alert: () => import("../components/Alert.vue"),
    DialogCRUD: () => import("../components/crud/DialogCRUD.vue"),
  },

  computed: {
    ...mapGetters({
      statusAdmin: "auth/admin",
    }),

    admin: {
      get() {
        return this.statusAdmin;
      },
      set(value) {
        this.setStatusAdmin(value);
      },
    },
  },

  methods: {
    ...mapActions({
      setDialogComponent: "dialog/setComponent",
    }),
    createItem() {
      this.setDialogComponent({ component: "CreateEditDialog" });
    },
  },
};
</script>

<style scoped>
h1,
p {
  margin-bottom: 20px;
}
.btn-home {
  font-size: 20px;
}
.home-container {
  min-height: 530px;
}
.bg_home {
  background: url("../assets/image/background_shape.jpg");
  background-size: cover;
}
a{
  text-decoration: none;
}
</style>