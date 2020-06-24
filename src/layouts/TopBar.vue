<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp"
             app
             dense
             color="blue darken-3"
             dark>
    <v-toolbar-title style="width: 300px"
                     class="ml-1 pl-3">
      <span>TencentPedia</span>
    </v-toolbar-title>
    <v-text-field flat
                  solo-inverted
                  hide-details
                  dense
                  prepend-inner-icon="search"
                  label="Search"
                  class="hidden-sm-and-down"></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <UserCard pos="top"
              :user="user" />
  </v-app-bar>
</template>>
<script>
import UserCard from '@/components/UserCard';
export default {
  name: 'Dashboard',
  components: {
    UserCard
  },
  data: () => ({
    user: {
      name: '朱一旦',
      info: '有钱人的生活就是这么朴实无华且枯燥',
      avatar: 'https://alcdn.img.xiaoka.tv/20191102/60e/f5c/1321259173/60ef5c1e1124a5e54eff70893398aa63.jpg@1e_1c_0o_0l_96h_96w_100q_1pr.webp'
    }
  })
};
</script>>