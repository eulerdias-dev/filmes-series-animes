/* eslint-disable camelcase */
export class Paginacao {
  public page!: number
  public total_results!: number
  public total_pages!: number

  constructor (page: number = 0, totalResults: number = 0, totalPages: number = 0) {
    this.page = page
    this.total_results = totalResults
    this.total_pages = totalPages
  }
}
