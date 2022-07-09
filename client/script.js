var socket = io()

var scan = () => {
    var rows = document.getElementsByClassName('Row')
    
    for(let i = 0; i < rows.length; i++) {
        rows[i].innerHTML = ''
    }
}