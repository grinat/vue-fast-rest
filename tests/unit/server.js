const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {createFixtures} = require('./fixtures')

function initAndRunFixtureServer(config) {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())

  const fixtures = createFixtures()

  for (let url in fixtures) {
    const {data = {}, method} = fixtures[url]
    app[method](url, (req, res) => {
      let out = {}

      if (method === 'post') {
        out = {...req.body}
        out.id = +new Date()
        out.copyright = 'data created on server'
      } else if (method === 'patch') {
        out = {...req.body}
        out.copyright = 'data updated on server'
      } else {
        out = {...data}
      }

      // console.debug(method, url, out, req.body)

      res.send(out).end()
    })
  }

  return {
    app,
    server: app.listen(config.port)
  }
}

module.exports.initAndRunFixtureServer = initAndRunFixtureServer
