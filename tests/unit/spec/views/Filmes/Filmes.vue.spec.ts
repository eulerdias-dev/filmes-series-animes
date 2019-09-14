import { FilmesFactory } from './FilmesFactory'

describe('Página de listagem Filmes', () => {
  const factory = new FilmesFactory()

  it('Ao que Titulo seja \'Filmes\' ', async (done) => {
    await factory.montarComponente()
    const tituloEsperado = 'Filmes'

    const tituloObtido = await factory.obterTextoPorId('#titulo')

    expect(tituloEsperado).toEqual(tituloObtido)
    done()
  })

  it('Snapshot', async (done) => {
    await factory.montarComponente()

    expect(factory.componente.html())
      .toMatchSnapshot()
    done()
  })
})
