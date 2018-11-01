'use strict';

var readline = require('readline');
var request = require('request');

var API = {
  host: 'https://www.mercadobitcoin.net',
  path: '/api/'
};

var coin = 'btc'; //bitcoin
var method = 'ticker'; //resumo das operações executadas

request(API.host + API.path + coin + '/' + method, { json: true }, (err, res, body) => {
  var result = body;
  console.log(result);
});