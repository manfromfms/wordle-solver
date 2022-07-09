module.exports = class Except {
    constructor() {

    }

    check(word, rules) {
        if(!word) return false
        var exact = rules[0]
        var optional = rules[1]
        var banned = rules[2]

        for(let i = 0; i < exact.length; i++) {
            if(exact[i] == '0') continue
            if(exact[i] != word[i]) return false
        }

        for(let i = 0; i < optional.length; i++) {
            for(let j = 0; j < optional[i].length; j++) {
                if(optional[i][j] == '0') continue
                if(!word.includes(optional[i][j])) return false
                if(word[j] == optional[i][j]) return false
            }
        }

        for(let i = 0; i < banned.length; i++) {
            if(word.includes(banned[i])) return false
        }

        return true
    }
}