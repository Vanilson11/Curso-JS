let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){ //vai verificar se o valor  do parametro N, que está recebendo como parametro a var num está entre 1 e 100
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){ //vai procurar na lista (l) o se o valor (n) está dentro da lista que está com o array (valores) passado como parâmetro
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function analisar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é de ${media.toFixed(2)}</p>`
    }
}
