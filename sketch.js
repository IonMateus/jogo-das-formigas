var jogador=formiga1;
var formiga1,fu1;
var formiga2,fu2;
var formiga3,fu3;
var tampajogador;
var vidajogador=100;
var formigueiro,terra;
var folha1,verdinha1;
var placarfolhasextraidas=0;
var placartempo1=0;
var placartempo2=0;
var placartempo3=0;
var placarfolhas=0;
var formigarainha,fura;
var placarfolhasextraidas1=0;
var placarfolhasextraidas2=0;
var numero0,digito0;
var numero1,digito1;
var numero2,digito2;
var numero3,digito3;
var numero4,digito4;
var numero5,digito5;
var numero6,digito6;
var numero7,digito7;
var numero8,digito8;
var numero9,digito9;
var numero00,digito00;
var numero11,digito11;
var numero22,digito22;
var numero33,digito33;
var numero44,digito44;
var numero55,digito55;
var numero66,digito66;
var numero77,digito77;
var numero88,digito88;
var numero99,digito99;
var inimigo1,cacto1;
var vidainimigo1=100;
var numero000,digito000;
var numero111,digito111;
var numero222,digito222;
var numero333,digito333;
var numero444,digito444;
var numero555,digito555;
var numero666,digito666;
var numero777,digito777;
var numero888,digito888;
var numero999,digito999;
var chaodegrama,gramado;
var estadofolha = "comfolha";
var estadoataque="pacifico";
var parede1;
var parede2;
var parede3;
var parede4;
var estadojogo="jogar"
var jogadorvida100,vida100;
var jogadorvida90,vida90;
var jogadorvida80,vida80;
var jogadorvida70,vida70;
var jogadorvida60,vida60;
var jogadorvida50,vida50;
var jogadorvida40,vida40;
var jogadorvida30,vida30;
var jogadorvida20,vida20;
var jogadorvida10,vida10;
var jogadorvida0,vida0;
var pafo1;
var pafo2;
var pafo3;
var pafo4;
var pafo5;
var pafo6;
var pafo7;
var estadopoder="sempoder"; 
var potedepoder,potepoderimage;
var placarpoder=0;
var morteinimigo1="vivo"
var inimigo2, inimigo2image;
var estadoinimigo2="dormindo";
var musicadefundo;
var vidainimigo2=300;
var morteinimigo2="vivo"


function preload(){
  //imagens pré-carregadas

digito0=loadImage("numero0.png")  
digito1=loadImage("numero1.png") 
digito2=loadImage("numero2.png")  
digito3=loadImage("numero3.png")  
digito4=loadImage("numero4.png")  
digito5=loadImage("numero5.png")  
digito6=loadImage("numero6.png")
digito7=loadImage("numero7.png")  
digito8=loadImage("numero8.png")   
digito9=loadImage("numero9.png")   

digito00=loadImage("numero0.png")  
digito11=loadImage("numero1.png") 
digito22=loadImage("numero2.png")  
digito33=loadImage("numero3.png")  
digito44=loadImage("numero4.png")  
digito55=loadImage("numero5.png")  
digito66=loadImage("numero6.png")
digito77=loadImage("numero7.png")  
digito88=loadImage("numero8.png")   
digito99=loadImage("numero9.png")   

digito000=loadImage("numero0.png")  
digito111=loadImage("numero1.png") 
digito222=loadImage("numero2.png")  
digito333=loadImage("numero3.png")  
digito444=loadImage("numero4.png")  
digito555=loadImage("numero5.png")  
digito666=loadImage("numero6.png")
digito777=loadImage("numero7.png")  
digito888=loadImage("numero8.png")   
digito999=loadImage("numero9.png")    
  
fu1=loadImage("fu.png")
fu2=loadImage("fu.png")  
fu3=loadImage("fu.png")  
fura=loadImage("fura.png")
  
terra=loadImage("fuuuo.png")  

verdinha1=loadImage("folhao.png")  

gramado=loadImage("gramas.png");
  
cacto1=loadImage("besoro.png");

vida100=loadImage("vida100.png")  
vida90=loadImage("vida90.png")  
vida80=loadImage("vida80.png")
vida70=loadImage("vida70.png")  
vida60=loadImage("vida60.png")  
vida50=loadImage("vida50.png")
vida40=loadImage("vida40.png")  
vida30=loadImage("vida30.png")  
vida20=loadImage("vida20.png")  
vida10=loadImage("vida10.png")  
vida0=loadImage("vida0.png")  
morta=loadImage("fomorta.png")  
direita=loadImage("direita.png")
esquerda=loadImage("esquerda.png")  
cima=loadImage("cima.png")  
baixo=loadImage("baixo.png")  
potepoderimage=loadImage("potedepoder.png")
inimigo2image=loadImage("potedepoder.png")

musicadefundo=loadSound("musicadefundo.mp3")  

sommorteformiga=loadSound("musicadefundo.mp3")  
  
  
}



