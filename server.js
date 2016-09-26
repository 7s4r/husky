const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const React = require('react')
const Router = require('react-router')
const routes = require('./src/shared/routes')

// Set static files dir
app.use(express.static(path.resolve('node_modules')))
app.use(express.static(path.resolve('public')))

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(`<Handler />`)
    res.render('./public/index', { content: content })
  })
})

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')

  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.send('ERROR')
})

const PORT = process.env.PORT || '3000'
const server = http.createServer(app)

server.listen(PORT, () => {
  console.info(`Listening on ${PORT}`)
})
