<template>
  <v-container fluid class="cover pa-0" fill-height>
    <v-layout class="coverLayout" text-xs-center justify-center align-center>
      <v-flex xs10 sm7 md4 lg4 xl3 class="header">
        <h1 class="header_title display-3 font-weight-medium pb-2">Filip Drozd</h1>
        <p class="header_description subheading pt-2">I design, build and operate full-stack web applications</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.cover {
  height: 100vh;
}
.coverLayout {
  background-color: rgba(0,0,0, 0.7);
}

.header {
  z-index: 1;
}
.header_title {
  border-bottom: solid 2px #fff;
}
</style>
