var html = require('choo/html')

var TITLE = 'oh no'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif h-100 pa3 tc cover flex items-center justify-center" style="background-image: url(../assets/ohno.gif);">
      <h1 class="f-headline"><a class="grow dib no-underline white" href="/">404</a></h1>
    </body>
  `
}
