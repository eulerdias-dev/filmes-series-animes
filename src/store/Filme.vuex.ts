import { mutation, action, createModule, getter } from 'vuex-class-component'
import { Paginacao } from '@/model/Paginacao'
import Filme from '@/model/Filme'
import { Container } from 'typescript-ioc'
import FilmeService from '@/services/FilmeService'
import { TipoFiltro } from '@/common/enum/TipoFiltro'
import { FilmesResponse, ResultsFilmes } from '@/model/response/FilmesResponse'
import FilmesResult from '@/model/results/FilmesResult'

const VuexModule = createModule({
  namespaced: true,
  strict: false,
  enableLocalWatchers: true
})

export class FilmeStore extends VuexModule {
  private tipoFiltroSelecionado: TipoFiltro = TipoFiltro.POPULAR
  private paginacao = new Paginacao()
  public filmes: Filme[] = []

  @action async carregarListaDeFilmes (): Promise<Filme[]> {
    const filmeService = Container.get(FilmeService) as FilmeService
    const proximaPagina = ++this.paginacao.page

    const resultado: FilmesResult = await filmeService.obterFilmesPor(this.tipoFiltroSelecionado, proximaPagina)

    this.paginacao = resultado.paginacao
    this.filmes = resultado.filmes

    return resultado.filmes
  }
}
