var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

class Problem extends Nanocomponent {
  constructor () {
    super()
    this.upper = '    '
    this.lower = '    '
    this.operator = ' '
  }

  createElement () {
    this.randomProblem()

    return html`
      <div class="fl w-10 pa2">
        <div class="bg-white pv1">
          <pre class="ma0 dib">${this.upper}</pre>
          <pre class="ma0 dib bb">${this.operator}${this.lower}</pre>
          <br>
        </div>
      </div>
    `
  }

  randomProblem () {
    var upper = Math.trunc(Math.random()*1000).toString()
    var lower = Math.trunc(Math.random()*100).toString()
    var operator = this.randomOperator()

    lower = this.padString(lower)

    this.upper = this.padString(upper)
    this.lower = lower.slice(1)
    this.operator = operator
  }

  padString (str) {
    var padding = ''
    for(var s=0; s<(4-str.length); s++) {
      padding = padding + ' '
    }
    return padding + str
  }

  randomOperator () {
    var operators = ['+', '−', '×', '÷']
    return operators[Math.trunc(Math.random() * 1000000)%4]
  }
}

module.exports = Problem
