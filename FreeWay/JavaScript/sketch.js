function setup() {
  createCanvas(400, 640);
  trilha.loop();
}

function draw() {
  background(estrada);
  //Ator
  showAtor();
  verifyColision();
  moveAtor();
  //Carro
  showCarro();
  moveCarro();
  loopCar();
  //Placar
  placar();
  matchPoint();
}

