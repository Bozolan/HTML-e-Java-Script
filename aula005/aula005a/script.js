
function CarregarFoto ()
{
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours ()
   
    msg.innerHTML = 'Carregando...'+hora + '...Horas'

    if (hora>=0 && hora <12)
    {
        //Foto 01
        img.src = 'modelo/img/cal01.png'
        document.body.style.background='#1f1e24'

    }
    else if(hora>=12 && hora <=18)
        {
        //Foto 02
        img.src = 'modelo/img/cal02.png'
        document.body.style.background='#bbaf97'
    }
else {
    //Foto 03
    img.src = 'modelo/img/cal03.png'
    document.body.style.background='#578267'

  
}
}

