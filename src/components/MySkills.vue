<template>
  <div class="myskills">
    <v-container py-5>
      <h2 class="display-1 pb-5 text-xs-center text-sm-left">{{ $vuetify.t('$vuetify.sections.mySkills') }}</h2>
      <p class="text-xs-center text-sm-left">{{ $vuetify.t('$vuetify.mySkills.description') }}</p>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 sm6 xl5 :class="{ 'pr-3': $vuetify.breakpoint.smAndUp }">
          <v-card class="frontend" :class="{ 'mb-5': $vuetify.breakpoint.xsOnly }" flat>
            <h3 class="frontend_header heading text-xs-center py-3">Front-end</h3>
            <v-card-text>
              <div class="skill" avatar
                v-for="(skill, index) in frontendSkills" :key="skill.id"
                :class="{ 'pb-3': index+1 < frontendSkills.length, 'pl-4': skill.sub }">
                <div class="skill_tech px-3 py-1 mr-2" v-for="tech in skill.techs" :key="tech.title">
                    <img class="skill_icon pr-3" height="16px" :src="tech.icon">
                    <span>{{ tech.title }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 xl5 :class="{ 'pl-3': $vuetify.breakpoint.smAndUp }">
          <v-card class="backend" flat>
            <h3 class="backend_header heading text-xs-center py-3">Back-end</h3>
            <v-card-text>
              <div class="skill" avatar
                v-for="(skill, index) in backendSkills" :key="skill.id"
                :class="{ 'pb-3': index+1 < backendSkills.length, 'pl-4': skill.sub }">
                <div class="skill_tech px-3 py-1 mr-2" v-for="tech in skill.techs" :key="tech.title">
                    <img class="skill_icon pr-3" height="16px" :src="tech.icon">
                    <span>{{ tech.title }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontendSkills: [
        { id: 1, techs: [
          { icon: require('@/assets/myskills/html.png'), title: 'HTML5'},
          { icon: require('@/assets/myskills/bem.png'), title: 'BEM' }
        ], sub: false },
        { id: 2, techs: [{ icon: require('@/assets/myskills/css3.png'), title: 'CSS 3' }], sub: false },
        { id: 3, techs: [{ icon: require('@/assets/myskills/rwd.png'), title: 'Responsive Web Design' }], sub: false },
        { id: 4, techs: [{ icon: require('@/assets/myskills/js.png'), title: 'JavaScript (ES6)' }], sub: false },
        { id: 5, techs: [
          { icon: require('@/assets/myskills/vue.png'), title: 'Vue.js' },
          { icon: require('@/assets/myskills/vuetify.png'), title: 'Vuetify' }
        ], sub: true },
        { id: 6, techs: [{ icon: require('@/assets/myskills/jquery.png'), title: 'jQuery' }], sub: true },
        { id: 7, techs: [{ icon: require('@/assets/myskills/ajax.png'), title: 'AJAX' }], sub: true },
        { id: 8, techs: [{ icon: require('@/assets/myskills/babel.png'), title: 'Babel' }], sub: true },
        { id: 9, techs: [
          { icon: require('@/assets/myskills/webpack.png'), title: 'Webpack' },
          { icon: require('@/assets/myskills/rollup.png'), title: 'Rollup' }
        ], sub: true },
        { id: 10, techs: [
          { icon: require('@/assets/myskills/mocha.png'), title: 'Mocha' },
          { icon: require('@/assets/myskills/jest.png'), title: 'Jest' }
        ], sub: true },
        { id: 11, techs: [
          { icon: require('@/assets/myskills/yarn.png'), title: 'Yarn' },
          { icon: require('@/assets/myskills/npm.png'), title: 'Npm' }
        ], sub: true },
        { id: 12, techs: [{ icon: require('@/assets/myskills/git.png'), title: 'Git' }], sub: false }
      ],
      backendSkills: [
        { id: 1, techs: [
          { icon: require('@/assets/myskills/debian.png'), title: 'Debian'},
          { icon: require('@/assets/myskills/ubuntu.png'), title: 'Ubuntu' }
        ], sub: false },
        { id: 2, techs: [
          { icon: require('@/assets/myskills/apache.png'), title: 'Apache'},
          { icon: require('@/assets/myskills/nginx.png'), title: 'Nginx' }
        ], sub: false },
        { id: 3, techs: [{ icon: require('@/assets/myskills/docker.png'), title: 'Docker' }], sub: false },
        { id: 4, techs: [{ icon: require('@/assets/myskills/firebase.png'), title: 'Firebase' }], sub: false },
        { id: 5, techs: [{ icon: require('@/assets/myskills/nodejs.png'), title: 'Node.js' }], sub: false },
        { id: 6, techs: [{ icon: require('@/assets/myskills/expressjs.png'), title: 'Express.js' }], sub: true },
        { id: 7, techs: [{ icon: require('@/assets/myskills/socketio.png'), title: 'Socket.io' }], sub: true },
        { id: 8, techs: [{ icon: require('@/assets/myskills/mongoose.png'), title: 'Mongoose' }], sub: true },
        { id: 9, techs: [{ icon: require('@/assets/myskills/python.png'), title: 'Python' }], sub: false },
        { id: 10, techs: [{ icon: require('@/assets/myskills/tensorflow.png'), title: 'Tensorflow' }], sub: true },
        { id: 11, techs: [{ icon: require('@/assets/myskills/php.png'), title: 'PHP' }], sub: false },
        { id: 12, techs: [
          { icon: require('@/assets/myskills/mongodb.png'), title: 'MongoDB' },
          { icon: require('@/assets/myskills/mariadb.png'), title: 'MariaDB' }
        ], sub: false },
        { id: 13, techs: [{ icon: require('@/assets/myskills/git.png'), title: 'Git' }], sub: false }
      ]
    };
  }
}
</script>

<style scoped>
.myskills {
  background-color: #252525;
}
.frontend, .backend {
  background-color: #2b2b2b;
}

.frontend_header, .backend_header {
  background-color: #343434;
}

.skill {
  font-size: 1em;
  display: flex;
}
.skill_tech {
  box-sizing: content-box;
  height: 20px;
  line-height: 20px;
  border-radius: 2px;
  background-color: #363636;
}
.skill_icon {
  position: relative;
  top: 2px;
}
</style>
