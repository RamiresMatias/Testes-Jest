## Testes com Jest e Typescript

- Projeto criado para aprendizado de testes com Jest com TypeScript

> É uma introdução a Jest, logo os conhecimentos anotados aqui serão introdutórios


### Comandos de configuração inicial do Jest

- npx jest --init

- Comando para criar o arquivo de configuração com ts-jest: npx ts-jest config:init

- Comando para executar todos os testes encontrados nos arquivos de testse testes dos projetos: npx jest


### Testes

- Pode-se utilizar a função it ou test para descrever os testes

> No primeiro parâmetro vem a descrição do teste

> No segundo vem a função que contém o teste a ser realizado

```ts

it('descrição do teste',  () => {
  const number = 1
  expect(number).toBe(1)
})

test('...')

```
