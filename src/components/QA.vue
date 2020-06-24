<template>
  <div>
    <QACard :qa="{uid:1,
    qid:1,content:'10'}" />
  </div>
</template>
<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import QACard from './components/QACard.vue';
import { QAprops } from '../utils/constructors';
import _RawHttp from '../utils/request';

const fetchQAListURL = '/qa';
export default Vue.extend({
  name: 'LightNote',
  components: { QACard },
  props: ['note'],
  async mounted() {
    const qalist:Array<QAprops> = await _RawHttp.get(fetchQAListURL);
    console.log(qalist);
  },
  data: () => ({
    qacards: [],
  }),
});
</script>
