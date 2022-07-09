module.exports = class Compare {
    constructor() {
        
    }

    check(word, hidden) {
        if(typeof(word) != 'string' || typeof(hidden) != 'string' || word.length != hidden.length) return undefined

        var remove = hidden
        var result = ''
        
        var exact = ''
        var removeIndex = 0
        for(let i in word) {
            if(word[i] == hidden[i]) {
                remove = remove.slice(0, removeIndex) + remove.slice(removeIndex + 1)
                exact += '1'
            } else {
                exact += '0'
                removeIndex++
            }
        }

        var optional = ''
        for(let i = 0; i < word.length; i++) {
            if(exact[i] == '1') {
                optional += '0'
                continue
            } 

            var loopForFunc = () => {
                for(let j = 0; j < remove.length; j++) {
                    if(remove[j] == word[i]) return j
                }

                return -1
            }

            var charToRemove = loopForFunc()

            if(charToRemove >= 0) {
                optional += '2'
                remove = remove.slice(0, charToRemove) + remove.slice(charToRemove + 1)
            } else {
                optional += '0'
            }
        }

        for(let i in exact) {
            if(exact[i] == '1') {
                result += '1'
            } else {
                if(optional[i] == '2') {
                    result += '2'
                } else {
                    result += '0'
                }
            }
        }

        return result
    }
}