import { Paginacao } from '../Paginacao'
import Filme from '../Filme'

export default class FilmesResult {
  public filmes: Filme[]
  public paginacao: Paginacao

  constructor (filmes: Filme[], paginacao: Paginacao) {
    this.filmes = filmes
    this.paginacao = paginacao
  }
}
