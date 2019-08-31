var html = require('choo/html')

var TITLE = 'ArithmeSheets'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy tc ph2-ns">
      <main>
        <section>
        <h1 class="tr">ArithmeSheets</h1>
        <div class="mw9 center">
          <div class="cf ph1-ns f3-ns b-l">
            <div class="fl w-10 pa2">
              <div class="bg-white pv1">
                <pre class="ma0"> 132</pre>
                <pre class="ma0 bb">×  2</pre>
                <br>
              </div>
            </div>
            <div class="fl w-10 pa2">
              <div class="bg-white pv1">
                <pre class="ma0">  52</pre>
                <pre class="ma0 bb">÷  2</pre>
                <br>
              </div>
            </div>
            <div class="fl w-10 pa2">
              <div class="bg-white pv1">
                <pre class="ma0"> 452</pre>
                <pre class="ma0 bb">− 32</pre>
                <br>
              </div>
            </div>
            <div class="fl w-10 pa2">
              <div class="bg-white pv1 pa2">
                <pre class="ma0">   2</pre>
                <pre class="ma0 bb">+  2</pre>
                <br>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>
      <footer>
        <a class="link" href="https://electro.pizza">
          <img class="mw2" src="../assets/ep-logo-sharp.svg" />
        </a>
      </footer>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
