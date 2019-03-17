import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import en from './../locales/en'
import pl from './../locales/pl'


Vue.use(Vuetify, {
  iconfont: 'fa',
  lang: {
    locales: { en, pl },
    current: 'en'
  },
  theme: {
    primary: '#909090'
  }
})
