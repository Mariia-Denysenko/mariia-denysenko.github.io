import CantarellFont from './assets/Cantarell-Regular.ttf';
import LexendFont from './assets/LexendDeca.ttf';

const Cantarell = {
  fontFamily: "Cantarell",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url(${ CantarellFont }) format('truetype')`
};
const Lexend = {
  fontFamily: "LexendDeca",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `url(${ LexendFont }) format('truetype')`
};
  
export {Cantarell, Lexend} 