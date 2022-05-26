function isTouching(objeto1, objeto2){
    if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
      && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
      return true;
    }
  else {
    return false;
    }
  }
function bounceOFF(objeto1,objeto2){
  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2) {
      objeto1.velocityX = objeto1.velocityX * (-1);
      objeto2.velocityX = objeto2.velocityX * (-1);
}
if (objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
  && objeto2.y -objeto1.y < objeto2.height/2 + objeto1.height/2){
    objeto1.velocityY = objeto1.velocityY * (-1);
    objeto2.velocityY = objeto2.velocityY * (-1);
}
}