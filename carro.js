//código do carros
//listas com índices
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = [50, 50, 50, 50 ,50 ,50];
let alturaCarros = [40, 40 ,40, 40, 40, 40]


//função para mostrar os carros pegando os valores de indices de uma lista contida na imagens.js
//como os índices eram os mesmos deu pra fazer um for pra mostrar os valores 3x
function mostraCarro(){
  for(let i =0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i]);
  }    
}

function movimentaCarro(){
  for(let i=0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
  

}

function voltaPosicaoInicialDoCarro(){
 for(let i=0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
       xCarros[i] = 600;
     }
  }
}


function passouTodaATela(xCarros){
   return xCarros < -40
}
