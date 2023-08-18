import Display from './display';

const Calculator = () => (
  <div className="calculatorContainer">
    <Display />
    <div className="box"><button type="button">AC</button></div>
    <div className="box"><button type="button">+/-</button></div>
    <div className="box"><button type="button">%</button></div>
    <div className="box"><button className="orange" type="button">÷</button></div>
    <div className="box"><button type="button">7</button></div>
    <div className="box "><button type="button">8</button></div>
    <div className="box"><button type="button">9</button></div>
    <div className="box"><button className="orange" type="button">x</button></div>
    <div className="box"><button type="button">4</button></div>
    <div className="box"><button type="button">5</button></div>
    <div className="box"><button type="button">6</button></div>
    <div className="box"><button className="orange" type="button">-</button></div>
    <div className="box"><button type="button">1</button></div>
    <div className="box"><button type="button">2</button></div>
    <div className="box"><button type="button">3</button></div>
    <div className="box "><button type="button" className="orange">+</button></div>
    <div className="box zero"><button type="button" className="thin">0</button></div>
    <div className="box"><button type="button" className="thin">.</button></div>
    <div className="box"><button type="button" className="orange thin">=</button></div>
  </div>
);

export default Calculator;
