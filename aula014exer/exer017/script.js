function calc(){
    var n1 = document.getElementById('n1')
    let tab = document.getElementById('seltab')
    var prod = ''
    var c = 1
    if (n1.value.length == 0){
        window.alert('[ERROR] É preciso digitar um número.')
    } else{
        tab.innerHTML = ''
        while  (c <= 10){
            prod = Number(n1.value) * c
            let item = document.createElement('option')
            item.text = `${Number(n1.value)} X ${c} = ${prod}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}