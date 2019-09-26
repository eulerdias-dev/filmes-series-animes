<template>
  <v-card
    flat
    color="#303030"
  >
    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${filme.poster_path}`"
      class="text-right pr-2 pt-1"
    >
      <v-icon>
        {{ active ? 'mdi-movie' : '' }}
      </v-icon>
    </v-img>
    <v-card-text class="pt-2 pl-1">
      <div class="text-truncate">
        {{filme.title}}
      </div>
      <span class="caption">{{filme.release_date.substr(0, 4)}}</span>
    </v-card-text>
  </v-card>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {}
</script>
