import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from './logic/calculate';
import CalculatorDescription from './CalculatorDescriptio';
import style from '../styles/Calculator.module.css';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [result, setResult] = useState('0');

  const handleClick = (e) => {
    const newObject = {
      total: null,
      next: e.target.textContent,
      operation: null,
    };
    setCalc(newObject);
    const newCalc = calculate(calc, e.target.textContent);
    setCalc(newCalc);
    if (newCalc.next && newCalc.total === null) {
      setResult(newCalc.next);
    } else if (newCalc.total && newCalc.next === null) {
      setResult(newCalc.total);
    } else if (newCalc.total && newCalc.next === null && newCalc.operation === null) {
      setResult(newCalc.total);
    } else if (newCalc.total === null && newCalc.next === null && newCalc.operation === null) {
      setResult('0');
    } else if (newCalc.total && newCalc.next && newCalc.operation) {
      setResult(newCalc.next);
    }
  };

  const Display = ({ result }) => (
    <div className="box display">
      <span className="displayNumber">{result}</span>
    </div>
  );

  Display.propTypes = {
    result: PropTypes.string.isRequired,
  };

  const Button = (buttonType = 'default', buttonName, boxContainer = 'box') => (
    <div className={boxContainer}><button type="button" className={buttonType} onClick={handleClick}>{buttonName}</button></div>
  );

  return (
    <section className={style.calculatorContainerArea}>
      <CalculatorDescription />
      <div className="calculatorContainer">
        <Display result={(result)} />
        {Button('default', 'AC')}
        {Button('default', '+/-')}
        {Button('default', '%')}
        {Button('orange', '÷')}
        {Button('default', '7')}
        {Button('default', '8')}
        {Button('default', '9')}
        {Button('orange', 'x')}
        {Button('default', '4')}
        {Button('default', '5')}
        {Button('default', '6')}
        {Button('orange', '-')}
        {Button('default', '1')}
        {Button('default', '2')}
        {Button('default', '3')}
        {Button('orange', '+')}
        {Button('thin', '0', 'zero')}
        {Button('thin', '.')}
        {Button('orange thin', '=')}
      </div>
    </section>
  );
};
export default Calculator;
