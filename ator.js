//código do ator
let meusPontos = 0;

let xAtor = 85;
let yAtor = 366;
let colisao = false;


//mostrar ator
function mostraAtor(){
    image(imagemDoAtor, xAtor ,yAtor, 30, 30 );
  
}

//movimenta ator
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
       yAtor -= 4;
     }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor += 4;
       }
     }
}

function verificaColisao(){
 // colideRectCircle(x1, y1, width1, height1, cx, cy, diameter); 
  for(let i =0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarros[i],  alturaCarros[i], xAtor, yAtor, 15);
    if(colisao){
      somDaColisao.play();
       voltaAtorParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos -=1;
        
         }
       }
    
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;

}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(153,50,204));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    somDoPonto.play();
    meusPontos+=1;
    voltaAtorParaPosicaoInicial();
     }
}

function pontosMaiorQueZero(){//se for verdade ele retorna para função 
   return meusPontos > 0 ;
 
}

function podeSeMover(){
  return yAtor < 366;
}
