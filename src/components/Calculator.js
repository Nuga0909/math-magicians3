import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickEvent = (e) => {
    const buttonName = e.target.name; // <- changed from e.currentTarget.textContent
    const newState = calculate(calculation, buttonName);
    setCalculation(newState);
  };

  // const { next, operation, total } = calculation;

  return (
    <div className="container flex">
      <div className="Output-bar flex button-container">
        {calculation.next || calculation.operation || calculation.total || '0'}
      </div>
      <Buttons clickEvent={clickEvent} />
    </div>
  );
};

export default Calculator;
