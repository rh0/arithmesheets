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
        <h1 class="fr bg-black-80 white mv3 pl2 pr4">ArithmeSheets</h1>
        <div class="fixed lh-solid dib mv3 f1 pl4 pr2 bg-red black-80">
          <span>↯</span>
          <span>✍</span>
        </div>
      </header>

      <main>
        <section>
        <div id="worksheet" class="center ph4-ns tr">
          <div class="cf ph1-ns f3-ns b-l">
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

  function handleClick () {
    emit('clicks:add', 1)
  }
}
