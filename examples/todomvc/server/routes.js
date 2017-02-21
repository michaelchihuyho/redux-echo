module.exports = function(app) {
    // Render routes
    app.get('', function(req, res, next) {
      res.render('index.pug')
    })
    app.get('/', function(req, res, next) {
      res.render('index.pug')
    })
    app.use(function(req, res, next) {
        res.status(404).send('Sorry cant find that!')
    })
}
