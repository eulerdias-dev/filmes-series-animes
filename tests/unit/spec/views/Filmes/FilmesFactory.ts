import { FactoryComponentBase } from '../../../base/FactoryComponentBase'
import Filmes from '@/views/Filmes.vue'
import { shallowMount } from '@vue/test-utils'

export class FilmesFactory extends FactoryComponentBase<Filmes> {
  public criarWrapper (): void {
    this.componente = shallowMount(Filmes)
  }
}
