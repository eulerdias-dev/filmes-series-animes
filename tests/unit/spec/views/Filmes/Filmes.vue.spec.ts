import { FilmesFactory } from './FilmesFactory'

describe('Página de listagem Filmes', () => {
  const factory = new FilmesFactory()

  it('Ao que Titulo seja \'Filmes\' ', async (done) => {
    await factory.montarComponente()
    const tituloEsperado = 'Filmes'

    const tituloObtido = await factory.obterTextoPorId('#titulo')

    expect(tituloObtido).toEqual(tituloEsperado)
    done()
  })

  it('Dado que lista de filmes seja vazia, section-mensagem estara visivel', async (done) => {
    await factory.montarComponente()
    await factory.dadoQueFilmesEstejaVazio()

    const sectionMensagemoVisivel = factory.statusSectionMensagem()

    expect(sectionMensagemoVisivel).toBeTruthy()
    done()
  })

  it('Snapshot', async (done) => {
    await factory.montarComponente()

    expect(factory.componente.html())
      .toMatchSnapshot()
    done()
  })
})
