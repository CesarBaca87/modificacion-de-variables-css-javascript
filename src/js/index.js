// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// const rootStyle = document.documentElement.style;
// rootStyle.setProperty('--primary-color', 'red');

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

<<<<<<< HEAD
const rootStyle = document.documentElement.style;
const scrollCountElement = document.getElementById('scroll-count');

const setBoxScroll = () => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const userScroll = window.scrollY;

  scrollCountElement.textContent = Math.round(userScroll);
  const boxWidh = (userScroll * 100) / totalHeight;

  rootStyle.setProperty('--box-widh', boxWidh + '%');
};

window.addEventListener('scroll', setBoxScroll);

//- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.
=======
const titleElement = document.getElementById('title');
const buttonRGBElement = document.getElementById('button-rgb');
const buttonHexaElement = document.getElementById('button-hexa');
const mouseBoxElement = document.getElementById('mouse-box');

const rootStyles = document.documentElement.style;

const changeScrollText = scroll => {
  titleElement.textContent = `Te has desplazado ${scroll} px`;
};

const changeSizeScrollBox = () => {
  const scrollY = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const widthPercentage = (scrollY / pageHeight) * 100;
  rootStyles.setProperty('--box-size', widthPercentage + '%');
  const roundedScrollY = Math.round(scrollY);
  changeScrollText(roundedScrollY);
};

window.addEventListener('scroll', changeSizeScrollBox);

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

const generateRandomColorRGB = () => {
  const redColor = Math.floor(Math.random() * 255);
  const greenColor = Math.floor(Math.random() * 255);
  const blueColor = Math.floor(Math.random() * 255);

  const newRandomColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  rootStyles.setProperty('--bg-color', newRandomColor);
};

const generateRandomColorHexa = () => {
  const letters = '0123456789ABCDEF';
  let newRandomColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomColorNumber = Math.floor(Math.random() * letters.length);
    newRandomColor += letters[randomColorNumber];
  }

  rootStyles.setProperty('--bg-color', newRandomColor);
};

const setBoxMousePosition = event => {
  console.log(event.x);
  console.log(event.y);
  const positionX = event.x;
  const positionY = event.y;
  rootStyles.setProperty('--box-position-x', positionX + 'px');
  rootStyles.setProperty('--box-position-y', positionY + 'px');
};

buttonRGBElement.addEventListener('click', generateRandomColorRGB);
buttonHexaElement.addEventListener('click', generateRandomColorHexa);
window.addEventListener('mousemove', setBoxMousePosition);
>>>>>>> 250d2cf9a1120364232fd6e8ec944624595211e0

// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

const buttonRgbElement = document.getElementById('button-rgb');
const buttonHexaElement = document.getElementById('button-hexa');

const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  rootStyle.setProperty('--bg-color', color);
};

const generateHexaColor = () => {
  const hexaValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * hexaValues.length - 1);
    const randomCharacter = hexaValues.charAt(randomPosition);
    color += randomCharacter;
  }
  rootStyle.setProperty('--bg-color', color);
};

buttonRgbElement.addEventListener('click', generateRGBColor);
buttonHexaElement.addEventListener('click', generateHexaColor);

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.

const setBoxPosition = event => {
  rootStyle.setProperty('--top', event.y + 'px');
  rootStyle.setProperty('--left', event.x + 'px');
};

window.addEventListener('mousemove', setBoxPosition);
