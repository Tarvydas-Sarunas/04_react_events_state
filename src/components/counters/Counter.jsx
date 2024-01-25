import { useState } from "react";

export default function Counter(props) {
// let value = 1
useState
const [counterValue, setCounterValue] = useState(props.init)
const [title, setTitle] = useState(props.title)

function up() {
  // console.log('up fired');
// value++;

// vietoi value++ mes naudojamia sia funkcija state setinimo funkcija visada perkrauna komponente
setCounterValue(counterValue + 1)
}

function down() {

  // pasitikrinti ar yra = 0 ir kad neleistu mazeti daugiau
  if (counterValue -1 < 0) return
  setCounterValue(counterValue - props.down)
  console.log('props.down ===', props.down);
}

const greenStyle = {color: 'green',
fontWeight: 'bold'}


function upBy(howMuch) {
  setCounterValue(counterValue + howMuch)
}

const style = counterValue > 5 ? greenStyle : {}
  return <div className="counter column">
{/* <p className="value">{value}</p> */}
<h2>{title}</h2>
<p style={style} className="value">{counterValue}</p>
<div className="control">
  <button onClick={() => upBy(props.up)}>Up</button>
  {counterValue > 0 && (<button disabled={counterValue === 0} onClick={down}>Down</button>)}
  <button onClick={() => upBy(props.upBy)}>Up by {props.upBy}</button>
</div>

  </div>
}
