<template>
  <div class="myprojects">
    <v-container grid-list-xl py-5>
      <h2 class="display-1 pb-5 text-xs-center text-sm-left">{{ $vuetify.t('$vuetify.sections.myProjects') }}</h2>
      <p class="text-xs-center text-sm-left mb-1">{{ $vuetify.t('$vuetify.myProjects.description') }}</p>
      <v-layout row wrap >
        <v-flex xs12 sm6 md4 lg4 xl3 v-for="project in projects" :key="project.title">
          <v-card flat class="project">
            <v-img :src="project.thumbnail"></v-img>
            <v-card-title primary-title>
              <h3 class="headline">{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </v-card-title>
            <v-card-actions>
              <v-btn flat class="project_view grey darken-3" :href="project.link" target="_blank">
                <v-icon left small>fa-eye</v-icon>
                <span>{{ $vuetify.t('$vuetify.myProjects.view') }}</span>
              </v-btn>
              <v-btn flat class="project_repository grey darken-3" :href="project.repository" target="_blank">
                <v-icon left small>fa-code-branch</v-icon>
                <span>{{ $vuetify.t('$vuetify.myProjects.repository') }}</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return [
        {
          title: 'Socket Chat',
          thumbnail: require('@/assets/myprojects/SocketChat.png'),
          description: this.$vuetify.t('$vuetify.myProjects.projectDescriptions.SocketChat'),
          link: 'https://fpdrozd.com/socketchat',
          repository: 'https://github.com/fpdrozd/socketchat'
        },
        {
          title: 'Perceptron',
          thumbnail: require('@/assets/myprojects/Perceptron.png'),
          description: this.$vuetify.t('$vuetify.myProjects.projectDescriptions.Perceptron'),
          link: 'https://fpdrozd.com/neuralnetworks/perceptron',
          repository: 'https://github.com/fpdrozd/perceptron'
        }
      ];
    }
  }
}
</script>

<style scoped>
.myprojects {
  background-color: #212121;
}
.project {
  background-color: #2b2b2b;
}
</style>
