// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const PORT = 5000
const items = require('./data/Items')
const fetch = require('node-fetch');

fastify.register(require('fastify-cors'))
// Declare a route

fastify.get('/items', async (request, reply) => {
  // const response = await fetch(`https://ws.apicep.com/cep/${request.body.cep}.json`);
  // const data = await response.json();
  const dados = [{
    fullName: 'ytytv',
    profilePicture: '',
    rating: 0,
    city: 'uybhuyhuybh'
  }]
  console.log(dados);
  reply.send({
    listItens : dados,
    remainingItens: 0
  })
})

fastify.get('/about', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()