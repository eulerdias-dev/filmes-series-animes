import { Inject } from 'typescript-ioc'
import { HttpService } from '@/config/httpService/HttpService'
import { TipoFiltro } from '@/common/enum/TipoFiltro'
import { FilmesResponse } from '@/model/response/FilmesResponse'
import { Paginacao } from '@/model/Paginacao'
import FilmesResult from '@/model/results/FilmesResult'
import { InformacoesFilmeResponse } from '@/model/response/InformacoesFilmeResponse'

export default class FilmeService {
  private http: HttpService
  private baseUrl = 'https://api.themoviedb.org/3/movie'
  private apiKey = '07643aac072c108d16e077b7639bb24a'

  constructor (@Inject http: HttpService) {
    this.http = http
  }

  public async obterFilmesPor (tipoFiltro: TipoFiltro, pagina: number): Promise<FilmesResult> {
    const resultado = await this.http.get<FilmesResponse>(`${this.baseUrl}/${tipoFiltro}?api_key=${this.apiKey}&page=${pagina}`)

    const filmes = resultado.data.results
    const paginacao = this.obterPaginacao(resultado.data)

    return new FilmesResult(filmes, paginacao)
  }

  public async obterInformacoesFilme (idFilme: number, language: string = 'en-US'): Promise<InformacoesFilmeResponse> {
    const resultado = await this.http.get<InformacoesFilmeResponse>(`${this.baseUrl}/${idFilme}?api_key=${this.apiKey}&language=${language}`)
    return resultado.data
  }

  private obterPaginacao (filmesResponse: FilmesResponse): Paginacao {
    const paginacao = new Paginacao(
      filmesResponse.page,
      filmesResponse.total_results,
      filmesResponse.total_pages)

    return paginacao
  }
}
