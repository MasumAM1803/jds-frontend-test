<template>
  <v-app>
    <alert />
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-btn icon dark @click="close" color="black">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 text--accent-3"
                          style="color: rgb(6, 148, 86)"
                        >
                          MASUK
                        </h1>
                        <v-form>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            name="Password"
                            prepend-icon="mdi-lock"
                            @click:append="showPassword = !showPassword"
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mb-8">
                        <v-btn
                          rounded
                          color="rgb(6,148,86)"
                          dark
                          @click="submit"
                          >Masuk</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class="accent-3"
                      style="background-color: rgb(6, 148, 86)"
                    >
                      <v-card-text class="white--text mt-5">
                        <h1 class="text-center display-1">Hallo, Admin !</h1>
                        <p class="text-center mb-0">
                          Silahkan Masukkan Data Anda<br />Dan Klik Masuk
                        </p>
                      </v-card-text>
                      <v-img
                        :src="
                          require('../assets/image/undraw_login_re_4vu2.svg')
                        "
                        class="mt--5 mb-7"
                        contain
                        height="180"
                      />
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    guest: true,
    admin: false,
    step: 1,
    email: "",
    password: "",
    showPassword: "",
  }),

  components: {
    Alert: () => import("../components/Alert.vue"),
  },

  methods: {
    close() {
      this.$router.push('/home')
    },
    clearForm() {
      this.email = "";
      this.password = "";
    },
    ...mapActions({
      setAdmin: "auth/setAdmin",
      setAlert: "alert/set",
    }),
    submit() {
      if ((this.email == "") || (this.password == "")){
        this.setAlert({
          status: true,
          color: "error",
          text: "Email & Password Tidak Boleh Kosong",
          icon: "mdi-alert",
        })
      } else if ((this.email == "admin@gmail.com") && (this.password == "1234")) {
        this.admin = true;
        this.setAdmin(this.admin);
        this.$router.push('/home')
        this.setAlert({
          status: true,
          color: "success",
          text: "Berhasil Masuk",
          icon: "mdi-check",
        })
      } else if(this.password != "1234") {
        this.setAlert({
          status: true,
          color: "error",
          text: "Password Salah",
          icon: "mdi-alert",
        })
      } else if(this.email != "admin@gmail.com") {
        this.setAlert({
          status: true,
          color: "error",
          text: "Akun tidak dikenali",
          icon: "mdi-alert",
        })
      }
      
    },
  },
};
</script>