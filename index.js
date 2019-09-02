var css = require('sheetify')
var choo = require('choo')

css`
html { height: 100%; }
#worksheet { max-width: 935px; }
@media print {
  header { display: none; }
  footer { display: none; }
}
`
css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
