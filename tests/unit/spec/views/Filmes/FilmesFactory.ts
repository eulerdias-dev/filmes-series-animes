import { FactoryComponentBase } from '../../../base/FactoryComponentBase'
import Filmes from '@/views/Filmes.vue'
import { shallowMount } from '@vue/test-utils'
import store, { vxm } from '@/store/store.vuex'

export class FilmesFactory extends FactoryComponentBase<Filmes> {
  public async dadoQueFilmesEstejaVazio (): Promise<void> {
    this.componente.setData({
      filmes: []
    })
  }

  public statusSectionMensagem (): boolean {
    return this.componente.find('#section-mensagem').isVisible()
  }

  public criarWrapper (): void {
    this.componente = shallowMount(Filmes, {
      store
    })
  }
}
