# CPF2025

@Carregosa/CPF2025
Micro-utilitário para validação e geração de CPFs

Install
npm i @Carregosa/CPF2025
Usage
import { Cpf } from '@Carregosa/CPF2025'
ou

const { Cpf } = require('@Carregosa/CPF2025')
static from(cpf: string, uf?: Uf): Cpf
Gera um objeto Cpf

Possíveis assinaturas:

Cpf.from('052.330.457-96') // Completo e pontuado
Cpf.from('05233045796') // Completo e não pontuado
Cpf.from('052.330.457') // Sem os dígitos verificadores
Cpf.from('052.330.45', 'RJ') // Específicando a UF pela sigla
static isValid(cpf: unknown): boolean
Retorna true se o argumento é uma string com um cpf válido

Com pontuação:

Cpf.isValid('052.330.457-96') // true
Sem pontuação:

Cpf.isValid('05233045796') // true
Dígito verificador inválido:

Cpf.isValid('05233045796') // false
static random(uf?: Uf): Cpf
Gera um Cpf aleatório

Cpf.random() // Cpf { __cpf: '052.330.457-96' }
Cpf.random('RJ') // Cpf { __cpf: '052.330.457-96' }
format(): CpfString
Cpf.from('05233045796').format() // '052.330.457-96'
strip(): CpfString
Cpf.from('052.330.457-96').strip() // '05233045796'
equals(other: Cpf): boolean
possibleUfs(): Set<Uf>
Retorna as possíveis UFs de origem

Cpf.from('052.330.457-96').possibleUfs() // Set {"RJ", "ES"}
