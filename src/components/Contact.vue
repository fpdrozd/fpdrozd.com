<template>
  <div class="contact">
    <v-container py-5>
      <v-layout row justify-center>
        <v-flex xs12 lg8 xl6>
          <v-card flat class="form-card">
            <v-card-title class="justify-center" primary-title>
              <h3 class="display-1">{{ $vuetify.t('$vuetify.sections.contact') }}</h3>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" :class="{ 'px-3': $vuetify.breakpoint.mdAndUp }">
                <v-text-field required :label="$vuetify.t('$vuetify.contact.name')" v-model="name" prepend-icon="fa-user" :rules="nameRules"></v-text-field>
                <v-text-field required :label="$vuetify.t('$vuetify.contact.email')" v-model="email" prepend-icon="fa-envelope" :rules="emailRules"></v-text-field>
                <v-textarea required :counter="500" :label="$vuetify.t('$vuetify.contact.message')" v-model="message" prepend-icon="fa-align-left" :rules="messageRules"></v-textarea>
                <v-alert type="error" :value="error" class="mt-5" outline>{{ $vuetify.t('$vuetify.contact.errorMessage') }}</v-alert>

                <v-layout row justify-center pt-4>
                  <vue-recaptcha ref="recaptcha" @verify="submit" @expired="resetRecaptcha" :sitekey="sitekey">
                    <v-btn flat class="send" :loading="loading">{{ $vuetify.t('$vuetify.contact.send') }}</v-btn>
                  </vue-recaptcha>
                </v-layout>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sitekey: process.env.VUE_APP_RECAPTCHA_KEY,
      nameRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.name.isRequired'),
        v => (v && v.length >= 3) || this.$vuetify.t('$vuetify.contact.validation.name.isTooShort'),
        v => (v && v.length <= 30) || this.$vuetify.t('$vuetify.contact.validation.name.isTooLong')
      ],
      emailRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.email.isRequired'),
        v => /.+@.+/.test(v) || this.$vuetify.t('$vuetify.contact.validation.email.mustBeValid')
      ],
      messageRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.message.isRequired'),
        v => (v && v.length <= 500) || this.$vuetify.t('$vuetify.contact.validation.message.isTooLong')
      ],
      loading: false,
      error: false
    };
  },
  methods: {
    resetRecaptcha() { this.$refs.recaptcha.reset(); },
    submit(recaptcha) {
      const submit = () => {
        this.loading = true;

        const handleFailure = (res) => { if (!res.data.success) throw Error(); };
        const success = () => {
          this.error = false;
          this.$refs.form.reset();
        };
        const reset = () => {
          this.loading = false;
          this.resetRecaptcha();
        };

        this.axios({
          method: 'post',
          url: '/contact',
          data: {
            name: this.name,
            email: this.email,
            message: this.message,
            recaptcha: recaptcha
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(handleFailure).then(success)
        .catch(() => this.error = true).then(reset);
      };

      const valid = this.$refs.form.validate();
      if (valid) submit();
    }
  }
}
</script>

<style scoped>
.contact {
  background-color: #252525;
}
.form-card {
  background-color: transparent;
}
.send {
  background-color: #404040;
}
</style>
