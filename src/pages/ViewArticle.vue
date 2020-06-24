<template>
  <div id="app">
    <v-app id="inspire">
      <TopBar />
      <v-main id="scroll-area-1">
        <v-container fluid>
          <v-card class="mx-auto"
                  max-width="840">
            <v-card-title>
              <h2 style="padding-left: 20px; padding-top: 20px;"
                  class="mt-2 mb-3">{{articalinfo.title}}</h2>
            </v-card-title>

            <v-list style="padding-left: 20px;">
              <v-list-item>
                <v-list-item-avatar>
                  <img :src="articalinfo.avotor"
                       :alt="articalinfo.author" />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{articalinfo.author}}</v-list-item-title>
                  <v-list-item-subtitle>{{articalinfo.date}}</v-list-item-subtitle>
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

            <v-divider class="mx-4"></v-divider>
            <v-card-text style="padding-left: 32px;"
                         v-html="articalinfo.content" />
          </v-card>
        </v-container>

        <v-container fluid>
          <v-card class="mx-auto"
                  max-width="840">
            <ShowComments />
          </v-card>
        </v-container>
      </v-main>

      <transition name="scale-transition">
        <v-btn fab
               fixed
               right
               bottom
               color="primary"
               @click="$vuetify.goTo(0)"
               v-show="offsetTop > 0">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </transition>

    </v-app>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/camelcase */
import ShowComments from '../components/ShowComments.vue';
import TopBar from '../layouts/TopBar.vue';

