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
      <div id="poster-container">
        <v-img
          :src="`https://image.tmdb.org/t/p/w500/${informacoesFilme.backdrop_path}`"
          height="350px"
          class="poster-informacoes-filme"
        >
        </v-img>
        <v-icon class="absolute favorite">
          mdi-heart-outline
        </v-icon>
        <v-icon class="absolute share">
          mdi-share-variant
        </v-icon>
        <v-icon class="absolute play">
          mdi-play-circle-outline
        </v-icon>
        <v-icon class="absolute mark">
          mdi-movie-outline
        </v-icon>
      </div>
      <v-card-title class="mt-2">
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
              class="pt-2 pb-2"
              id="info-filme-generos"
            >
              <span class="body-2">
                <ul>
                  <li
                    v-for="(genero, key) in informacoesFilme.genres"
                    :key="key"
                  >
                    {{
                    key == (Object.keys(informacoesFilme.genres).length - 1)
                    ? `${genero.name}`
                    : `${genero.name}&nbsp-&nbsp`
                    }}
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
      <v-card-text>
        <v-row class="justify-center">
          <v-col cols="10 pt-0">
            <p class="text-center body-2">
              {{informacoesFilme.overview}}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12 caption mb-2">
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
  </v-container>
</template>

<style lang="stylus" scoped>
.poster-informacoes-filme {
  border-bottom-left-radius: 33%;
  border-bottom-right-radius: 33%;
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

#poster-container {
  position: relative;
}

.absolute {
  position: absolute;
}

.favorite {
  top: 16px;
  right: 16px;
}

.mark {
  bottom: 8px;
  left: 16px;
}

.share {
  bottom: 8px;
  right: 16px;
}

.play {
  bottom: -27px;
  right: 45%;
  font-size: 56px !important;
  font-weight: 400;
}
</style>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { Container } from "typescript-ioc";
import FilmeService from "../services/FilmeService";
import CreditService from "../services/CreditService";
import { InformacoesFilmeResponse } from "../model/response/InformacoesFilmeResponse";
import { CreditsResponse, Crew, Cast } from "../model/response/CreditsResponse";

@Component({})
export default class InformacoesFilme extends Vue {
  private informacoesFilme: InformacoesFilmeResponse = {} as InformacoesFilmeResponse;
  private elenco: Cast[] = {} as Cast[];
  private equipeTecnica: Crew[] = {} as Crew[];

  mounted() {
    try {
      const idFilme: number = Number(this.$route.params.id);
      this.obterInformacoesFilme(idFilme);
    } catch (error) {
      //redirecionar para página de erro
    }
  }

  private obterInformacoesFilme(idFilme: number): void {
    const filmeService = Container.get(FilmeService) as FilmeService;
    const creditService = Container.get(CreditService) as CreditService;

    filmeService
      .obterInformacoesFilme(idFilme)
      .then((informacoesFilme: InformacoesFilmeResponse) => {
        this.$nextTick(() => {
          this.informacoesFilme = informacoesFilme;
        });
      });

    creditService
      .obterCreditosPor(idFilme)
      .then((creditosFilme: CreditsResponse) => {
        this.$nextTick(() => {
          this.equipeTecnica = creditosFilme.crew;
          this.elenco = creditosFilme.cast;
        });
      });
  }
}
</script>
