const app = require('./app')
const config = require('./util/config')
const logger = require('./util/logger')

const PORT  = config.PORT

app.listen(config.PORT,() => {
  logger.info(`Server running on port ${config.PORT}`)
})
