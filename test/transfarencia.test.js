const request = require('supertest')
const { expect } = require('chai')
const { obterToken } = require('../helpers/autenticacao')
require('dotenv').config()
const postTransferencias = require('../fixture/postTransfarencias.json')

describe('Transferências', () => {
   describe('POST /transferencias',  () => {
    let token  

    beforeEach(async () =>{
        token = await obterToken('julio.lima','123456')
    })
    
    it('Deve retornar sucesso com 201 quando o valor for igual ou acima de 10,00', async() => {
    const bodyTransferencias = {...postTransferencias} 
    
    const resposta = await request(process.env.BASE_URL)  
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)


            expect(resposta.status).to.equal(201)
            
            
    })
     
      it('Deve retornar falha com 422 quando o valor menor que 10,00', async () => {
        const bodyTransferencias = {...postTransferencias} 
        bodyTransferencias.valor = 7
        const resposta = await request('http://localhost:3000')  
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)

            expect(resposta.status).to.equal(422)
      })
   
    })

})