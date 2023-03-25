function verificar(){
    var data = new Date()
    var anoa = data.getFullYear() //gerFullYear pega o ano com os 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || Number(fano.value) > anoa){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoa - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancam.png')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemmas.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adultomas.png')
            } else{
                img.setAttribute('src', 'idosomas.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancaf.png')
            } else if(idade < 21){
                img.setAttribute('src', 'jovemfem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adultofem.png')
            } else{
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}