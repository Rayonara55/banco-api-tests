const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()

describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
      const respostas = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          username: 'julio.lima',
          senha: '123456'
        })
      
      
        
      expect(respostas.status).to.equal(200)
      expect(respostas.body.token).to.be.a('string')
    })
  })
})


