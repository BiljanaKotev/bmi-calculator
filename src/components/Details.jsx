import './Details.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Details() {
  const [units, setUnits] = useState({ height: '', weight: '', heightUnit: 'cm', weightUnit: 'kg' });
  const [bmi, setBMI] = useState(null);

  function setUnitAndCalculate(unit, heightUnit, weightUnit) {
    setUnits({ height: '', weight: '', heightUnit, weightUnit });
    calculateBMI();
  }

  function handleHeightChange(e) {
    setUnits({ ...units, height: e.target.value });
  }

  function handleWeightChange(e) {
    setUnits({ ...units, weight: e.target.value });
  }

  function calculateBMI() {
    const height = parseFloat(units.height);
    const weight = parseFloat(units.weight);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
      const calculatedBMIMetric = (weight / height / height) * 10000;
      setBMI(calculatedBMIMetric.toFixed(1));
    }
  }

  return (
    <div className='details-bg'>
      <form
        action=''
        onSubmit={(e) => {
          e.preventDefault();
          calculateBMI();
        }}
      >
        <h2> Enter your details below</h2>
        <input
          type='radio'
          id='metric'
          name='unit'
          value='metric'
          checked={units.heightUnit === 'cm' && units.weightUnit === 'kg'}
          onChange={() => setUnitAndCalculate('metric', 'cm', 'kg')}
        />
        <label htmlFor='metric'>Metric</label>

        <input
          type='radio'
          id='imperial'
          name='unit'
          value='imperial'
          checked={units.heightUnit === 'in' && units.weightUnit === 'lb'}
          onChange={() => setUnitAndCalculate('imperial', 'in', 'lb')}
        />
        <label htmlFor='imperial'>Imperial</label>
        <br />
        <div>
          <label htmlFor='height'>Height</label>
          <InputGroup>
            <Form.Control type='number' step='any' placeholder='Enter height' aria-label='height' onChange={handleHeightChange} />
            <InputGroup.Text>{units.heightUnit}</InputGroup.Text>
          </InputGroup>
        </div>
        <div>
          <label htmlFor='weight'>Weight</label>
          <InputGroup>
            <Form.Control type='number' steps='any' placeholder='Enter weight' aria-label='weight' onChange={handleWeightChange} />
            <InputGroup.Text>{units.weightUnit}</InputGroup.Text>
          </InputGroup>
        </div>
        <div className='details-bmi-bg'>
          <h3>Your BMI is...</h3>
          <span>{bmi}</span>
          <p> Your BMI suggests you're </p>
        </div>
        <button type='submit'>Calculate BMI</button>
      </form>
    </div>
  );
}

export default Details;
