<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn bottom color="pink" dark v-on="on" fab fixed right @click="dialog = !dialog">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <span>Create</span>
    </v-tooltip>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="blue darken-3">
          <span style="color:white">创建问题</span>
        </v-card-title>
        <v-container grid-list-sm>
          <v-layout row wrap>
            <v-container fluid>
              <v-textarea
                v-model="question"
                label="你的问题"
                clearable
                counter="200"
                outlined
                no-resize
                rows="7"></v-textarea>
            </v-container>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn color="primary">创建文章</v-btn>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">取消</v-btn>
          <v-btn
          :loading="submiting"
          :disabled="!question"
          text
          color="primary"
          @click="confrimSubmit">发布</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import _RawHttp from '../../utils/request.ts';
import Tip, { TipType } from '../../utils/tip.ts';
import { QAprops } from '../../utils/constructors.ts';

const createQuestionURL = '/qa/create';
export default Vue.extend({
  props: {},
  methods: {
    async confrimSubmit() {
      const { question } = this.$data;
      const data = { uid: this.$store.state.uid, content: question };
      this.$data.submiting = true;
      const res = await _RawHttp.post(createQuestionURL, data);
      if (res.retcode === 0) {
        Tip(TipType.success, '发布成功');
        const qa:QAprops = res.result;
        this.$store.dispatch('submitQuestion', qa);
        this.$data.question = '';
        this.$data.dialog = false;
      } else if (res.retcode === 1) {
        Tip(TipType.error, '发布失败，请重试');
        // alert(res.result);
      } else {
        Tip(TipType.error, '网络中断，请重试');
        // alert(res.result.message);
      }
      this.$data.submiting = false;
    },
  },
  data() {
    return {
      dialog: false,
      submiting: false,
      question: '',
    };
  },
});
</script>
