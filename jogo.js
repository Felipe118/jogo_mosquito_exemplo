
let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

function ajustaTamanhoPalcoJogo(){
altura = window.innerHeight
 largura = window.innerWidth

}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo -= 1

    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
   
},1000)







//Criando elemento HTML

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
  
        if(vidas > 3){
           window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
    }

 


    let posicaoX =Math.floor( Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    


let mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick= function(){
    this.remove()

}
document.body.appendChild(mosquito)



}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
   

    if(classe === 0){
        return 'mosquito1'
    }else if(classe === 1){
        return 'mosquito2'
    }else if(classe === 2){
        return 'mosquito3'

    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    

    if(classe === 0){
        return 'ladoA'
    }else if(classe === 1){
        return 'ladoB'
    }
}

