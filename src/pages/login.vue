<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    v-model="loginemail"
                    name="login"
                    prepend-icon="email"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    v-model="loginpassword"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <a class="ml-3" @click="maildia = !maildia;$refs.form.reset()">没有账号? 注册</a>
                <v-spacer />
                <v-btn
                  color="primary"
                  :disabled="!loginemail||!loginpassword"
                  @click.stop="loginConfirm"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog v-model="maildia" width="500px">
      <v-card class="mx-auto" style="max-width: 500px;">
        <v-toolbar color="deep-purple accent-4" cards dark flat>
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-card-title class="title font-weight-regular">Sign up</v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form ref="form" v-model="form" class="pa-4 pt-6">
          <v-text-field
            v-model="password"
            :rules="[rules.password, rules.length(6)]"
            filled
            color="deep-purple"
            counter="6"
            label="Password"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
          <v-text-field v-model="username" filled color="deep-purple" label="Phone number">
          </v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.email]"
            filled
            color="deep-purple"
            label="Email address"
            type="email"
          ></v-text-field>
          <v-checkbox v-model="agreement" :rules="[rules.required]" color="deep-purple">
            <template v-slot:label>
              I agree to the&nbsp;
              <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
              &nbsp;and&nbsp;
              <a
                href="#"
                @click.stop.prevent="dialog = true"
              >Privacy Policy</a>*
            </template>
          </v-checkbox>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="$refs.form.reset()">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!form"
            :loading="isLoading"
            class="white--text"
            color="deep-purple accent-4"
            @click="registerConfirm"
            depressed
          >Submit</v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog" absolute max-width="400" persistent>
          <v-card>
            <v-card-title class="headline grey lighten-3">Legal</v-card-title>
            <v-card-text>不同意也要同意噢</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text @click="agreement = false, dialog = false">No</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                class="white--text"
                color="deep-purple accent-4"
                @click="agreement = true, dialog = false"
              >Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import _RawHttp from '../utils/request';
import { User } from '../utils/constructors';

const loginUrl = '/users/login';
// const registerUrl = '/users/register';

export default Vue.extend({
  name: 'login',
  props: {
    source: String,
  },
  methods: {
    async loginConfirm() {
      const { loginemail, loginpassword } = this.$data;
      const data = { email: loginemail, password: loginpassword };
      const res = await _RawHttp.post(loginUrl, data);
      if (res.retcode === 0) {
        const user:User = res.result;
        alert('登录成功');
        this.$store.dispatch('setUid', user.uid);
        this.$router.push('/dashboard');
      } else if (res.retcode === 1) {
        alert(res.result);
      } else {
        alert(res.result.message);
      }
    },
    async registerConfirm() {
      console.log(1);
    },
  },
  data: () => ({
    agreement: false,
    maildia: false,
    dialog: false,
    email: undefined,
    loginemail: undefined,
    loginpassword: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    username: undefined,
    rules: {
      email: (v: string) => (v || '').match(/@/) || 'Please enter a valid email',
      length: (len: number) => (v: string) => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: (v: string) => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)
        || 'Password must contain an upper case letter, a numeric character, and a special character',
      required: (v: any) => !!v || 'This field is required',
    },
  }),
});
</script>
