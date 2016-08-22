import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'
import Express from 'express'
const app = new Express()

const port = process.env.PORT || 3000

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
}))

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
}))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`
      🌎 Listening on port ${port}.
      Open up http://localhost:${port}/ in your browser.`
    )
  }
})
