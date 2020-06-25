<template>
  <div id="app">
    <v-app id="inspire">
      <TipBar />
      <TopBar />
      <v-main>
        <v-container fluid>
          <MainPage />
        </v-container>
      </v-main>
      <create-q-a />
    </v-app>
  </div>
</template>

<script lang='ts'>
import MainPage from '../components/MainPage.vue';
import TopBar from '../layouts/TopBar.vue';
import CreateQA from '../components/components/CreateQA.vue';
import TipBar from '../components/components/TipBar.vue';

export default {
  name: 'Dashboard',
  components: {
    MainPage,
    TopBar,
    CreateQA,
    TipBar,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
