var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

const primes = [2,3,5,7,11,13,17,19,23,
29,31,37,41,43,47,53,59,61,67,
71,73,79,83,89,97,101,103,107,109,
113,127,131,137,139,149,151,157,163,167,
173,179,181,191,193,197,199,211,223,227,
229,233,239,241,251,257,263,269,271,277,
281,283,293,307,311,313,317,331,337,347,
349,353,359,367,373,379,383,389,397,401,
409,419,421,431,433,439,443,449,457,461,
463,467,479,487,491,499,503,509,521,523,
541,547,557,563,569,571,577,587,593,599,
601,607,613,617,619,631,641,643,647,653,
659,661,673,677,683,691,701,709,719,727,
733,739,743,751,757,761,769,773,787,797,
809,811,821,823,827,829,839,853,857,859,
863,877,881,883,887,907,911,919,929,937,
941,947,953,967,971,977,983,991,997]

const factor = number => Array
  .from(Array(11), (_, i) => i)
  .filter(i => number % i === 0)

class Problem extends Nanocomponent {
  constructor () {
    super()
    this.upper = '    '
    this.lower = '    '
    this.operator = ' '
    this.factors = Array()
  }

  createElement () {
    this.randomProblem()

    return html`
      <div class="fl w-10 pa2">
        <div class="bg-white pv1">
          <pre class="ma0 dib">${this.upper}</pre>
          <pre class="ma0 dib bb">${this.operator}${this.lower}</pre>
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
    return Math.trunc(Math.random()*Math.pow(10, length)).toString()
  }

  genUpper (op) {
    var upper = this.maxLenNumStrGen(3)
    if(op === '÷') {
      while(true) {
        if(primes.indexOf(parseInt(upper)) === -1) {
          this.factors = factor(upper)
          if(this.factors.length > 1) {
            this.factors.shift()
            return upper
          }
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
    for(var s=0; s<(4-str.length); s++) {
      padding = padding + ' '
    }
    return padding + str
  }

}

module.exports = Problem
