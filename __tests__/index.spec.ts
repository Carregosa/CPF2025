import { Cpf } from '../src'

describe(Cpf.isValid, () => {
  test('Com pontuação', () => expect(Cpf.isValid('052.330.457-96')).toBe(true))

  test('Sem pontuação', () => expect(Cpf.isValid('05233045796')).toBe(true))

  test('Dígito verificador inválido', () =>
    expect(Cpf.isValid('45317828792')).toBe(false))
})

describe(Cpf.from, () => {
  test('Possíveis assinaturas', () => {
    const formatted = Cpf.from('052.330.457-96')
    const stripped = Cpf.from('05233045796')
    const withoutDvs = Cpf.from('052.330.457')
    const withUf = Cpf.from('052.330.45', 'RJ')

    expect(
      formatted.equals(stripped) &&
        formatted.equals(withoutDvs) &&
        formatted.equals(withUf)
    ).toBe(true)
  })

  test('Gera _tag', () => expect(Cpf.from('052.330.457-96')._tag).toBe('Cpf'))
})

describe(Cpf.random, () => {
  test('Gera cpf válido', () => expect(Cpf.isValid(Cpf.random().format())).toBe(true))

  test('Gera cpf válido com Uf', () =>
    expect(Cpf.random('RJ').format()[10]).toBe(Cpf.ufs['RJ']))
})

describe(Cpf, () => {
  test('strip', () => expect(Cpf.from('052.330.457-96').strip()).toBe('05233045796'))
  test('format', () => expect(Cpf.from('05233045796').format()).toBe('052.330.457-96))
  test('equals', () => {
    const formatted = Cpf.from('052.330.457-96')
    const stripped = Cpf.from('05233045796')

    expect(formatted.equals(stripped)).toBe(true)
  })
})
