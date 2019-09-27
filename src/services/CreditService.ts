import { HttpService } from '@/config/httpService/HttpService'
import { Inject } from 'typescript-ioc'
import { CreditsResponse } from '@/model/response/CreditsResponse'

export default class CreditService {
  private http: HttpService
  private baseUrl = 'https://api.themoviedb.org/3/movie'
  private apiKey = '07643aac072c108d16e077b7639bb24a'

  constructor (@Inject http: HttpService) {
    this.http = http
  }

  public async obterCreditosPor (idFilme: number): Promise<CreditsResponse> {
    const resultado = await this.http.get<CreditsResponse>(`${this.baseUrl}/${idFilme}/credits?api_key=${this.apiKey}`)
    return resultado.data
  }
}
