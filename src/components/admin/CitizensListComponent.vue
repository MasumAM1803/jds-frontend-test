<template>
    <v-list-item-title>
        {{ citizen.nama }}
    </v-list-item-title>
</template>
<script>
export default {
    props: ["citizen"]
}
</script>