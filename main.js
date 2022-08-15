import './styles.css';
import { drawRect,drawLine,drawTriangle,drawFace} from './basicShapes/basic_shapes/'

const app = document.querySelector('#app');

app.innerHTML = `
  <canvas id="canvas"></canvas>
  <div class="buttons-container">
  <button id="rect-btn">Dibujar Rectangulo</button>
  <button id="line-btn">Dibujar Linea</button>
  <button id="line-triangle">Dibujar Triangulo</button>
  <button id="face-btn">Dibujar Cara</button>
  <button id="for-btn">Dibujar Cosa con for</button>
  </div>
`;



const canvas = document.querySelector('#canvas');
const drawRectBtn = document.querySelector('#rect-btn');
const drawLineBtn = document.querySelector('#line-btn');
const drawTriangleBtn = document.querySelector('#line-triangle');
const drawFaceBtn = document.querySelector('#face-btn');
const drawForBtn = document.querySelector('#for-btn')


const ctx = canvas.getContext("2d");

drawRectBtn.addEventListener('click', () => drawRect(ctx));
drawLineBtn.addEventListener('click', () => drawLine(ctx));
drawTriangleBtn.addEventListener('click', () => drawTriangle(ctx));
drawFaceBtn.addEventListener('click', () => drawFace(ctx));
drawForBtn .addEventListener('click',() => drawFor());



// const drawFor = () => {
//   for(let i= 0; i < 4; i++){
//     for(let j = 0; j < 3; j++){
//       ctx.beginPath();
//       const x = 25 +j*50; //coordenada X
//       const y = 25 + i*50;//coordenada y
//       const radius = 20;
//       const startAngle = 0;
//       const endAngle = Math.PI + (Math.PI*j)/2;
//       const counterclockwise = i%2 !== 0;

//       ctx.arc(x,y,radius, startAngle,endAngle,counterclockwise);

//       if( i > 1) {
//         ctx.fill();
//       } else {
//         ctx.stroke();
//       }
//     }
//   }
// }


