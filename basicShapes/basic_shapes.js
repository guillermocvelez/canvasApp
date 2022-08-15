
class BasicShapes{
  
}


export const drawRect = (ctx) => {
  //fillRect(x,y,width,heigth) 
 ctx.fillStyle = 'blue';
 ctx.fillRect(10, 40, 30, 70);  
 ctx.fillStyle = 'red';
 ctx.strokeRect(5, 5, 100, 50);
 ctx.clearRect(10,40,10,10);
};

export const drawLine = (ctx) => {
 //Lineas - Este comando no hace nada por si mismo y resetea el estado del contexto
 ctx.beginPath();
 ctx.strokeStyle = "blue"; //COlor de la linea
 ctx.lineWidth = 1; //ancho de la linea
 //Puntos iniciales de la linea(x,y)
 ctx.moveTo(60,70);
 //Final de la linea(x,y)
 ctx.lineTo(60,120);  
 ctx.stroke();
};

export const drawTriangle = (ctx) => {
 ctx.beginPath();
 ctx.moveTo(75,50);//comienzo del triangulo - se puede interpretar como el lugar donde comienza el lapis
 ctx.lineTo(100,75);
 ctx.lineTo(100,25);
 ctx.fill();
}

export const drawFace = (ctx) => {
 //arcos (x,y,radio, angulo inicial, angulo final, orientacion(true,false))
 
 ctx.beginPath();
 ctx.arc(75,75,50,0,Math.PI*2,true); //circulo exterior

 //Boca
 ctx.moveTo(110, 75);
 ctx.arc(75,75,35,0, Math.PI, false);

 //ojo izquierdo
 ctx.moveTo(65, 65);
 ctx.arc(60, 65, 5, 0, Math.PI*2, true);

 //ojo derecho
 ctx.moveTo(95, 65);
 ctx.arc(90, 65, 5, 0, Math.PI*2, true)

 ctx.stroke();
}

