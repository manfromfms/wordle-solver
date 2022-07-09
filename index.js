/*
const Compare = require('./scripts/compare.js')
const comp = new Compare()
*/

console.clear()

const Except = require('./scripts/except.js')
const exc = new Except()

var base = require('./src/compared.json')
var allowed = require('./src/allowed.json')
var possible = require('./src/possible.json')

//const settings = ['00000', ['00000', '00000', '00000', '00000', '00000'], '']
const settings = ['0000y', ['000m0', '000d0', '00000', '00000', '00000'], 'acisroatesli']
var start = Date.now()

console.log(exc.check(state, settings))

var result = []
var posRes = {}
for(let i = 0; i < base.length; i++) {
    var freq = {}

    for(let j = 0; j < base[i].length; j+=5) {
        var state = base[i][j] + base[i][j+1] + base[i][j+2] + base[i][j+3] + base[i][j+4]

        if(!exc.check(possible[j/5], settings)) continue

        if(!freq[state]) {
            freq[state] = 1
        } else {
            freq[state] ++
        }

        if(!posRes[possible[j/5]]) posRes[possible[j/5]] = 0
    }

    var sum = 0
    for(let j in freq) {
        sum += Math.pow(freq[j] / (base[i].length / 5), 2)
    }

    var difLetters = {}
    for(let j = 0; j < allowed[i].length; j++) {
        if(difLetters[allowed[i][j]]) {
            difLetters[allowed[i][j]]++
        } else {
            difLetters[allowed[i][j]] = 1
        }
    }

    result.push({word: allowed[i], sum: sum * (allowed[i].length - Object.keys(difLetters).length + 1)})
}

console.log(result.sort((a, b) => {return a.sum - b.sum})[0])

if(Object.keys(posRes).length < 10) {
    console.log(Object.keys(posRes))
} else {
    console.log(Object.keys(posRes).length)
}

var end = Date.now()
console.log('Done in ' + (end - start) + 'ms')