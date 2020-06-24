<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <span class="ml-2">导航栏</span>
        <v-divider class="mt-2" />
      </v-col>
      <v-col cols="4">
        <v-btn text
               @click="selectTab('book')">
          <v-icon large
                  depressed
                  color="blue darken-2"
                  class="mr-2">
            mdi-clipboard-file</v-icon>笔面经
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn text
               @click="selectTab('book')">
          <v-icon large
                  color="green darken-2"
                  class="mr-2">
            mdi-timeline-clock</v-icon>入职生活
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn text
               @click="selectTab('light')">
          <v-icon large
                  color="pink"
                  class="mr-2">
            mdi-comment-question</v-icon>Q&A
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense
           class="mt-3">
      <v-col cols="12">
        <span class="ml-2">筛选标签</span>
        <v-divider class="mt-2" />
      </v-col>
      <v-col cols="12">
        <v-chip-group v-model="selection"
                      class="ml-4"
                      active-class="blue darken-2 white--text"
                      column>
          <v-chip v-for="tag in tags"
                  :key="tag">{{tag}}</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'NavigateBoard',
  data() {
    return {
      selection: null,
      tags: ['前端', '面经', '后端', 'CSIG', 'WXG', 'IEG'],
    };
  },
  watch: {
    selection() {
      if (this.selection === undefined) { // 没有选择标签
        this.$emit('selectTag', '');
      } else { // 向mainpage传递标签
        this.$emit('selectTag', this.tags[this.selection]);
      }
    },
  },
  methods: {
    selectTab(data) { // 向mainpage传递
      this.$emit('selectTab', data);
    },
  },
};
</script>
