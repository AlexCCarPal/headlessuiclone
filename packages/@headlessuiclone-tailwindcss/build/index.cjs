'use strict'

let plugin =
  process.env.NODE_ENV === 'production'
    ? require('./headlessuiclone.prod.cjs')
    : require('./headlessuiclone.dev.cjs')

module.exports = (plugin.__esModule ? plugin : { default: plugin }).default
