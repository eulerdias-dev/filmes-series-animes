import { mutation, action, createModule } from 'vuex-class-component'
import { Paginacao } from '@/model/Paginacao'
import Filme from '@/model/Filme'

const VuexModule = createModule({
  namespaced: true,
  strict: false
})

export class FilmeStore extends VuexModule {
  private paginacao!: Paginacao
  private filmes: Filme[] = []
}
