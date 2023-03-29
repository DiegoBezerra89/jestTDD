import React, { useState } from "react";
import "./index.css";

/* O contador deve iniciar com o valor 0
function Counter() {
  return <div className="counter">
    <h1>0</h1>
  </div>
}*/

/* O título deve conter a classe counter__title
function Counter() {
  return <div className="counter">
    <h1 className="counter__title">0</h1>
  </div>
}*/

/* não deve iniciar o título com a classe counter__title--increment
function Counter() {
  return <div className="counter">
    <h1 className="counter__title counter__title--increment">0</h1>
  </div>
}*/


/* não deve iniciar o título com a classe counter__title--increment
function Counter() {
  return <div className="counter">
    <h1 className="counter__title counter__title--increment counter__title--decrement">0</h1>
  </div>
}*/

/*deve conter um botão incrementar 
function Counter() {
  return <div className="counter">
    <h1 className="counter__title">0</h1>
    <section className="buttons">
        <button className="button button--increment">
          incrementar
        </button>
        <button className="button button--decrement">
          decrementar
        </button>
      </section>
  </div>
}
*/

/*deve decrementar - 1 ao clicar no botão decrementar*/
function Counter() {
  const [ counter , setCounter] = useState(0);

  return <div className="counter">
    <h1 className="counter__title">{counter}</h1>
    <section className="buttons">
        <button className="button button--decrement" onClick={() => setCounter(counter - 1)}>
          decrementar
        </button>
        <button className="button button--increment" onClick={() =>  setCounter(counter + 1)}>
          incrementar
        </button>
      </section>
  </div>
}

export default Counter;
