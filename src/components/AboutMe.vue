<template>
  <div class="aboutme">
    <v-container py-5>
      <h2 class="display-1 pb-5 text-xs-center text-sm-left">{{ $vuetify.t('$vuetify.sections.aboutMe') }}</h2>
      <v-layout row wrap reverse justify-space-between>
        <v-flex :class="{ 'pb-4': $vuetify.breakpoint.xsOnly }" xs12 sm4 md3 lg3>
          <v-layout row justify-center>
            <v-avatar size="200">
              <img src="@/assets/aboutme/avatar.png" alt="alt">
            </v-avatar>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm7 md8 lg9>
          <v-layout align-center justify-space-between column fill-height>
            <v-flex xs3>
              <p class="aboutme_paragraph mb-2">{{ $vuetify.t('$vuetify.aboutMe.bio') }}</p>
              <p class="aboutme_paragraph mb-4">{{ $vuetify.t('$vuetify.aboutMe.learnMore') }}</p>
            </v-flex>
            <v-flex xs3>
              <v-btn flat round class="aboutme_github grey darken-3" href="https://github.com/fpdrozd" target="_blank">
                <span class="mr-3"><i class="fab fa-github"></i></span>
                <span>{{ $vuetify.t('$vuetify.aboutMe.myGithub') }}</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.aboutme {
  background-color: #212121;
}
.aboutme_paragraph {
  font-size: 1em;
  text-align: justify;
}
</style>
