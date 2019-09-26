<template>
  <v-container
    fluid
    grid-list-xs
    class="pa-0 ma-0"
  >
    <v-card
      flat
      color="#303030"
    >
      <div>
        <v-img
          :src="`https://image.tmdb.org/t/p/w500/${informacoesFilme.backdrop_path}`"
          height="350px"
          class="poster-informacoes-filme"
        ></v-img>
      </div>
      <v-card-title>
        <v-row class="justify-center">
          <v-col
            cols="8"
            class="text-center"
          >
            <div id="info-filme-titulo">
              <span class="title">
                {{informacoesFilme.title}}
              </span>
            </div>
            <div
              class="pt-2"
              id="info-filme-generos"
            >
              <span class="body-2">
                <ul>
                  <li
                    v-for="(genero, key) in informacoesFilme.genres"
                    :key="key"
                  >
                    {{genero.name}}
                  </li>
                </ul>
              </span>
            </div>
            <div id="infor-filme-rating">
              <v-rating
                value="3"
                dark
                readonly
              ></v-rating>
            </div>
            <div>
              <v-row class="caption">
                <v-col cols="4">
                  {{informacoesFilme.release_date.substr(0, 4)}}
                </v-col>
                <v-col cols="4">
                  {{informacoesFilme.status}}
                </v-col>
                <v-col cols="4">
                  {{informacoesFilme.runtime}} min.
                </v-col>
              </v-row>
            </div>

          </v-col>
        </v-row>
      </v-card-title>

    </v-card>
  </v-container>
</template>

<style lang="stylus" scoped>
.poster-informacoes-filme {
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
}

li {
  list-style: none;
}

ul {
  padding-left: 0px !important;
}

ul > li {
  display: inline-block;
  zoom: 1;
}
</style>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { Container } from "typescript-ioc";
import FilmeService from "../services/FilmeService";
import { InformacoesFilmeResponse } from "../model/response/InformacoesFilmeResponse";

@Component({})
export default class InformacoesFilme extends Vue {
  private informacoesFilme: InformacoesFilmeResponse = {} as InformacoesFilmeResponse;

  mounted() {
    try {
      const idFilme: number = Number(this.$route.params.id);
      this.obterInformacoesFilme(idFilme);
    } catch (error) {
      //redirecionar para página de erro
    }
  }

  private obterInformacoesFilme(idFilme: number): void {
    const service = Container.get(FilmeService) as FilmeService;
    service
      .obterInformacoesFilme(idFilme)
      .then((informacoesFilme: InformacoesFilmeResponse) => {
        this.$nextTick(() => {
          this.informacoesFilme = informacoesFilme;
        });
      });
  }
}
</script>
