import './styles.css'

const app = document.querySelector('#app');

app.innerHTML = `
  <canvas id="canvas"></canvas>
  <div class="buttons-container">
  <button id="rect-btn">Dibujar Rectangulo</button>
  <button id="line-btn">Dibujar Linea</button>
  <button id="line-triangle">Dibujar Triangulo</button>
  </div>
  

`;



const canvas = document.querySelector('#canvas');
const drawRectBtn = document.querySelector('#rect-btn');
const drawLineBtn = document.querySelector('#line-btn');
const drarTriangleBtn = document.querySelector('#line-triangle');
const ctx = canvas.getContext("2d");

drawRectBtn.addEventListener('click', () => {
  drawRect();
});
drawLineBtn.addEventListener('click', () => {
  drawLine();
});
drarTriangleBtn.addEventListener('click', () => {
  drawTriangle();
})





const drawRect = () => {
   //fillRect(x,y,width,heigth) 
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 40, 30, 70);  
  ctx.fillStyle = 'red';
  ctx.strokeRect(5, 5, 100, 50);
  ctx.clearRect(10,40,10,10);
};

const drawLine = () => {
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

const drawTriangle = () => {
  ctx.beginPath();
  ctx.moveTo(75,50);//comienzo del triangulo - se puede interpretar como el lugar donde comienza el lapis
  ctx.lineTo(100,75);
  ctx.lineTo(100,25);
  ctx.fill();
}


