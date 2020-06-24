<!--评论模块-->
<template>
  <div class="container">

    <!-- <div class="write-reply" v-if="item.reply.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div> -->

    <div class="comment"
         v-for="item in comment.data"
         v-bind:key="item.id">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="item.fromAvatar"
                 :alt="item.fromName" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{item.fromName}}</v-list-item-title>
            <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="content">{{item.content}}</div>

      <div class="control">
        <span class="like"
              :class="{active: item.isLike}"
              @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{item.likeNum > 0 ? item.likeNum + '人赞' : '赞'}}</span>
        </span>
        <span class="comment-reply"
              @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
      </div>

      <div class="reply">
        <div class="item"
             v-for="reply in item.reply"
             v-bind:key="reply.id">
          <div class="reply-content">
            <span class="from-name">{{reply.fromName}}</span>
            <span>:</span>
            <span class="to-name">@{{reply.toName}}</span>
            <span>{{reply.content}}</span>
          </div>
          <div class="reply-bottom">
            <span>{{reply.date}}</span>
            <span class="reply-text"
                  @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply"
             v-if="item.reply.length > 0"
             @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper"
               v-if="showItemId === item.id">
            <v-textarea filled
                        auto-grow
                        :label="inputComment"
                        rows="4"
                        row-height="30"
                        shaped></v-textarea>

            <v-list>
              <v-list-item>
                <v-spacer />
                <v-btn small
                class="mr-2"
                       @click="cancel">取消</v-btn>
                <v-btn small
                       @click="commitComment"
                       color="primary">确定</v-btn>

              </v-list-item>
            </v-list>

          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
  },
  components: {},
  data () {
    return {
      inputComment: "",
      showItemId: "",
      //登录者信息

      comment: {
        status: "成功",
        code: 200,
        data: [
          {
            id: "comment0001", //主键id
            date: "2018-07-05 08:30", //评论时间
            ownerId: "talents100020", //文章的id
            fromId: "errhefe232213", //评论者id
            fromName: "求OC的评论家", //评论者昵称
            fromAvatar:
              "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //评论者头像
            likeNum: 3, //点赞人数
            content: "非常靠谱的程序员", //评论内容
            reply: [
              //回复，或子评论
              {
                id: "34523244545", //主键id
                commentId: "comment0001", //父评论id，即父亲的id
                fromId: "observer223432", //评论者id
                fromName: "夕阳红", //评论者昵称
                fromAvatar:
                  "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg", //评论者头像
                toId: "errhefe232213", //被评论者id
                toName: "求OC的评论家", //被评论者昵称
                toAvatar:
                  "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg", //被评论者头像
                content: "赞同，很靠谱，水平很高", //评论内容
                date: "2018-07-05 08:35" //评论时间
              },
              {
                id: "34523244546",
                commentId: "comment0001",
                fromId: "observer567422",
                fromName: "清晨一缕阳光",
                fromAvatar:
                  "http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg",
                toId: "observer223432",
                toName: "夕阳红",
                toAvatar:
                  "https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg",
                content: "大神一个！",
                date: "2018-07-05 08:50"
              }
            ]
          },
          {
            id: "comment0002",
            date: "2018-07-05 08:30",
            ownerId: "talents100020",
            fromId: "errhefe232213",
            fromName: "offer快来",
            fromAvatar:
              "http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg",
            likeNum: 0,
            content: "优秀的人总会被看到",
            reply: []
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    /**
     * 点赞
     */
    likeClick (item) {
      if (item.isLike === null) {
        Vue.$set(item, "isLike", true);
        item.likeNum++;
      } else {
        if (item.isLike) {
          item.likeNum--;
        } else {
          item.likeNum++;
        }
        item.isLike = !item.isLike;
      }
    },

    /**
     * 点击取消按钮
     */
    cancel () {
      this.showItemId = "";
    },

    /**
     * 提交评论
     */
    commitComment () {
      console.log(this.inputComment);
      // var d = new Date();
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput (item, reply) {
      if (reply) {
        this.inputComment = "@" + reply.fromName + " ";
      } else {
        this.inputComment = "";
      }
      this.showItemId = item.id;
    }
  },
  created () {
    console.log(this.comments);
  }
};
</script>

<style scoped lang="scss">
$color-main: #409eff;
$color-success: #67c23a;
$color-warning: #e6a23c;
$color-danger: #f56c6c;
$color-info: #909399;

$text-main: #303133;
$text-normal: #606266;
$text-minor: #909399; //次要文字
$text-placeholder: #c0c4cc;
$text-333: #333;

$border-first: #dcdfe6;
$border-second: #e4e7ed;
$border-third: #ebeef5;
$border-fourth: #f2f6fc;

$content-bg-color: #fff;

.container {
  padding: 0 10px;
  box-sizing: border-box;
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid $border-fourth;
    .info {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: $text-main;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 12px;
          color: $text-minor;
        }
      }
    }
    .content {
      font-size: 16px;
      color: $text-main;
      line-height: 20px;
      padding: 10px 0;
    }
    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $text-minor;
      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &.active,
        &:hover {
          color: $color-main;
        }
        .iconfont {
          font-size: 14px;
          margin-right: 5px;
        }
      }
      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: $text-333;
        }
        .iconfont {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
    .reply {
      margin: 10px 0;
      border-left: 2px solid $border-first;
      .item {
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px dashed $border-third;
        .reply-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: $text-main;
          .from-name {
            color: $color-main;
          }
          .to-name {
            color: $color-main;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 12px;
          color: $text-minor;
          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;
            &:hover {
              color: $text-333;
            }
            .icon-comment {
              margin-right: 5px;
            }
          }
        }
      }
      .write-reply {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: $text-minor;
        padding: 10px;
        cursor: pointer;
        &:hover {
          color: $text-main;
        }
        .el-icon-edit {
          margin-right: 5px;
        }
      }
      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .input-wrapper {
        padding: 10px;
        // .gray-bg-input,
        // .el-input__inner {
        //   /*background-color: #67C23A;*/
        // }
        .btn-control {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 10px;
          .cancel {
            font-size: 12px;
            color: $text-normal;
            margin-right: 20px;
            cursor: pointer;
            &:hover {
              color: $text-333;
            }
          }
          .confirm {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>