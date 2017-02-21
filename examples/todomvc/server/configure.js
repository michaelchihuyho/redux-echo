var express = require('express')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , methodOverride = require('method-override')

module.exports = function(app) {
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(methodOverride())

    app.use(function (req, res, next) {
        if (/\.gzip?/.test(req.url)) {
            res.set('Content-Encoding', 'gzip')
        }
        next()
    })
    app.use('/', express.static(__dirname + '/../client/static'))

    app.set('views', __dirname + '/views')
    app.set('view engine', 'html')
}
