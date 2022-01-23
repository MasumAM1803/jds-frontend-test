<template>
  <v-app>
    <!-- SIDEBAR -->
    <SideBar />
    <!-- TOPNAV -->
    <TopNav />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    SideBar: () => import("./components/SideBar.vue"),
    TopNav: () => import("./components/TopNav.vue"),
  },
};
</script>