export default {
  name: 'Dashboard',
  components: {
    ShowComments,
    TopBar,
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
  },
  props: {
    articalinfo: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default() {
        return {
          id: 1,
          title: 'IMWeb前端一面',
          author: '朱一旦',
          avotor:
            'https://alcdn.img.xiaoka.tv/20191102/60e/f5c/1321259173/60ef5c1e1124a5e54eff70893398aa63.jpg@1e_1c_0o_0l_96h_96w_100q_1pr.webp',
          date: '2020.05.03 12:11:45',
          fav_num: 23,
          com_num: 49,
          res_num: 4,
          pageView: 1000,
          content: `<div class="post-topic-des nc-post-content js-nc-pop-image">
<div>  <strong>基本信息</strong>：本科哈工大硕士清华亚琛双学位，预计2020年七月毕业，做了半年多FPGA的项目，从事行业是数字芯片设计。 </div> <div>  <b>腾讯实习面经（量子实验室）：</b>腾讯报了提前批，开始报了C++的后台开发，但是和面试官聊明显不太对口，并且自己没有任何准备。但是聊的很开心，面试官对我能力也认可，之后就说为我推荐匹配度高的其他部门。<br> 过了两周不到被发起面试，也不知道基础研究是做什么的，但是面试过程中知道是量子实验室中的，然后可能需要我做一些FPGA的开发验证，所以一面问题主要是verilog的语言基础，比如阻塞赋值非阻塞赋值，然后还有外部时钟和内部时钟接口处如何统一，还有针对我的课题提问了较多。一面是两个人，应该是总监和一个技术小哥，后来得知小哥是组里唯一的硕士。一面效果很好，问我什么时候入职，有说有笑。<br> 二面也是技术面，问我的都是围绕简历展开的，很简单。<br> 三面是HR，突如其来没有预约晚上九点开始面试，之后聊了四十分钟，最后我问她能否被录取，她说不能告诉我，但是说了一句“我认为你是一个很优秀的人”。<br> 后来煎熬了好久等offer，在4.1号收到offer call，还是很开心的。 </div> <div>  以上是我在当时去实习之前写的，之后去了具体工作内容就是在腾讯量子实验室做电子学测控系统部分，导师和同事人都很好，工作氛围轻松，腾讯对待实习生一视同仁，经常团建。但是做的具体内容不是很喜欢，所以后来也不想留在腾讯。 </div> <div>  <strong>华为实习面经：</strong>春招那个时候也过了华为的通用软件开发岗，当时面试过程还是很简单的，都是聊项目聊人生，但是我后来不想做软开或者算法这个行业了，就拒绝了这个实习offer。 </div> <div>  <strong>华为海思秋招面经</strong><strong>：</strong>在腾讯实习之后还是学到了很多东西的，因为去腾讯实习之前我只做了三个月FPGA，或者说只学了三个月，基本上什么都不会，可能愿意要我主要看学历吧，所以我也很感谢腾讯，实习之后对于我后续的课题进展也很有帮助（我是我们实验室唯一一个做FPGA的，其他人是光学）。华为面试我参加的是深圳的优招提前批，很早，面试问题如下图所示： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/compress/mw1000/images/20191216/891653597_1576481365930_237A1DEB06CFEDCBB27BC5EB8DD71A39" style="height: auto;width: 198.8px;"><br> </div> <div>  当时优招因为只有C9和留学生，加上我觉得问我的问题我大多也都回答上了，不太确定的问题我也表现出了我的学习能力（逃），尤其二面的面试官对我好像也非常满意。后来在面试结束之后也有四个部门七八个人给我打电话，让我选择他们的部门，因为我报的大部门是海思，所以下面的小部门有图灵，海思研究部，海思网络芯片，海思拉法尔部门（这个好像很多人没听过），这些部门都有找过我，有hr还告诉我说我面试表现评分第一，所以我觉得我有15级的希望。再后来就有一个海思hr和我确定意向部门，因为图灵的联系我很多还有一个十九级的小领导给我打了好多次电话，所以我就选择了图灵。此外，这个海思hr还问我意向薪资，我说15级，她在电话里明确说了两次根据你的面试表现15级完全没问题，所以我当时基本就想去海思图灵做数字芯片设计了，但是搞笑的是在后来签两方的时候，给的只是十四级，然后给我讲情怀加技术平台加未来潜力balabala，更搞笑的是我一些在优招中挂掉或者笔试没有被筛选通过的同学在秋招正式批的时候拿了15级，这让我很无奈，后续也有一些人给我打电话，但我最终选择了放弃。 </div> <div>  <strong>寒武纪面经：</strong>寒武纪面的是媒体部门的数字芯片设计，一面技术面，根据项目进行扩展，对我做的课题的难度表示了不屑，但考虑到都是我自己做的觉得学习能力是OK的。二面是总监面，因为要做无人驾驶或者图像方向的，所以问了问我本科的毕设，主要是C++的数字图像处理内容，面的时间很短，但是我后来和总监又交流过，人很nice。三面hr面，犹豫hr小姐姐太忙总是鸽我，我就在打完球回寝室晚上十点半直接给她打了电话，说：我们现在开始面试吧。她表示她是第一次被要求面试，但聊得很好。再后来在三方下来之后又和总监聊了半个多小时，他是从华为工作十四年跳槽来的，很了解海思，给我夸了好久海思，同时也很客观的对比了寒武纪，然后对我提出的问题非常耐心并且贴心的解答，对我提出的条件也都予以了满足，觉得这个部门的leader真的很棒，对寒武纪这个部门很有憧憬，所以最后我也选择了寒武纪，在上海张江，如果有想合租的小伙伴可以一起（男生）。 </div> <div>  <strong>vivo面经</strong>：面得芯片规划工程师，因为错过了提前批就随便报了香港那一批，没想到还是给我面试了，然后给我offershow上好像最高的offer，但是由于第一年成立我不是很了解，所以后来没有去。 </div> <div>  其他还面了旷视和英伟达，旷视战线拖得有点长，我就没有继续面了，然后英伟达一面一个小时还是很有难度的，这两家公司面试难度相当，感觉应该也不错。 </div> <div>  还面了一家家乡企业，长光卫星，做商业遥感小卫星，说给我博士待遇27w，在长春的确不错，后来还是选择了寒武纪。 </div> <div>  感谢大家读完，祝大家新年快乐！牛客小管家可以给我卫衣吗？？ </div> <div>  <br> </div>
</div>`,
        };
      },
    },
  },
  data() {
    return {
      offsetTop: 100,
    };
  },
};
</script>
