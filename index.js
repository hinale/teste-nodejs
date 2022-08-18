import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Calculadora from './modules/Calculadora.js';
import { fileURLToPath } from 'url';
import axios from 'axios';

const app = express();
var jsonParser = bodyParser.json()

app.listen(process.env.PORT || 3000, () => {
  console.log('--------------------------------');
  console.log('Servidor rodando na porta 3000');
  console.log('--------------------------------');
});

app.use('/calculadora', (req, res) => {
  const
    __filename = fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename)

  res.statusCode = 200;
  res.sendFile(path.join(__dirname + '/pages/calculadora.html'));
});

app.post('/calculadora', jsonParser, (req, res) => {
  // ENTRADA DE DADOS
  const
    num1 = +req.body.num1,
    num2 = +req.body.num2,
    operacao = req.body.operacao

  console.log(num1, num2, operacao)

  // VALIDAÇÃO DE DADOS
  // Essa etapa foi delegada à classe especialista Calculadora

  // PROCESSAMENTO DOS DADOS
  const funcaoCalculo = Calculadora[operacao],
    calculo = funcaoCalculo ? funcaoCalculo(num1, num2) : { success: false, erro: "Operação inválida" },
    mensagem = calculo.success ? "" + calculo.resultado : "ERRO: " + calculo.erro

  // SAIDA DE DADOS
  res
    .status(calculo.success ? 200 : 400)
    .setHeader('Content-Type', 'text/plain')
    .end(mensagem)

});

app.get('/', (req, res) => {
  const
    __filename = fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename)

  res.statusCode = 200;
  res.sendFile(path.join(__dirname + '/pages/endereco.html'));
});

app.get('/endereco/:cep', jsonParser, (req, res) => {
  const CEP = +req.params.cep;
  const URL = `https://brasilapi.com.br/api/cep/v1/${CEP}`

  axios.get(URL).then(resposta => {
    res.status(200).json(resposta.data)
  }).catch(erro => {
    res.status(400).json(erro)
  })
});