function setup(){
  createCanvas(600,600);
//crie os sprites aqui
 
jogador=createSprite(300, 200, 5, 5); 
 
parede1=createSprite(300,600,700, 10) 
parede2=createSprite(300,0,700, 10)
parede3=createSprite(0,300,10, 700)  
parede4=createSprite(600,300,10, 700)  

parede1.shapeColor="black";  
parede2.shapeColor="black";  
parede3.shapeColor="black";  
parede4.shapeColor="black";  

 
  
tampajogador=createSprite(1000, 2000, 600, 600); 
tampajogador.shapeColor="black"
 
chaodegrama=createSprite(300, 300, 10, 10)  
chaodegrama.addImage(gramado)  
chaodegrama.scale=1.0;
  
  
  folha1=createSprite(100, 130, 10, 10); 
folha1.shapeColor="green";   
 folha1.addImage(verdinha1)
 folha1.scale=1.7; 
 
  folha1.debug=false;
 folha1.setCollider("circle",-3,2,25);
  
  
 formigueiro=createSprite(300, 500, 150, 150)  
 formigueiro.addImage(terra) 
 formigueiro.scale=1.7;
 
 formigueiro.debug=false;
 formigueiro.setCollider("rectangle",0,15,240,60); 
  
potedepoder=createSprite(130, 550, 10, 10);  
potedepoder.addImage(potepoderimage)
potedepoder.debug=false; 
  
inimigo1=createSprite(500, 300, 25, 25); 
inimigo1.shapeColor="red" 
inimigo1.addImage(cacto1)
inimigo1.scale=1.7;
 
inimigo2=createSprite(60, 400, 25, 25); 
inimigo2.shapeColor="red" 
inimigo2.addImage(inimigo2image)
inimigo2.scale=1.7;  
inimigo2.debug=false;  
inimigo2.setCollider("circle",0,0,15)  
  
 inimigo1.debug=false;
 inimigo1.setCollider("circle",-1,0,15); 
   
  
formiga1=createSprite(300, 300, 5, 5); 
formiga1.shapeColor="blue" 
formiga1.addImage(fu1);

formiga1.debug=false;
 formiga1.setCollider("circle",0,0,8);  

pafo1=createSprite(100, 525, 10, 110)  
pafo3=createSprite(500, 525, 10, 110)
pafo2=createSprite(300, 580, 400, 10)  
pafo4=createSprite(390, 470, 220, 10)  
pafo5=createSprite(155, 470, 110, 10)
pafo6=createSprite(210, 440, 10, 70)   
pafo7=createSprite(280, 440, 10, 70)  
 
pafo1.visible=false;  
pafo2.visible=false;  
pafo3.visible=false;  
pafo4.visible=false;  
pafo5.visible=false; 
pafo6.visible=false;  
pafo7.visible=false; 
  
formiga2=createSprite(200, 300, 5, 5); 
formiga2.shapeColor="blue"
formiga2.addImage(fu2); 
formiga2.debug=false;
formiga2.setCollider("circle",0,0,8);  
  
formiga3=createSprite(200, 200, 5, 5); 
formiga3.shapeColor="blue"   
formiga3.addImage(fu3);
formiga3.debug=false;
formiga3.setCollider("circle",0,0,8);  
  
formigarainha=createSprite(470, 520, 10, 20) 
formigarainha.addImage(fura)
formigarainha.scale=1.0;
formigarainha.debug=false;
formigarainha.setCollider("circle",0,3,15);  
  
numero0=createSprite(200, -30, 10, 10)
numero0.addImage(digito0)
numero0.scale=2.0;  
  
numero1=createSprite(200, -30, 10, 10)
numero1.addImage(digito1)
numero1.scale=2.0;
 
numero2=createSprite(210, -30, 10, 10)
numero2.addImage(digito2)
numero2.scale=2.0;  
  
numero3=createSprite(220, -30, 10, 10)
numero3.addImage(digito3)
numero3.scale=2.0;  
  
numero4=createSprite(220, -30, 10, 10)
numero4.addImage(digito4)
numero4.scale=2.0;   
  
numero5=createSprite(220, -30, 10, 10)
numero5.addImage(digito5)
numero5.scale=2.0;   
  
numero6=createSprite(220, -30, 10, 10)
numero6.addImage(digito6)
numero6.scale=2.0;   
  
numero7=createSprite(220, -30, 10, 10)
numero7.addImage(digito7)
numero7.scale=2.0;   
  
numero8=createSprite(220, -30, 10, 10)
numero8.addImage(digito8)
numero8.scale=2.0;    
  
numero9=createSprite(220, -30, 10, 10)
numero9.addImage(digito9)
numero9.scale=2.0;    
 
numero00=createSprite(200, -30, 10, 10)
numero00.addImage(digito00)
numero00.scale=2.0;  
  
numero11=createSprite(200, -30, 10, 10)
numero11.addImage(digito11)
numero11.scale=2.0;
 
numero22=createSprite(210, -30, 10, 10)
numero22.addImage(digito22)
numero22.scale=2.0;  
  
numero33=createSprite(220, -30, 10, 10)
numero33.addImage(digito33)
numero33.scale=2.0;  
  
numero44=createSprite(220, -30, 10, 10)
numero44.addImage(digito44)
numero44.scale=2.0;   
  
numero55=createSprite(220, -30, 10, 10)
numero55.addImage(digito55)
numero55.scale=2.0;   
  
numero66=createSprite(220, -30, 10, 10)
numero66.addImage(digito66)
numero66.scale=2.0;   
  
numero77=createSprite(220, -30, 10, 10)
numero77.addImage(digito77)
numero77.scale=2.0;   
  
numero88=createSprite(220, -30, 10, 10)
numero88.addImage(digito88)
numero88.scale=2.0;    
  
numero99=createSprite(220, -30, 10, 10)
numero99.addImage(digito99)
numero99.scale=2.0;  
  
numero000=createSprite(200, -30, 10, 10)
numero000.addImage(digito000)
numero000.scale=2.0;  
  
numero111=createSprite(200, -30, 10, 10)
numero111.addImage(digito111)
numero111.scale=2.0;
 
numero222=createSprite(210, -30, 10, 10)
numero222.addImage(digito222)
numero222.scale=2.0;  
  
numero333=createSprite(220, -30, 10, 10)
numero333.addImage(digito333)
numero333.scale=2.0;  
  
numero444=createSprite(220, -30, 10, 10)
numero444.addImage(digito444)
numero444.scale=2.0;   
  
numero555=createSprite(220, -30, 10, 10)
numero555.addImage(digito555)
numero555.scale=2.0;   
  
numero666=createSprite(220, -30, 10, 10)
numero666.addImage(digito666)
numero666.scale=2.0;   
  
numero777=createSprite(220, -30, 10, 10)
numero777.addImage(digito777)
numero777.scale=2.0;   
  
numero888=createSprite(220, -30, 10, 10)
numero888.addImage(digito888)
numero888.scale=2.0;    
  
numero999=createSprite(220, -30, 10, 10)
numero999.addImage(digito999)
numero999.scale=2.0;  

vidajogador100=createSprite(60, -35, 100, 100)  
vidajogador100.addImage(vida100)  
vidajogador100.scale=1.4;  
  
vidajogador90=createSprite(60, -35, 100, 100)  
vidajogador90.addImage(vida90)  
vidajogador90.scale=1.4;  
  
vidajogador80=createSprite(60, -35, 100, 100)  
vidajogador80.addImage(vida80)  
vidajogador80.scale=1.4;   
  
vidajogador70=createSprite(60, -35, 100, 100)  
vidajogador70.addImage(vida70)  
vidajogador70.scale=1.4;   
  
vidajogador60=createSprite(60, -35, 100, 100)  
vidajogador60.addImage(vida60)  
vidajogador60.scale=1.4;   
  
vidajogador50=createSprite(60, -35, 100, 100)  
vidajogador50.addImage(vida50)  
vidajogador50.scale=1.4;   
  
vidajogador40=createSprite(60, -35, 100, 100)  
vidajogador40.addImage(vida40)  
vidajogador40.scale=1.4;   
  
vidajogador30=createSprite(60, -35, 100, 100)  
vidajogador30.addImage(vida30)  
vidajogador30.scale=1.4;   
  
vidajogador20=createSprite(60, -35, 100, 100)  
vidajogador20.addImage(vida20)  
vidajogador20.scale=1.4;   
  
vidajogador10=createSprite(60, -35, 100, 100)  
vidajogador10.addImage(vida10)  
vidajogador10.scale=1.4;   
  
vidajogador0=createSprite(60, -35, 100, 100)  
vidajogador0.addImage(vida0)  
vidajogador0.scale=1.4; 
  
  
  
inimigo1.velocityY=1;
inimigo1.velocityX=0.1;  
   
inimigo2.velocityY=1;  
inimigo2.velocityX=1.5;   

}


  
 
  





