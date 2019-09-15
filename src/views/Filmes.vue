<template>
  <v-container>
    <v-row no-gutters>
      <v-subheader id='titulo'>Filmes</v-subheader>
    </v-row>
    <v-row
      no-gutters
      align="center"
      justify="center"
      class="mt-4"
    >
      <div
        v-if="ehVisualizarFilmes"
        id="section-conteudo"
      >

      </div>
      <div
        v-else
        id='section-mensagem'
      >
        <span>Não foi possível obter os Filmes</span>
      </div>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Filmes extends Vue {
  private filmes = [];

  private get ehVisualizarFilmes(): boolean {
    return this.filmes.length > 0;
  }
}
</script>
