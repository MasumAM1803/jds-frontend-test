<template>
  <v-navigation-drawer app v-model="drawer" hide-overlay temporary>
    <v-list>
      <v-list-item v-if="admin">
        <v-list-item-avatar>
          <v-img
            :src="
              user.photo_profile
                ? apiDomain + user.photo_profile
                : 'https://randomuser.me/api/portraits/men/78.jpg'
            "
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ user }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list v-if="!admin">
      <div class="pa-2">
        <v-btn block color="primary" dark @click="logout">
          <v-icon left>mdi-lock-open</v-icon> Masuk
        </v-btn>
      </div>
      <v-list-item href="#home">
        <v-list-item-icon>
          <v-icon left>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Beranda</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list class="mt-4" color="rgba(1, 1, 1, 0)" v-if="admin">
      <v-list-item
        v-for="(item, index) in menus"
        :key="`menu-${index}`"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append v-if="admin">
      <div class="pa-2">
        <v-btn block color="red" dark @click="logout">
          <v-icon left>mdi-lock</v-icon> Keluar
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      statusAdmin: "auth/admin",
      drawers: "navbar/drawers",
      users: "navbar/users",
      menus: "navbar/menus",
    }),
    admin: {
      get() {
        return this.statusAdmin;
      },
      set(value) {
        this.setStatusAdmin(value);
      },
    },
    drawer: {
      get() {
        return this.drawers;
      },
      set(value) {
        this.setDrawer(value);
      },
    },
    user: {
      get() {
        return this.users;
      },
    },
    menu: {
      get() {
        return this.menus;
      },
    },
  },

  methods: {
    ...mapActions({
      setStatusAdmin: "auth/setAdmin",
      setDrawer: "navbar/setDrawer",
    }),

    logout() {
      this.admin = false;
      this.$router.push("/login").catch((error) => {
        if (
          error.name !== "NavigationDuplicated" &&
          !error.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          this.setAlert({
            status: true,
            color: "error",
            text: "Avoided redundant navigation to current location",
          });
        }
      });
    },
  },
};
</script>