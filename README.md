## Comandos para iniciar servidor

* ~node index.js~
* npm run dev

## Exercícios de NodeJS

### Exercício I

```
Criar um endpoint /calculadora, que recebe via método POST os parâmetros: 
numero1 = valor numérico qualquer, positivo ou negativo
numero2 = valor numérico diferente de zero
operacao = 'somar', 'subtrair', 'multiplicar', 'dividir'

O endpoint deve efetuar a operação entre os números
Se algum dado vier inválido (exemplo: Null em numero1, ou, texto em numero1, ou 0 em numero2 ou qualquer coisa diferente dos 4 valores possíveis em numero4), deve retornar somente status 400 e no body pode vir o texto de qual foi o erro. Exemplo: "Valor inválido para Numero1" ou "Operação inválida"

Se os dados vierem válidos, deve retornar status 200 e no corpo da resposta um objeto com um atributo "result", que tem o valor numérico da resposta

O código deve ser mostrado na branch "exercicio-1" e deve ser criada pull request para a main.
Somente depois de aprovado o código a gnt testa junto fazendo o merge e verificando se foi publicada corretamente 
```

#### Dicas:

* node_modules é um arquivo que não deve ir para o push, deve ser adicionado no `.gitignore`

### Exercício II

```
Fazer uma nova tela endereco.html
Todas as telas precisam ficar dentro de uma pasta /pages, porém, pra acessar o link tem que ser via nome apenas, sem o /pages
Exemplo: A calculadora fica localhost:3000/calculadora, a pagina de endereço fica localhost:3000/endereco

Na tela de endereço vc precisa ter os seguintes campos: 
- CEP
- Rua
- Número
- Bairro
- Cidade
- Estado

Quando o usuário digitar o CEP vc precisa fazer uma busca CEP na seguinte API
https://brasilapi.com.br/docs

Depois disso, ao receber os dados (rua, bairro, etc) preenche eles nos campos
Os dados que não vierem pode deixar em branco

Depois de consultar o CEP, é importante "jogar" o usuário para o campo de número, ou seja, dar o .focus no campo de número do endereço
```

#### Dicas:

* Uso de axios para rotas, `axios.get()`

- Instalar o axios no projeto
- Criar um arquivo pra ser o "gerenciador das requisições"
- Esse arquivo é onde vai ter as consultas do axios
- Maior parte ou todas as consultas serão no método GET
Na hora de montar a url: 
```
const URL = `https://brasilapi.com.br/api/cep/v1/${CEP}`
axios.get(URL).then(resposta => {
   console.log(resposta.data)
})
```
método async: 
```
const 
   URL = `https://brasilapi.com.br/api/cep/v1/${CEP}`,
   resposta = await axios.get(URL)

console.log(resposta.data)
```
PS: Await só pode ser usado dentro de funções que sejam async functions

> Referência: https://discordapp.com/channels/@me/950502079431082014/1005158461841084436

* Usar dado necessário como um parâmetro(param=cep)

- No caso do exercício `endereço/:cep` (dois pontos indicam parâmetro) e requisição `const cep = req.params.cep`

### Exercício III

```
Criar uma nova pagina HTML calculoFrete.html

Ela precisa ter os seguintes campos: 
- Altura (cm)
- Largura (cm)
- Profundidade (cm)
- Peso (g)
- CEP Origem
- CEP Destino

Criar o endpoint /pacote que usa o método POST
Por enquanto, recebe os dados na post e dá console.log nos dados do pacote

Usar bootstrap para os inputs
```

