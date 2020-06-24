<template>
  <v-card color="grey lighten-5">
    <v-card-title class="headline ml-3">官方文档</v-card-title>
    <v-divider />
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards"
               :key="card.title"
               :cols="card.flex">
          <v-card :href="card.target"
                  target="_blank">
            <v-img :src="card.src"
                   class="white--text align-end"
                   gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                   height="180px">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'RecomandBoard',
  components: {},
  data: () => ({
    cards: [
      {
        title: '腾讯2020校园招聘',
        target: 'https://join.qq.com/',
        src: 'https://onecareer.com/wp-content/uploads/2019/08/WeChat-Image_20190802140348-715x357.jpg',
        flex: 12
      },
      {
        title: '腾讯首页',
        target: 'https://www.qq.com/',
        src: 'data:image/png;base64,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',
        flex: 6
      },
      {
        title: '牛客网腾讯专题',
        target: 'https://www.nowcoder.com/search?query=%E8%85%BE%E8%AE%AF&type=all',
        src: 'https://uploadfiles.nowcoder.com/images/20200221/1_1582270138417_AD44A413E158B6AE9EEC93DB51B4853D',
        flex: 6
      },
    ],
  }),
}
</script>