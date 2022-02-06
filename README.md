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

### Objeto Jest

- O objeto jest possui diversos métodos que possam ser executados para auxiliar nos testes

- Método spyOn(object, 'nameMethod')
> o spyOn cria uma função semelhante a qual irá testar e realiza o rastreio, validando se irá ser executada.

```ts
it('plays video', () => {
  const video = {
    play() {
      return true;
    },
  };

  test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    expect(spy).toHaveBeenCalled();
  })
})
```
### Mockar retorno de métodos com jest

- Com o método mockReturnValueOnce é possível realizar o mock do retorno de uma função, inserido o valor a ser mockado

```ts
const shoppingCartMockSpy = jest
  .spyOn(shoppingCartMock, 'isEmpty')
  .mockReturnValueOnce(true)
```
