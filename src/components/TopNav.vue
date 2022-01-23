<template>
  <v-app-bar app color="white" sticky elevate-on-scroll>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-btn :to="'/'" id="logo" depressed text>
        <h3>LOGO</h3>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-list
        class="d-flex align-center mt-4"
        color="rgba(1, 1, 1, 0)"
        v-if="admin"
      >
        <v-list-item
          v-for="(item, index) in menus"
          :key="`menu-${index}`"
          :to="item.route"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list class="d-flex align-center" color="rgba(1, 1, 1, 0)">
        <v-list-item v-if="!admin">
          <v-list-item-action-text>
            <v-btn :to="'/home'" text large>Beranda</v-btn>
          </v-list-item-action-text>
          <v-list-item-action-text>
            <v-btn :to="'/login'" text large>Login</v-btn>
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </div>

    <div class="hidden-sm-and-down">
      <v-list class="d-flex align-center">
        <v-list-item v-if="admin">
          <v-menu left bottom :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-list-item-avatar>
                  <v-img
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                  ></v-img>
                </v-list-item-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>{{ user }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-btn @click="logout" color="warning" large text>
                    <v-icon>mdi-lock</v-icon>Keluar
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      statusAdmin: "auth/admin",
      drawers: "navbar/drawers",
      menus: "navbar/menus",
      users: "navbar/users",
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
    menu: {
      get() {
        return this.menus;
      },
    },
    user: {
      get() {
        return this.users;
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
      this.$router.push("/home").catch((error) => {
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