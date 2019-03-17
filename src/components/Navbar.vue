<template>
  <div>
    <v-navigation-drawer app temporary class="grey darken-4" v-model="drawer">
      <v-list>
        <v-list-tile avatar v-for="navItem in navItems"
          :key="navItem.section" @click="navigate(navItem.section)">
          <v-list-tile-action>
            <v-icon small>{{ navItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ navItem.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense class="nav" :class="{ scrolled: scrolled }" fixed flat>
      <v-btn dark flat @click="changeLanguage">
        <v-icon left>fa-language</v-icon>
        <span>{{ language }}</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="navItem in navItems" :key="navItem.section" @click="navigate(navItem.section)">
          <v-icon left small>{{ navItem.icon }}</v-icon>
          <span>{{ navItem.label }}</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer"></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    scrolled: Boolean
  },
  data() {
    return {
      language: 'English',
      drawer: false
    }
  },
  computed: {
    navItems() {
      return [
        {
          label: this.$vuetify.t('$vuetify.sections.aboutMe'),
          section: 'AboutMe',
          icon: 'fa-user'
        },
        {
          label: this.$vuetify.t('$vuetify.sections.mySkills'),
          section : 'MySkills',
          icon: 'fa-terminal'
        },
        {
          label: this.$vuetify.t('$vuetify.sections.myProjects'),
          section: 'MyProjects',
          icon: 'fa-briefcase'
        },
        {
          label: this.$vuetify.t('$vuetify.sections.contact'),
          section: 'Contact',
          icon: 'fa-comment-alt'
        }
      ];
    }
  },
  methods: {
    changeLanguage() {
      this.language = this.language == 'English' ? 'Polski' : 'English';
      this.$vuetify.lang.current = this.language == 'English' ? 'en' : 'pl';
    },
    navigate(section) {
      this.drawer = false;
      this.$vuetify.goTo(`#${section}`, { offset: 48 });
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: transparent;
}
.nav.scrolled {
  background-color: rgba(30, 30, 30, 0.6);
}
</style>
