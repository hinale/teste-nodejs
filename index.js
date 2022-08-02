import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import Calculadora from './modules/Calculadora.js';
import { fileURLToPath } from 'url';

const app = express();

var jsonParser = bodyParser.json()

app.get('/status', (req, res) => {
  res.status(200).send('OK')
})

app.post('/calculadora', jsonParser, (req, res) => {
  // ENTRADA DE DADOS
  const
    num1 = +req.body.num1,
    num2 = +req.body.num2,
    operacao = req.body.operacao,

    // VALIDAÇÃO DE DADOS
    // Essa etapa foi delegada à classe especialista Calculadora

    // PROCESSAMENTO DOS DADOS
    funcaoCalculo = Calculadora[operacao],
    calculo = funcaoCalculo ? funcaoCalculo(num1, num2) : { success: false, erro: "Operação inválida" },
    mensagem = calculo.success ? "" + calculo.resultado : "ERRO: " + calculo.erro

  // SAIDA DE DADOS
  res
    .status(calculo.success ? 200 : 400)
    .setHeader('Content-Type', 'text/plain')
    .end(mensagem)

});

app.use('/', (req, res) => {
  const
    __filename = fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename)

  res.statusCode = 200;
  res.sendFile(path.join(__dirname + '/calculadora.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('--------------------------------');
  console.log('Servidor rodando na porta 3000');
  console.log('--------------------------------');
});