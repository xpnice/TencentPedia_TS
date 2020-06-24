<template>
  <div>
    <v-card shaped
            class="mb-4">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <UserCard :user="card.user"
                      pos="card" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{card.title}}</v-list-item-title>
            <v-list-item-subtitle>
              <span class="mr-5">{{card.user.name}}</span>
              <span>{{articleDate}}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn :class="card.star ? 'orange--text ml-1' : 'ml-1'"
                   icon
                   @click="card.star = !card.star">
              <v-icon>mdi-star{{card.star ?'':'-outline'}}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider class="mx-4"></v-divider>
      <v-card-text class="text--primary">

        <div>{{card.content.length>=400?card.content.slice(0,300)+'...':card.content}}</div>

        <v-chip v-for="tag in card.tags"
                v-bind:key="tag"
                class="mt-2 mr-3"
                small>{{tag}}</v-chip>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn :class="card.fav ? 'red--text ml-3' : 'ml-3'"
               text
               small
               @click="card.fav = !card.fav">
          <v-icon>mdi-thumb-up-outline</v-icon>{{card.favNum+card.fav}}
        </v-btn>
        <v-btn class="ml-3"
               small
               text>
          <v-icon>mdi-comment-processing-outline</v-icon>{{card.comNum}}
        </v-btn>
        <v-btn class="ml-3"
               @click="clickshare"
               small
               text>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-btn color="blue darken-2"
               small
               :href="carticleUrl"
               target="_blank"
               text>
          阅读全文
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar"
                bottom
                :timeout="3000"
                left>
      {{ info }}
      <v-btn color="pink"
             text
             @click="snackbar = false">
        关闭
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard'
export default {
  components: {
    UserCard
  },
  methods: {
    clickshare () {
      this.snackbar = true
      this.info = '文章链接已经复制到粘贴板'
    }
  },
  props: {
    card: Object
  },
  computed: {
    carticleUrl: function () {
      return "http://" + this.origin + "/#/ViewArticle"
    },
    articleDate: function () {
      const date = new Date(this.card.date)
      const now = new Date()
      if (now - date > 24 * 60 * 60 * 1000)
        return date.toLocaleDateString()
      else return date.toLocaleTimeString()
    }
  },
  data () {
    return {
      origin: window.location.host,
      snackbar: false,
      info: ''
    }
  }
}
</script>