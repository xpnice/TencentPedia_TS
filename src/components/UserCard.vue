<template>
  <v-menu v-model="menu"
          :open-on-click="pos==='top'"
          :open-on-hover="pos!=='top'"
          :close-on-content-click="false"
          :transition="pos!=='top'?'scale-transition':null"
          :nudge-width="200"
          offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon
             large
             v-on="on">
        <v-avatar size="32px"
                  item>
          <img :src="user.avatar"
               :alt="user.name">
        </v-avatar>
      </v-btn>
    </template>

    <v-card elevation="24">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="user.avatar"
                 :alt="user.name">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.info}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn outlined
                   color="primary"
                   @click="fav = !fav">
              <v-icon>mdi-account</v-icon>个人中心
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <div v-if="pos==='top'">
        <v-divider></v-divider>
        <v-container class="grey lighten-5">
          <v-row dense>
            <v-col cols="6">

              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="blue darken-2"
                        class="mr-2">
                  mdi-clipboard-file</v-icon>我的分享
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="pink"
                        class="mr-2">
                  mdi-comment-question</v-icon>我的提问
              </v-btn>
            </v-col>
          </v-row>
          <v-row dense
                 class="mt-3">
            <v-col cols="6">
              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="purple darken-2"
                        class="mr-2">
                  mdi-account-heart</v-icon>我的关注
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="yellow darken-2"
                        class="mr-2">
                  mdi-star</v-icon>收藏列表
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>

          <v-btn text
                 @click="menu = false">
            <v-icon>mdi-menu</v-icon>账号设置
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text
                 color="error"
                 @click="logout">
            <v-icon>mdi-logout-variant</v-icon>登出
          </v-btn>
        </v-card-actions>
      </div>
      <div v-if="pos!=='top'">
        <v-divider></v-divider>
        <v-container class="grey lighten-5">
          <v-row dense>
            <v-col cols="6">

              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="blue darken-2"
                        class="mr-2">
                  mdi-clipboard-file</v-icon>Ta的分享
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn text
                     @click="menu = false">
                <v-icon large
                        color="pink"
                        class="mr-2">
                  mdi-comment-question</v-icon>Ta的提问
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-btn text
                 @click="menu = false">
            <v-icon color="red darken-1">mdi-heart-outline</v-icon>关注
          </v-btn>
          <v-btn text
                 @click="menu = false">
            <v-icon color="green darken-1">mdi-message-outline</v-icon>私信
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  methods: {
    logout: function () {
      this.$router.push('/')
    }
  },
  props: {
    pos: String,
    user: Object
  },
  data: () => ({
    menu: false,
  })
}
</script>