<template>
  <div>
    <QACard v-for="qacard in qacards"
    :key="qacard.sid"
    :qa="qacard" />
  </div>
</template>
<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import QACard from './components/QACard.vue';
// eslint-disable-next-line no-unused-vars
import { QAprops } from '../utils/constructors';
import _RawHttp from '../utils/request';

const fetchQAListURL = '/qa/getlist';
export default Vue.extend({
  name: 'LightNote',
  components: { QACard },
  props: ['note'],
  async mounted() {
    const res = await _RawHttp.get(fetchQAListURL);
    const qalist:Array<QAprops> = res.retcode === 0 ? res.result : [];
    qalist && (this.qacards = qalist);
  },
  computed: {
    newq() { return this.$store.state.newq; },
  },
  watch: {
    newq(qa) {
      this.$data.qacards.unshift(qa);
    },
  },
  data() {
    return ({
      qacards: [],

    });
  },
});
</script>
