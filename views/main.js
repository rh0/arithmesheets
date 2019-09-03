var html = require('choo/html')

var TITLE = 'ArithmeSheets'

var Problem = require('../components/problem.js')
var problems = new Array()
for(var p=0; p<90; p++) {
  problems.push(new Problem)
}

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <header class="cf">
        <h1 class="fr bg-black-80 white mt0 mv3-l pl3 pr4 pv3">ArithmeSheets</h1>
        <div class="fixed bg-white dib mv0 f1 ph2 pv3">
          <span><a title="regenerate" class="light-red no-underline" href="javascript:return false" onclick=${shuffle}>💥</a></span><br>
          <span><a title="print" class="light-blue no-underline" href="javascript:window.print()">🖨</a></span>
        </div>
      </header>

      <main>
        <section>
        <div id="worksheet" class="center ph4">
          <div class="center tr cf ph1 f3">
            ${problems.map(function (problem) { return problem.render() })}
          </div>
        </div>
        </section>
      </main>

      <footer class="tc">
        <a class="link fixed w1 h1 right-1 bottom-1" href="https://electro.pizza">
          <img class="mw2" src="../assets/ep-logo-sharp.svg" />
        </a>
        <div class="pt4 pb2">Made with <a title="choo choo" class="black hover-red no-underline" href="https://choo.io/">🚂</a> in Austin</div>
      </footer>
    </body>
  `

  function shuffle () {
    emit('render', 1)
    return false
  }
}
