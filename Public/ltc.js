'use strict';

const request = require('request');
const router = request.router();

var API = {
  host: 'https://www.mercadobitcoin.net',
  path: '/api/'
};

var coin = 'ltc'; //bitcoin
var method = 'ticker'; //resumo das operações executadas

function testeFunction() {
  request.get(API.host + API.path + coin + '/' + method, { json: true }, (err, res, body) => {
    var result = body;
    console.log(body);

    return result;
  }).export



/*
  $(document).ready(function () {
    $.ajax({
      url: "https://www.mercadobitcoin.net/api/ltc/ticker"
    }).then(function (ticker) {
      $('.last').append(data.id);
      $('.ticker').append(data.content);
    });
  })
*/

}