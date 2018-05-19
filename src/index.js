import R, {forEach,map,add} from 'ramda';
import testingArray from "./people";
import "./style.scss";

var finalValue = map( add( 1 ), testingArray );
console.log( finalValue );

const root = document.createElement("div");
root.innerHTML = "<p>Hello Webpack whatever for now.</p>";
document.body.appendChild(root);