function draw() {
  background(0);
  
  

  numero1.x=200; 
  numero1.y=-40; 
  
  numero2.x=200; 
  numero2.y=-40;
  
  numero3.x=200; 
  numero3.y=-40;
  
  numero4.x=200; 
  numero4.y=-40; 
  
  numero5.x=200; 
  numero5.y=-40; 
  
  numero6.x=200; 
  numero6.y=-40; 
  
  numero7.x=200; 
  numero7.y=-40; 
  
  numero0.x=200; 
  numero0.y=-40;
  
  numero8.x=200; 
  numero8.y=-40;
  
  numero9.x=200; 
  numero9.y=-40;
  
  numero11.x=200; 
  numero11.y=-40; 
  
  numero22.x=200; 
  numero22.y=-40;
  
  numero33.x=200; 
  numero33.y=-40;
  
  numero44.x=200; 
  numero44.y=-40; 
  
  numero55.x=200; 
  numero55.y=-40; 
  
  numero66.x=200; 
  numero66.y=-40; 
  
  numero77.x=200; 
  numero77.y=-40; 
  
  numero00.x=200; 
  numero00.y=-40;
  
  numero88.x=200; 
  numero88.y=-40;
  
  numero99.x=200; 
  numero99.y=-40;
  
  
  numero111.x=200; 
  numero111.y=-40; 
  
  numero222.x=200; 
  numero222.y=-40;
  
  numero333.x=200; 
  numero333.y=-40;
  
  numero444.x=200; 
  numero444.y=-40; 
  
  numero555.x=200; 
  numero555.y=-40; 
  
  numero666.x=200; 
  numero666.y=-40; 
  
  numero777.x=200; 
  numero777.y=-40; 
  
  numero000.x=200; 
  numero000.y=-40;
  
  numero888.x=200; 
  numero888.y=-40;
  
  numero999.x=200; 
  numero999.y=-40;
  
  jogador.velocityY=0;
  jogador.velocityX=0;
  
  
  vidajogador100.x=60;
  vidajogador100.y=-35;
  
  vidajogador90.x=60;
  vidajogador90.y=-35;
  
  vidajogador80.x=60;
  vidajogador80.y=-35;
  
  vidajogador70.x=60;
  vidajogador70.y=-35;
  
  vidajogador60.x=60;
  vidajogador60.y=-35;
  
  vidajogador50.x=60;
  vidajogador50.y=-35;
  
  vidajogador40.x=60;
  vidajogador40.y=-35;
  
  vidajogador30.x=60;
  vidajogador30.y=-35;
  
  vidajogador20.x=60;
  vidajogador20.y=-35;
  
  vidajogador10.x=60;
  vidajogador10.y=-35;
  
  vidajogador0.x=60;
  vidajogador0.y=-35;
  
  
  
  
 
 estadoataque="pacifico" 
 
 if(keyWentDown("m")){
   
 musicadefundo.play();  
   
 } 
   
  
 if(jogador.isTouching(potedepoder)){
   
  if(placarfolhas>10){
    
  if(keyDown("space")){
    
    placarfolhas=placarfolhas-10
  placarpoder=placarpoder+1
 
  }  
    
  }
   
 }
 
 if(placarpoder>0){  
   
 if(keyWentDown("a")){
   
if(jogador.isTouching(inimigo1)){
  
placarpoder=placarpoder-1  
vidainimigo1=vidainimigo1-80;  
  
} 
   
 }
   
  
 } 
  
  if(placarpoder>0){  
   
 if(keyWentDown("a")){
   
if(jogador.isTouching(inimigo2)&&estadoinimigo2==="acordado"){
  
placarpoder=placarpoder-1  
vidainimigo2=vidainimigo2-80;  
  
} 
   
 }
   
  
 } 
  

 
  if(keyWentDown("space")){
   
estadoataque="atacarinimigo"    
    
  }
  
  
 if(estadoataque==="atacarinimigo"){

 if(jogador.isTouching(inimigo1)){
   
 vidainimigo1=vidainimigo1-1;
   
 }  
   
   if(jogador.isTouching(inimigo2)&& estadoinimigo2==="acordado"){
   
 vidainimigo2=vidainimigo2-1;
   
 }  
   
 }
    
    
  if(vidajogador<0){
    
  estadojogo="mortedaformiga"  
  
    
  }
 
 if(estadojogo==="mortedaformiga"){
   
formiga1.addImage(morta)
formiga2.addImage(morta)   
formiga3.addImage(morta) 
   
        
 }
  
  
 if(vidainimigo1<0){

morteinimigo1="morto"   
inimigo1.destroy(); 
estadoinimigo2="acordado"   
   
} 
  
  
  
  if(vidainimigo2<0){

morteinimigo2="morto"   
inimigo2.destroy();    
   
} 
  
  
  
  if(vidajogador>99){
   
  if(vidajogador<101){

vidajogador100.x=60;    
vidajogador100.y=35;   
    
  }
   
 } 
  
  
 if(vidajogador>89){
   
  if(vidajogador<100){

vidajogador90.x=60;    
vidajogador90.y=35;   
    
  }
   
 }
  
if(vidajogador>79){
   
  if(vidajogador<90){

vidajogador80.x=60;    
vidajogador80.y=35;   
    
  }
   
 } 
  
 if(vidajogador>69){
   
  if(vidajogador<80){

vidajogador70.x=60;    
vidajogador70.y=35;   
    
  }
   
 } 
 
 if(vidajogador>59){
   
  if(vidajogador<70){

vidajogador60.x=60;    
vidajogador60.y=35;   
    
  }
   
 }  
  
if(vidajogador>49){
   
  if(vidajogador<60){

vidajogador50.x=60;    
vidajogador50.y=35;   
    
  }
   
 }   
  
if(vidajogador>39){
   
  if(vidajogador<50){

vidajogador40.x=60;    
vidajogador40.y=35;   
    
  }
   
 }   
  
if(vidajogador>29){
   
  if(vidajogador<40){

vidajogador30.x=60;    
vidajogador30.y=35;   
    
  }
   
 }   
  
if(vidajogador>19){
   
  if(vidajogador<30){

vidajogador20.x=60;    
vidajogador20.y=35;   
    
  }
   
 }   
  
if(vidajogador>1){
   
  if(vidajogador<20){

vidajogador10.x=60;    
vidajogador10.y=35;   
    
  }
   
 }   
  
if(vidajogador<1){

vidajogador0.x=60;    
vidajogador0.y=35;   
       
 }   
  
 
  

 if(jogador.isTouching(inimigo1)){
   
 vidajogador=vidajogador-1;  
   
   
 } 
  
  if(jogador.isTouching(inimigo2)){
   
 vidajogador=vidajogador-1;  
   
   
 } 
  
 if(placarfolhas<0){
  
 estadofolha="semfolhas"  
   
 }
  
  if(jogador.isTouching(formigarainha)){
 
if(vidajogador<100){
  
if(placarfolhas>0){
  
vidajogador=vidajogador+1;  
placarfolhas=placarfolhas-1;  
  
} 
  
  
}    
   
    
}
 
if(estadofolha==="semfolhas"){
  
if(jogador.isTouching(formigarainha)) {
  
jogador.x=240;
  jogador.y=450; 
 placarfolhas=0; 
  
  
} 
    
  
}
  
  
  
 
  
 
if(vidajogador>100){
  
vidajogador=vidajogador-1;  
    
}  

if(vidajogador>99){
  
if(jogador.isTouching(formigarainha)){
  
jogador.x=240;
  jogador.y=450;
  
  
}
  
  
}  
  
  
  
  if (placarfolhasextraidas>0){
    
if (placarfolhasextraidas<2){
    
  numero1.x=340; 
  numero1.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas>1){
    
if (placarfolhasextraidas<3){
    
  numero2.x=340; 
  numero2.y=43;
    
  }
    
    
  }
   
 if (placarfolhasextraidas>2){
    
if (placarfolhasextraidas<4){
    
  numero3.x=340; 
  numero3.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas>3){
    
if (placarfolhasextraidas<5){
    
  numero4.x=340; 
  numero4.y=43;
    
  }
    
    
  }
  
 if (placarfolhasextraidas>4){
    
if (placarfolhasextraidas<6){
    
  numero5.x=340; 
  numero5.y=43;
    
  }
    
    
  } 
   
 if (placarfolhasextraidas>5){
    
if (placarfolhasextraidas<7){
    
  numero6.x=340; 
  numero6.y=43;
    
  }
    
    
  }   
   
 if (placarfolhasextraidas>6){
    
if (placarfolhasextraidas<8){
    
  numero7.x=340; 
  numero7.y=43;
    
  }
    
    
  }   
  
  
  if (placarfolhasextraidas>-1){
    
if (placarfolhasextraidas<1){
    
  numero0.x=340; 
  numero0.y=43;
    
  }  
    
  } 
  
  if (placarfolhasextraidas>7){
    
if (placarfolhasextraidas<9){
    
  numero8.x=340; 
  numero8.y=43;
    
  }  
    
  }
  
  if (placarfolhasextraidas>8){
    
if (placarfolhasextraidas<10){
    
  numero9.x=340; 
  numero9.y=43;
    
  }  
    
  }
  
if (placarfolhasextraidas1>0){
    
if (placarfolhasextraidas1<2){
    
  numero11.x=330; 
  numero11.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas1>1){
    
if (placarfolhasextraidas1<3){
    
  numero22.x=330; 
  numero22.y=43;
    
  }
    
    
  }
   
 if (placarfolhasextraidas1>2){
    
if (placarfolhasextraidas1<4){
    
  numero33.x=330; 
  numero33.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas1>3){
    
if (placarfolhasextraidas1<5){
    
  numero44.x=330; 
  numero44.y=43;
    
  }
    
    
  }
  
 if (placarfolhasextraidas1>4){
    
if (placarfolhasextraidas1<6){
    
  numero55.x=330; 
  numero55.y=43;
    
  }
    
    
  } 
   
 if (placarfolhasextraidas1>5){
    
if (placarfolhasextraidas1<7){
    
  numero66.x=330; 
  numero66.y=43;
    
  }
    
    
  }   
   
 if (placarfolhasextraidas1>6){
    
if (placarfolhasextraidas1<8){
    
  numero77.x=330; 
  numero77.y=43;
    
  }
    
    
  }   
  
  
  if (placarfolhasextraidas1>-1){
    
if (placarfolhasextraidas1<1){
    
  numero00.x=330; 
  numero00.y=43;
    
  }  
    
  } 
  
  if (placarfolhasextraidas1>7){
    
if (placarfolhasextraidas1<9){
    
  numero88.x=330; 
  numero88.y=43;
    
  }  
    
  }
  
  if (placarfolhasextraidas1>8){
    
if (placarfolhasextraidas1<10){
    
  numero99.x=330; 
  numero99.y=43;
    
  }  
    
  }
  
  if (placarfolhasextraidas2>0){
    
if (placarfolhasextraidas2<2){
    
  numero111.x=320; 
  numero111.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas2>1){
    
if (placarfolhasextraidas2<3){
    
  numero222.x=320; 
  numero222.y=43;
    
  }
    
    
  }
   
 if (placarfolhasextraidas2>2){
    
if (placarfolhasextraidas2<4){
    
  numero333.x=320; 
  numero333.y=43;
    
  }
    
    
  }
  
  if (placarfolhasextraidas2>3){
    
if (placarfolhasextraidas2<5){
    
  numero444.x=320; 
  numero444.y=43;
    
  }
    
    
  }
  
 if (placarfolhasextraidas2>4){
    
if (placarfolhasextraidas2<6){
    
  numero555.x=320; 
  numero555.y=43;
    
  }
    
    
  } 
   
 if (placarfolhasextraidas2>5){
    
if (placarfolhasextraidas2<7){
    
  numero666.x=320; 
  numero666.y=43;
    
  }
    
    
  }   
   
 if (placarfolhasextraidas2>6){
    
if (placarfolhasextraidas2<8){
    
  numero777.x=320; 
  numero777.y=43;
    
  }
    
    
  }   
  
  
  if (placarfolhasextraidas2>-1){
    
if (placarfolhasextraidas2<1){
    
  numero000.x=320; 
  numero000.y=43;
    
  }  
    
  } 
  
  if (placarfolhasextraidas2>7){
    
if (placarfolhasextraidas2<9){
    
  numero888.x=320; 
  numero888.y=43;
    
  }  
    
  }
  
  if (placarfolhasextraidas2>8){
    
if (placarfolhasextraidas2<10){
    
  numero999.x=320; 
  numero999.y=43;
    
  }  
    
  }
  
  
  if(formiga1.isTouching(formigueiro)){
    
  if(placarfolhasextraidas>0){
    
  placarfolhasextraidas=placarfolhasextraidas-1;
  
  placarfolhas=placarfolhas+1;
  
  }   
  
  if(placarfolhasextraidas1>0){
    
  placarfolhasextraidas1=placarfolhasextraidas1-1;
  
  placarfolhas=placarfolhas+10;
  
  }   
    
  if(placarfolhasextraidas2>0){
    
  placarfolhasextraidas2=placarfolhasextraidas2-1;
  
  placarfolhas=placarfolhas+100;
  
  } 
    
  }
  
  if(formiga2.isTouching(formigueiro)){
    
  if(placarfolhasextraidas>0){
    
  placarfolhasextraidas=placarfolhasextraidas-1;
  
  placarfolhas=placarfolhas+1;
  
  }   
  
  if(placarfolhasextraidas1>0){
    
  placarfolhasextraidas1=placarfolhasextraidas1-1;
  
  placarfolhas=placarfolhas+10;
  
  }   
    
  if(placarfolhasextraidas2>0){
    
  placarfolhasextraidas2=placarfolhasextraidas2-1;
  
  placarfolhas=placarfolhas+100;
  
  } 
    
  }
  
  if(formiga3.isTouching(formigueiro)){
    
  if(placarfolhasextraidas>0){
    
  placarfolhasextraidas=placarfolhasextraidas-1;
  
  placarfolhas=placarfolhas+1;
  
  }   
  
  if(placarfolhasextraidas1>0){
    
  placarfolhasextraidas1=placarfolhasextraidas1-1;
  
  placarfolhas=placarfolhas+10;
  
  }   
    
  if(placarfolhasextraidas2>0){
    
  placarfolhasextraidas2=placarfolhasextraidas2-1;
  
  placarfolhas=placarfolhas+100;
  
  } 
    
  }
  
  
 
  
  
  if(placarfolhasextraidas>9){
    
  placarfolhasextraidas=0;
   
    placarfolhasextraidas1=placarfolhasextraidas1+1;
      
  }
  
  if(placarfolhasextraidas1>9){
    
  placarfolhasextraidas1=0;
   
    placarfolhasextraidas2=placarfolhasextraidas2+1;
      
  }
  
  
  
  
  
  if(formiga1.isTouching(folha1)){
    
  placartempo1=placartempo1+1 
      
  }
  
  if(formiga2.isTouching(folha1)){
    
  placartempo2=placartempo2+1 
      
  }
  
  if(formiga3.isTouching(folha1)){
    
  placartempo3=placartempo3+1 
      
  }
  
  
  if(placartempo1>100){
     
    placartempo1=0;
    
    placarfolhasextraidas=placarfolhasextraidas+1;
    
     }
  
  if(placartempo2>100){
     
    placartempo2=0;
    
    placarfolhasextraidas=placarfolhasextraidas+1;
    
     }
  
  if(placartempo3>100){
     
    placartempo3=0;
    
    placarfolhasextraidas=placarfolhasextraidas+1;
    
     }
  
  
 if(keyDown("1")){

  jogador=formiga1 
  tampajogador.x=300;
  tampajogador.y=370; 
   
  }
  
  if(keyDown("2")){

  jogador=formiga2
   tampajogador.x=300;
  tampajogador.y=370; 

  }
  
  if(keyDown("3")){

  jogador=formiga3
tampajogador.x=300;
  tampajogador.y=370;
  }
  
  
  
if(keyDown("up")&&estadojogo==="jogar"){

  jogador.velocityY=-3;   
  jogador.addImage(cima)
  
  }
  
 if(keyDown("down")&&estadojogo==="jogar"){

  jogador.velocityY=3;   
jogador.addImage(baixo)
  } 
  
  if(keyDown("right")&&estadojogo==="jogar"){

  jogador.velocityX=3;   
jogador.addImage(direita)
    
  } 
  
  if(keyDown("left")&&estadojogo==="jogar"){

  jogador.velocityX=-3;   
 jogador.addImage(esquerda)
  }
 
 
 inimigo1.bounceOff(parede1) 
 inimigo1.bounceOff(parede2)  
 inimigo1.bounceOff(parede3)  
inimigo1.bounceOff(parede4) 
inimigo1.bounceOff(formigueiro)
  
inimigo2.bounceOff(parede1) 
inimigo2.bounceOff(parede2)  
inimigo2.bounceOff(parede3)  
inimigo2.bounceOff(parede4) 
inimigo2.bounceOff(formigueiro)
  
formiga1.bounceOff(parede1)  
formiga1.bounceOff(parede2)   
formiga1.bounceOff(parede3)   
formiga1.bounceOff(parede4)   
  
formiga2.bounceOff(parede1)  
formiga2.bounceOff(parede2)   
formiga2.bounceOff(parede3)   
formiga2.bounceOff(parede4)   
  
formiga3.bounceOff(parede1)  
formiga3.bounceOff(parede2)   
formiga3.bounceOff(parede3)   
formiga3.bounceOff(parede4)   
  
jogador.bounceOff(pafo1)
jogador.bounceOff(pafo2)  
jogador.bounceOff(pafo3)  
jogador.bounceOff(pafo4)  
jogador.bounceOff(pafo5)  
jogador.bounceOff(pafo6)  
jogador.bounceOff(pafo7)  
  

  
 drawSprites(); 
 
  fill("black")
 text("tempo1: "+placartempo1, 390,40)
  text("tempo2: "+placartempo2, 390,55)
  text("tempo3: "+placartempo3, 390,70) 
 
  fill("black")
 text("Folhas Armazenadas: "+placarfolhas ,410,130)
 
  fill("black")
  text(""+placarfolhasextraidas1, 210,-130)
  text(""+placarfolhasextraidas2, 202,-130)   
  text("folhas extraid "+placarfolhasextraidas, 120,-130)
 
  fill("black")
  text("poder: "+placarpoder,500, 50)
  
  if(morteinimigo1==="vivo"){
  
  fill("white")
  text("vida: "+vidainimigo1,inimigo1.x-30,inimigo1.y-30)
  
}
  
  if(morteinimigo2==="vivo"){
  
  fill("white")
  text("vida: "+vidainimigo2,inimigo2.x-30,inimigo2.y-30)
  
}
  
  fill("black")
  textSize(14)
  text("Folhas Extraidas: ",190, 47)
  
  fill("red")
  textSize(14)
  text("vida: "+vidajogador, 106,47)
  
  
  
  
 
  
}



