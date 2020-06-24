<template>
  <div>
    <QACard :qa="{uid:1,
    qid:1,content:'10'}" />
  </div>
</template>
<script>
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import QACard from './components/QACard';

export default {
  name: 'LightNote',
  components: { QACard },
  props: ['note'],
  data: () => ({
  }),
};
</script>
