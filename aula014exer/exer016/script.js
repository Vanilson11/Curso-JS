function contar(){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    if (n1.value.length == 0){
        res.innerHTML = `Impossível realizar a contagem.`
    } else if(pass.value.length == 0 || Number(pass.value) <= 0){
        window.alert('[ERROR] Impossível realizar contagem com passo zero!')
    } else{
        if (n1.value < n2.value){
            res.innerHTML = `Contando: <br>`
            var c = Number(n1.value)
            while (c <= Number(n2.value)){
            res.innerHTML += `${c} \u{1F449}`
            c += Number(pass.value)
            }
        } else if (n1.value > n2.value){
            res.innerHTML = `Contando: <br>`
            for (var c = Number(n1.value); c >= Number(n2.value); c -= Number(pass.value)){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}