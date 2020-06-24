<template>
  <div>
    <v-skeleton-loader :loading="loading"
                       transition="scale-transition"
                       v-for="card in computedCards.slice(this.page * 5-5, this.page * 5)"
                       v-bind:key="card.id"
                       height="104"
                       class="mb-4"
                       type="list-item-avatar-three-line">
      <card :card="card"></card>
    </v-skeleton-loader>
    <div class="text-center">
      <v-pagination v-if="!loading"
                    v-model="page"
                    :length="maxPage"
                    class="mx-auto mb-4"
                    :total-visible="7"></v-pagination>
    </div>
  </div>
</template>
<script>
import card from './components/ArticleCard'
export default {
  name: 'LightNote',
  components: { card },
  computed: {
    computedCards: function () {
      if (this.tag === '') return this.cards
      else
        return this.cards.filter((data) => { return data.tags.indexOf(this.tag) > -1 })
    },
    maxPage: function () {
      return Math.ceil(this.computedCards.length / 5)
    }
  },
  methods: {
    clickshare () {
      this.snackbar = true
      this.info = '文章链接已经复制到粘贴板'
    },
    fetchCards () {
      this.loading = false
    }
  },
  props: {
    tag: String
  },
  watch: {
    tag: function () {
      this.page = 1
    }
  },
  created () {
    setTimeout(this.fetchCards, 2000)
  },
  data () {
    return {
      page: 1,
      loading: true,
      cards: [
        {
          id: 1,
          user: {
            name: '朱一旦',
            avatar: 'https://alcdn.img.xiaoka.tv/20191102/60e/f5c/1321259173/60ef5c1e1124a5e54eff70893398aa63.jpg@1e_1c_0o_0l_96h_96w_100q_1pr.webp',
            info: '有钱人的生活就是这么朴实无华且枯燥'
          },
          title: 'IMWeb前端一面',
          date: 1587085575000,
          content: '基本信息：本科哈工大硕士清华亚琛双学位，预计2020年七月毕业，做了半年多FPGA的项目，从事行业是数字芯片设计。\
腾讯实习面经（量子实验室）：腾讯报了提前批，开始报了C++的后台开发，但是和面试官聊明显不太对口，并且自己没有任何准备。但是聊的很开心，面试官对我能力也认可，之后就说为我推荐匹配度高的其他部门。\
过了两周不到被发起面试，也不知道基础研究是做什么的，但是面试过程中知道是量子实验室中的，然后可能需要我做一些FPGA的开发验证，所以一面问题主要是verilog的语言基础，比如阻塞赋值非阻塞赋值，然后还有外部时钟和内部时钟接口处如何统一，还有针对我的课题提问了较多。一面是两个人，应该是总监和一个技术小哥，后来得知小哥是组里唯一的硕士。一面效果很好，问我什么时候入职，有说有笑。\
二面也是技术面，问我的都是围绕简历展开的，很简单。\
三面是HR，突如其来没有预约晚上九点开始面试，之后聊了四十分钟，最后我问她能否被录取，她说不能告诉我，但是说了一句“我认为你是一个很优秀的人”。\
后来煎熬了好久等offer，在4.1号收到offer call，还是很开心的。\
以上是我在当时去实习之前写的，之后去了具体工作内容就是在腾讯量子实验室做电子学测控系统部分，导师和同事人都很好，工作氛围轻松，腾讯对待实习生一视同仁，经常团建。但是做的具体内容不是很喜欢，所以后来也不想留在腾讯。\
华为实习面经：春招那个时候也过了华为的通用软件开发岗，当时面试过程还是很简单的，都是聊项目聊人生，但是我后来不想做软开或者算法这个行业了，就拒绝了这个实习offer。',
          fav: true,
          favNum: 100,
          comNum: 99,
          star: true,
          tags: ['前端', '面经', 'CSIG']
        },
        {
          id: 2,
          date: 15889905575000,
          user: {
            name: '啊吗粽',
            avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
            info: '我在百大求婚了'
          },
          title: 'WXG支付后台',
          content: '我明明是个b站up主为什么要去应聘后台岗呢？',
          fav: false,
          favNum: 90,
          comNum: 5,
          star: true,
          tags: ['后端', 'WXG', '面经']
        },
        {
          id: 3,
          user: {
            name: 'Taylor Swift',
            avatar: 'data:image/jpeg;base64,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',
            info: 'F**k ex-boyfriend'
          },
          title: 'IEG特聘歌手',
          date: 15889995575000,
          content: "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. She is known for narrative songs about her personal life, which have received widespread media coverage. At age 14, Swift became the youngest artist signed by the Sony/ATV Music publishing house and, at age 15, she signed her first record deal. Her 2006 eponymous debut album was the longest-charting album of the 2000s in the US. Its third single, 'Our Song', made her the youngest person to single-handedly write and perform a number-one song on the Billboard Hot Country Songs chart. Swift's second album, Fearless, was released in 2008. Buoyed by the pop crossover success of the singles 'Love Story' and 'You Belong with Me', it became the US' best-selling album of 2009 and was certified diamond in the US. The album won four Grammy Awards, including Album of the Year.",
          fav: true,
          favNum: 928,
          comNum: 452,
          star: false,
          tags: ['IEG', '面经']
        },
        {
          id: 4,
          user: {
            name: '卢本伟',
            avatar: 'data:image/jpeg;base64,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',
            info: '我和Faker五五开，我经常单杀他的'
          },
          title: 'IEG特聘电竞选手',
          date: 15889985575000,
          content: '面试的时候也没问什么，他们就问了他十七张牌能不能秒我，还有阿姨给我倒了卡布奇诺，体验挺好的',
          fav: true,
          favNum: 123,
          comNum: 1,
          star: true,
          tags: ['IEG', '面经']
        },
        {
          id: 5,
          user: {
            name: '雪饼',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYtzFubPrvOG0Yk4TeoWfEjQYFTCgvD5NQimf7C5jJPW4H9Y2e&usqp=CAU',
            info: '我真的好像住大阳台啊！！！！'
          },
          title: '腾讯云视频前端开发',
          date: 1587985575000,
          content: '我是一个美少女，我有一只狗子，叫啥我忘了，我马上就要入职了，我的梦想是有一个大阳台。',
          fav: true,
          favNum: 88,
          comNum: 23,
          star: false,
          tags: ['CSIG', '面经', '前端']
        },
        {
          id: 6,
          user: {
            name: '上海老哥',
            avatar: 'https://s1.ax1x.com/2020/05/07/YZ2AyV.jpg',
            info: '熊本本熊'
          },
          title: 'PHP后台开发',
          date: 15889905575000,
          content: '众所周知PHP是世界上最好的语言，所以最好的男人要用最好的语言做最好的事',
          fav: true,
          favNum: 625,
          comNum: 98,
          star: false,
          tags: ['CSIG', '面经', '后端']
        },
        {
          id: 7,
          user: {
            name: 'Jo哥',
            avatar: 'https://s1.ax1x.com/2020/05/07/YZ2UFH.jpg',
            info: '我是阿里星'
          },
          title: '互联网巨头offer收割机',
          date: 15889905575000,
          content: 'alijo，98研究生，坐标北京，手持bat tmd offer，还有女朋友，jackma钦定的合伙人',
          fav: true,
          favNum: 649,
          comNum: 73,
          star: false,
          tags: ['CSIG', '面经']
        }
      ]
    }
  }
}
</script>