function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >=0 && hora < 12) {
        //Bom Dia!
        document.body.style.background = 'rgb(129, 202, 250)'
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        document.body.style.background = 'rgb(222, 165, 101)'
        img.src = 'fototarde.png'
    } else {
        //Boa Noite!
        document.body.style.background = 'rgb(0, 53, 67)'
        img.src = 'fotonoite.png'
    }
}
