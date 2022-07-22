const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
// faz a leitura do body
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/resultado', urlencodedParser, (req, res) => {

  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);

  var sum = num1 + num2;
  var div = num1 / num2;
  var sub = num1 - num2;
  var mul = num1 * num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Erro: Preencha todos os campos com numeros');
  }

  if (req.body.operacao == 'sum') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Soma igual a : ' + sum.toString());
  }

  if (req.body.operacao == 'sub') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Subtracao igual a : ' + sub.toString());
  }

  if (req.body.operacao == 'mul') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Multiplicacao igual a: ' + mul.toString());
  }

  if (req.body.operacao == 'div') {
    if (num2 == 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Erro: Nao e possivel dividir por 0');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Divisao igual a: ' + div.toString());
    }
  }

});

app.use('/', (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname + '/' + 'calculadora.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('--------------------------------');
  console.log('Servidor rodando na porta 3000');
  console.log('--------------------------------');
});