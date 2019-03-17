<template>
  <v-app dark class="white--text" id="app" v-scroll="onScroll">
    <Navbar :scrolled="scrolled" />
    <v-content>
      <CoverVideo />
      <Cover />

      <AboutMe id="AboutMe"/>
      <MySkills id="MySkills" />
      <MyProjects id="MyProjects" />
      <Contact id="Contact" />
    </v-content>
    <v-footer class="justify-center py-4">
      <span class="grey--text">&copy;2019 - {{ $vuetify.t('$vuetify.footer.copyright') }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import CoverVideo from '@/components/CoverVideo';
import Cover from '@/components/Cover';
import AboutMe from '@/components/AboutMe';
import MySkills from '@/components/MySkills';
import MyProjects from '@/components/MyProjects';
import Contact from '@/components/Contact';

export default {
  name: 'App',
  components: {
    Navbar,
    CoverVideo,
    Cover,
    AboutMe,
    MySkills,
    MyProjects,
    Contact
  },
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    onScroll() {
      this.scrolled = !!window.scrollY;
    }
  }
}
</script>

<style>
  #app {
    font-size: 16px;
  }

  ::selection {
    background: #999999;
    color: white;
  }
</style>
