function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        img.src = 'fotomanha.png'
        msg.innerHTML += `<strong>Bom dia!</strong>`
        document.body.style.background = '#58838a'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        msg.innerHTML += `<strong>Boa Tarde</strong>`
        document.body.style.background = '#713723'
    } else {
        img.src = 'fotonoite.png'
        msg.innerHTML += `<p><strong>Boa Noite</strong></p>`
        document.body.style.background = '#1d2824'
    }
}
