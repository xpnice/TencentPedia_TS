<template>
  <div>
    <v-row class="hidden-lg-and-up">
      <v-col cols="12">
        <v-sheet class="pa-4"
                 color="grey lighten-5"
                 elevation="2">
          <NavigateBoard v-on:selectTab="selectTab"
                         v-on:selectTag="selectTag" />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12"
             lg="8"
             xl="8"
             sm="12"
             xs="12">
        <v-sheet class="pa-4"
                 color="grey lighten-5"
                 elevation="3">
          <BookNote v-if="tab==='book'"
                    :tag="tag"
                    class="mb-n4" />
          <LightNote v-if="tab==='light'"
                     class="mb-n4" />
        </v-sheet>
      </v-col>
      <v-col md="12"
             lg="4"
             xl="4"
             sm="12"
             xs="12">
        <v-sheet class="pa-4 mb-5 hidden-md-and-down"
                 color="grey lighten-5"
                 elevation="3 ">
          <NavigateBoard v-on:selectTab="selectTab"
                         v-on:selectTag="selectTag" />
        </v-sheet>

        <v-sheet color="grey lighten-5"
                 elevation="3">
          <RecomandBoard />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookNote from './BookNote.vue';
import LightNote from './LightNote.vue';
import NavigateBoard from './NavigateBoard.vue';
import RecomandBoard from './RecomandBoard.vue';

export default {
  name: 'MainPage',
  components: {
    BookNote, NavigateBoard, RecomandBoard, LightNote,
  },
  data: () => ({
    tab: 'book',
    tag: '',
  }),
  methods: {
    selectTab(tab) {
      this.tab = tab;
    },
    selectTag(tag) {
      this.tag = tag;
    },
  },
};
</script>
