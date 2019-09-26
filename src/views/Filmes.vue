<template>
  <v-container
    fluid
    grid-list-xs
  >
    <v-row>
      <v-subheader id='titulo'>Filmes</v-subheader>
    </v-row>
    <v-item-group multiple>

      <v-row>
        <v-col
          v-for="(filme, key) in filmes"
          :key="key"
          class="d-flex child-flex pa-1"
          cols="4"
          md="2"
          xl="1"
        >
          <v-card
            flat
            color="#303030"
          >
            <v-img
              :src="`https://image.tmdb.org/t/p/w500/${filme.poster_path}`"
              class="text-right pr-2 pt-1"
              @click="aoSelecionarFilme(filme)"
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
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { vxm } from "../store/store.vuex";
import Filme from "@/model/Filme";

@Component({})
export default class Filmes extends Vue {
  private filmes: Filme[] = [];
  private visualizarFilmes = this.filmes.length > 0;

  public created() {
    this.casoNecessarioCarregueFilmes().then(filmes => (this.filmes = filmes));
  }

  public mounted() {
    vxm.filme.$watch("filmes", (payload: Filme[]) => {
      this.filmes = payload;
    });
  }

  public get ehExibirFilmes(): boolean {
    return this.filmes.length > 0;
  }

  private async casoNecessarioCarregueFilmes(): Promise<Filme[]> {
    if (vxm.filme.filmes.length === 0) {
      return await this.carregarListaDeFilmes();
    } else {
      return vxm.filme.filmes;
    }
  }

  private async carregarListaDeFilmes(): Promise<Filme[]> {
    return await vxm.filme.carregarListaDeFilmes();
  }

  private aoSelecionarFilme(filme: Filme): void {
    this.$router.push(`/filmes/${filme.id}`);
  }
}
</script>
