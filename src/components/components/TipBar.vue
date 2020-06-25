<template>
      <v-snackbar
    :value="this.$store.state.showTip"
    :color="this.$store.state.tipType"
    top>
      {{ this.$store.state.tip }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs"
        @click="this.$store.dispatch('closeTip')">Close</v-btn>
      </template>
    </v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TipBar',
});
</script>
