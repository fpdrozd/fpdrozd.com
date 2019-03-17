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
                  <v-btn flat class="send" :loading="loading" @click="submit">{{ $vuetify.t('$vuetify.contact.send') }}</v-btn>
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
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.name.isRequired'),
        v => v.length >= 3 || this.$vuetify.t('$vuetify.contact.validation.name.isTooShort'),
        v => v.length <= 30 || this.$vuetify.t('$vuetify.contact.validation.name.isTooLong')
      ],
      emailRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.email.isRequired'),
        v => /.+@.+/.test(v) || this.$vuetify.t('$vuetify.contact.validation.email.mustBeValid')
      ],
      messageRules: [
        v => !!v || this.$vuetify.t('$vuetify.contact.validation.message.isRequired'),
        v => v.length <= 500 || this.$vuetify.t('$vuetify.contact.validation.message.isTooLong')
      ],
      loading: false,
      error: false
    };
  },
  methods: {
    submit() {
      const submit = () => {
        this.loading = true;

        const handleFailure = (res) => { if (!res.data.success) throw Error(); };
        const success = () => this.$refs.form.reset();

        this.axios({
          method: 'post',
          url: '/contact',
          data: {
            name: this.name,
            email: this.email,
            message: this.message
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(handleFailure).then(success)
        .catch(error => this.error = true)
        .then(() => this.loading = false);
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
