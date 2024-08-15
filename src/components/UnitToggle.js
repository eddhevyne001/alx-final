// src/components/UnitToggle.js
import React from 'react';

function UnitToggle({ unit, onUnitChange }) {
  return (
    <button onClick={onUnitChange}>
      {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
    </button>
  );
}

export default UnitToggle;
