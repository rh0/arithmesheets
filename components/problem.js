var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

const factor = number => Array
  .from(Array(11), (_, i) => i)
  .filter(i => number % i === 0)

class Problem extends Nanocomponent {
  constructor () {
    super()
    this.upper = '     '
    this.lower = '     '
    this.operator = ' '
    this.factors = Array()
  }

  createElement () {
    this.randomProblem()

    return html`
      <div class="prob dib w-auto w-10-l ph2">
        <div class="bg-white">
          <pre class="ma0">${this.upper}</pre>
          <pre class="ma0 bb">${this.operator}${this.lower}</pre>
          <br><br>
        </div>
      </div>
    `
  }

  update () {
    return true
  }

  randomProblem () {
    var operator = this.randomOperator()
    var upper = this.genUpper(operator)
    var lower = this.genLower(operator, upper)

    lower = this.padString(lower)

    this.upper = this.padString(upper)
    this.lower = lower.slice(1)
    this.operator = operator
  }

  maxLenNumStrGen (length) {
    while(true) {
    let num = Math.trunc(Math.random()*Math.pow(10, length)).toString()
      if(parseInt(num) > 1) {
        return num
      }
    }
  }

  genUpper (op) {
    var upper = this.maxLenNumStrGen(3)
    if(op === '÷') {
      while(true) {
        this.factors = factor(upper)

        if(this.factors.length > 1) {
          this.factors.shift()
          return upper
        }

        upper = this.maxLenNumStrGen(3)
      }
    }
    return upper
  }

  genLower (op, upper) {
    var lower

    while(true) {
      switch(op) {
        case '×':
          lower = this.maxLenNumStrGen(2)
          if(upper >= lower &&  parseInt(lower) > 1) {
            return lower
          }
          break
        case '÷':
          return this.factors[Math.trunc(Math.random() * 10000) % this.factors.length].toString()
          break
        default:
          lower = this.maxLenNumStrGen(upper.length)
          if(upper >= lower) {
            return lower
          }
          break
      }
    }
  }

  randomOperator () {
    var operators = ['+', '−', '×', '÷']
    return operators[Math.trunc(Math.random() * 10000) % 4]
  }

  padString (str) {
    var padding = ''
    for(var s=0; s<(5-str.length); s++) {
      padding = padding + ' '
    }
    return padding + str
  }

}

module.exports = Problem
