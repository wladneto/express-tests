const request = require('supertest');
const express = require('express');
const router = require('../app.js');


const app = new express();
app.use('/', router);

describe('Good Home Routes', function () {

  test('Responds to /', async () => {
    const res = await request(app).get('/'); 
    var pjson = require('../package.json');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Welcome');
    expect(res.body.appName).toEqual(pjson.name);
    expect(res.body.version).toEqual(pjson.version);
  });

  test('Responds to /health', async () => {
    const res = await request(app).get('/health'); 
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('OK');
  });
  

});