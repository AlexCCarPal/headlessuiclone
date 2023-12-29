'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./headlessuiclone.prod.cjs')
} else {
  module.exports = require('./headlessuiclone.dev.cjs')
}
