var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var contentTypes = {
  'html' : 'text/html',
  'css'  : 'text/css',
  'ico'  : 'image/x-icon',
  'png'  : 'image/png',
  'svg'  : 'image/svg+xml',
  'js'   : 'application/javascript',
  'js'   : 'module/javascript',
  'otf'  : 'application/x-font-otf',
  'ttf'  : 'application/x-font-ttf',
  'eot'  : 'application/vnd.ms-fontobject',
  'woff' : 'application/x-font-woff',
  'woff2': 'application/font-woff2',
  'zip'  : 'application/zip'
}
http.createServer(function (pedido, resposta) {

  // Aqui vamos escrever o código do servidor que vai ser
  // executado sempre que for feito um pedido

   
var caminho = url.parse(pedido.url).pathname;
if (caminho==='/') {
  var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
 } else {
  var ficheiro = path.join(__dirname, 'public', caminho);
 }
 var extensao = path.extname(ficheiro).slice(1);
 resposta.setHeader('Content-Type', contentTypes[extensao]);  

 fs.readFile(ficheiro, function (erro, dados) {
  if (erro) {
  resposta.writeHead(404);
  resposta.end();
  } else {
  resposta.end(dados);
  }
 });

  }).listen(3000, 'localhost', function () {
    console.log('--- O servidor arrancou –--');
  });

