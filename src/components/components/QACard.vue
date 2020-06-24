<template>
  <div>
    <v-skeleton-loader :loading="loading"
                       transition="scale-transition"
                       v-bind:key="this.qa.sid"
                       height="104"
                       class="mb-4"
                       type="list-item-avatar-three-line">
      <v-card class="mx-auto mb-4">
        <v-list dense>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar color="red">
                <span class="white--text headline">YP</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{autherinfo?this.autherinfo.author:''}}</v-list-item-title>
              <v-list-item-subtitle>{{autherinfo?this.autherinfo.des:''}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn outlined
                     color="primary"
                     @click="gotoAutherCenter">
                <v-icon>mdi-account</v-icon>个人中心
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-card-text>
          {{qa.content}}
        </v-card-text>
        <v-card-actions>
          <v-btn text
                 @click="clickHeart">
            <v-icon color="red darken-1">mdi-heart-outline</v-icon>关注问题
          </v-btn>
          <v-btn text>
            <v-icon color="green darken-1">mdi-message-outline</v-icon>回复
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-skeleton-loader>
  </div>
</template>
<script lang="ts">
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import Vue, { PropType } from 'vue';
import { MockRequest } from '../../utils/request';
// eslint-disable-next-line no-unused-vars
import { QAprops } from '../../utils/constructors';

export default Vue.extend({
  name: 'QACard',
  props: {
    qa: {
      type: Object as PropType<QAprops>,
      required: true,
    },
  },
  data() {
    return {
      loading: true, // 骨架框加载位
      autherinfo: {}, // 作者信息
    };
  },
  mounted() {
    this.fetchAutherinfoByUid(this.qa.uid); // 获取信息
  },
  methods: {
    async fetchAutherinfoByUid(uid: number) {
      // TODO:后台接口根据uid获取用户信息
      console.log(uid);
      const res = await MockRequest({
        author: 'daniel',
        des: '真是个好人',
      });
      this.loading = false;
      this.autherinfo = res;
    },
    gotoAutherCenter() {
      console.log(`进入uid为${this.qa.uid}的个人主页`);
    },
    clickHeart() {
      console.log(`关注qid为${this.qa.qid}的问题`);
    },
  },
});
</script>
