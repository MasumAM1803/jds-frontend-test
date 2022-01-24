<template>
  <v-card>
    <alert />
    <v-card-title>
      <span class="text-h5">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="10">
            <v-text-field
              ref="nama"
              v-model="editedItem.nama"
              label="Nama"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" sm="2">
            <v-text-field
              ref="umur"
              v-model="editedItem.umur"
              label="Umur"
              type="number"
              placeholder="0"
              min="25"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              ref="nik"
              v-model="editedItem.nik"
              label="NIK"
              type="number"
              placeholder="0"
              min="0"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              ref="no_kk"
              v-model="editedItem.no_kk"
              label="No. Kartu Keluarga"
              type="number"
              placeholder="0"
              min="0"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-select
              ref="jenis_kelamin"
              v-model="editedItem.jenis_kelamin"
              :item-text="editedItem.jenis_kelamin"
              :item-value="editedItem.jenis_kelamin"
              :items="gender"
              label="Jenis Kelamin"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
             <v-select
              ref="provinsi"
              v-model="editedItem.provinsi"
              v-on:change="getCity(editedItem.provinsi.id)"
              :items="provinces"
              item-text="name"
              item-value="name"
              label="Provinsi"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-select
              ref="kota"
              v-model="editedItem.kota"
              v-on:change="getDistrict(editedItem.kota.id)"
              :items="city"
              item-text="name"
              item-value="name"
              label="Kab/Kota"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-select
              ref="kecamatan"
              v-model="editedItem.kecamatan"
              v-on:change="getVillage(editedItem.kecamatan.id)"
              :items="district"
              item-text="name"
              item-value="name"
              label="Kecamatan"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-select
              ref="desa"
              v-model="editedItem.desa"
              :items="village"
              item-text="name"
              item-value="name"
              label="Desa"
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              ref="alamat"
              v-model="editedItem.alamat"
              label="Alamat"
              maxlength="255"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="6" sm="6">
            <v-text-field
              ref="rt"
              v-model="editedItem.rt"
              label="RT"
              type="number"
              min="1"
              max="13"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6" sm="6">
            <v-text-field
              ref="rw"
              v-model="editedItem.rw"
              label="RW"
              type="number"
              min="1"
              max="9"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              ref="penghasil_sebelum_pandemi"
              v-model="editedItem.penghasil_sebelum_pandemi"
              label="Penghasilan Sebelum Pandemi"
              type="number"
              min="0"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              ref="penghasil_sesudah_pandemi"
              v-model="editedItem.penghasil_sesudah_pandemi"
              label="Penghasilan Sesudah Pandemi"
              type="number"
              min="0"
              @wheel="$event.target.blur()"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-radio-group v-model="editedItem.alasan" ref="alasan">
              <v-radio
                label="Kehilangan pekerjaan"
                value="Kehilangan pekerjaan"
              ></v-radio>
              <v-radio
                label="Kepala keluarga terdampak atau korban Covid-19"
                value="Kepala keluarga terdampak atau korban Covid-19"
              ></v-radio>
              <v-radio
                label="Tergolong fakir/miskin semenjak sebelum Covid-19"
                value="Tergolong fakir/miskin semenjak sebelum Covid-19"
              ></v-radio>
              <v-radio :value="editedItem.textSelection">
                <template v-slot:label>
                  <v-text-field
                    ref="pilihan"
                    v-model="editedItem.textSelection"
                  ></v-text-field>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" sm="6">
            <v-file-input
              ref="foto_ektp"
              v-model="editedItem.foto_ektp"
              accept="image/jpg, image/jpeg, image/png, image/bmp"
              placeholder="Foto EKTP"
              prepend-icon="mdi-camera"
              label="Foto EKTP"
              @change="onFileEktp"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-file-input
              ref="foto_kk"
              v-model="editedItem.foto_kk"
              accept="image/jpg, image/jpeg, image/png, image/bmp"
              placeholder="Foto Kartu Keluarga"
              prepend-icon="mdi-camera"
              label="Foto Kartu Keluarga"
              @change="onFileKK"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-checkbox
              label="Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."
              v-model="enabled"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click.native="close()"> Batal </v-btn>
      <v-btn color="success" text @click="save()" :disabled="!enabled">
        Simpan
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      enabled: false,
      imageUrlEktp: '',
      imageUrlKK: '',
    };
  },

  components: {
    Alert: () => import("../Alert.vue"),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Masukan Data Baru" : "Ubah Data";
    },
    ...mapGetters({
      editedIndexs: "crud/editedIndexs",
      editedItems: "crud/editedItems",
      defaultItems: "crud/defaultItems",
      citizens: "crud/citizens",
      genders: "crud/genders",
    }),
    ...mapState(['provinces', 'city', 'district', 'village']),
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
    gender: {
      get() {
        return this.genders;
      },
    },
  },

  methods: {
    ...mapActions({
      setEditedIndex: "crud/setEditedIndex",
      setEditedItem: "crud/setEditedItem",
      setDefaultItem: "crud/setDefaultIitem",
      setCitizens: "crud/setCitizens",
      setAlert: "alert/set",
    }),

    getProvinces() {
      const config = {
        api: 'http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'
      }
      this.$store.dispatch("getProvinces", config);
    },

    getCity(id) {
      const config = {
        api: `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
      }
      this.$store.dispatch("getCity", config);
    },

    getDistrict(id) {
      const config = {
        api: `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`
      }
      this.$store.dispatch("getDistrict", config);
    },

    getVillage(id) {
      const config = {
        api: `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`
      }
      this.$store.dispatch("getVillage", config);
    },

    clearForm() {
      this.editedItem.textSelection = "";
      this.enabled = false;
    },

    close() {
      this.$emit("closed", false);
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.clearForm();
      });
    },

    pushData() {
      if (this.editedIndex > -1) {
        Object.assign(this.citizens[this.editedIndex], this.editedItem);
      } else {
        let setTimer = Math.floor(Math.random() * 2000);
        console.log("Time: " + setTimer);
        if (setTimer > 1500) {
          setTimeout(() => {
            console.log("Interval Server Error");
            this.notifAlert("Interval Server Error");
          }, setTimer);
        } else {
          setTimeout(() => {
            console.log("Berhasil");
          }, Math.floor(Math.random() * 2000));
          this.citizens.push(this.editedItem);
          console.log(this.editedItem);
          this.setAlert({
            status: true,
            color: "success",
            text: "Berhasil di Simpan",
            icon: "mdi-check",
          });
        }
      }
      this.close();
    },

    notifAlert(text) {
      this.setAlert({
        status: true,
        color: "error",
        text: text,
        icon: "mdi-alert",
      });
    },

    assignData() {
      this.editedItem.foto_ektp = {
        name: this.editedItem.foto_ektp.name,
        size: this.editedItem.foto_ektp.size,
        imageUrl: this.imageUrlEktp
      }
      this.editedItem.foto_kk = {
        name: this.editedItem.foto_kk.name,
        size: this.editedItem.foto_kk.size,
        imageUrl: this.imageUrlKK
      }
      this.editedItem.provinsi = this.editedItem.provinsi.name;
      this.editedItem.kota = this.editedItem.kota.name;
      this.editedItem.kecamatan = this.editedItem.kecamatan.name;
      this.editedItem.desa = this.editedItem.desa.name;
    },

    save() {
      if (this.editedItem.nama == "") {
        this.notifAlert("Nama Tidak Boleh Kosong");
        this.$refs.nama.focus();
      } else if (this.editedItem.umur == 0) {
        this.notifAlert("Umur Tidak Boleh Kosong");
        this.$refs.umur.focus();
      } else if (this.editedItem.umur < 25) {
        this.notifAlert("Umur Tidak Kurang dari 25 Tahun");
        this.$refs.umur.focus();
      } else if (this.editedItem.nik == 0) {
        this.notifAlert("NIK Tidak Boleh Kosong");
        this.$refs.nik.focus();
      } else if (this.editedItem.nik.length < 16) {
        this.notifAlert("NIK Tidak Boleh Kurang dari 16 Digit");
        this.$refs.nik.focus();
      } else if (this.editedItem.nik.length > 16) {
        this.notifAlert("NIK Tidak Boleh Lebih dari 16 Digit");
        this.$refs.nik.focus();
      } else if (this.editedItem.no_kk == 0) {
        this.notifAlert("Nomor Kartu keluarga Tidak Boleh Kosong");
        this.$refs.no_kk.focus();
      } else if (this.editedItem.no_kk.length < 16) {
        this.notifAlert("Nomor Kartu keluarga Kurang dari 16 Digit");
        this.$refs.no_kk.focus();
      } else if (this.editedItem.no_kk.length > 16) {
        this.notifAlert("Nomor Kartu keluarga Lebih dari 16 Digit");
        this.$refs.no_kk.focus();
      } else if (this.editedItem.jenis_kelamin == "") {
        this.notifAlert("Jenis Kelamin Tidak Boleh Kosong");
        this.$refs.jenis_kelamin.focus();
      } else if (this.editedItem.provinsi == "") {
        this.notifAlert("Provinsi Tidak Boleh Kosong");
        this.$refs.provinsi.focus();
      } else if (this.editedItem.kota == "") {
        this.notifAlert("Kab/Kota Tidak Boleh Kosong");
        this.$refs.kota.focus();
      } else if (this.editedItem.kecamatan == "") {
        this.notifAlert("Kecamatan Tidak Boleh Kosong");
        this.$refs.kecamatan.focus();
      } else if (this.editedItem.desa == "") {
        this.notifAlert("Kelurahan/Desa Tidak Boleh Kosong");
        this.$refs.desa.focus();
      } else if (this.editedItem.alamat == "") {
        this.notifAlert("Alamat Tidak Boleh Kosong");
        this.$refs.alamat.focus();
      } else if (this.editedItem.rt == 0) {
        this.notifAlert("RT Tidak Boleh Kosong");
        this.$refs.rt.focus();
      } else if (this.editedItem.rw == 0) {
        this.notifAlert("RW Tidak Boleh Kosong");
        this.$refs.rw.focus();
      } else if (this.editedItem.alasan == "") {
        this.notifAlert("Pilihan tidak boleh kosong");
      } else if (this.editedItem.foto_ektp == null) {
        this.notifAlert("Foto EKTP tidak boleh kosong");
        this.$refs.foto_ektp.focus();
      } else if (this.editedItem.foto_kk == null) {
        this.notifAlert("Foto Kartu Keluarga tidak boleh kosong");
        this.$refs.foto_kk.focus();
      } else if (this.editedItem.foto_ektp.size > 2000000) {
        this.notifAlert("File foto EKTP tidak boleh lebih dari 2MB");
        this.$refs.foto_ektp.focus();
      } else if (this.editedItem.foto_kk.size > 200000) {
        this.notifAlert("File foto KK tidak boleh lebih dari 2MB");
        this.$refs.foto_kk.focus();
      } else if (this.editedItem.textSelection != "") {
        this.assignData()
        this.editedItem.alasan = this.editedItem.textSelection;
        this.pushData();
      } else {
        this.assignData()
        this.pushData();
      }
    },
    
    onFileEktp(file) {
      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onload = e => {
        this.imageUrlEktp = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    onFileKK(file) {
      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onload = e => {
        this.imageUrlKK = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  },
  created: function () {
    this.getProvinces();
  },
};
</script>

<style scoped>
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>