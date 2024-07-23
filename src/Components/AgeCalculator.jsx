// components/AgeCalculator.js
import { useState } from "react";
import "./style.css"
const AgeCalculator = () => {
  const [age, setAge] = useState(0);
  const [planet, setPlanet] = useState('Earth');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };

  let planetYears = 0;

  const calculateAge = () => {
    switch (planet) {
      case 'Earth':
        planetYears = (age * 365) / 365;
        break;
      case 'Mercury':
        planetYears = (365 * age) / 88;
        break;
      case 'Venus':
        planetYears = (age * 365) / 225;
        break;
      case 'Mars':
        planetYears = (age * 365) / 687;
        break;
      case 'Jupiter':
        planetYears = age / 11.862615;
        break;
      case 'Saturn':
        planetYears = age / 29.447498;
        break;
      case 'Uranus':
        planetYears = age / 84.016846;
        break;
      case 'Neptune':
        planetYears = age / 164.79132;
        break;
      default:
        planetYears = age;
    }

    return `You would be ${planetYears.toFixed(2)} years old on ${planet}.`;
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <form>
        <label>
          Enter your age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Select a planet:
          <select value={planet} onChange={handlePlanetChange}>
            <option value="Earth">Earth</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
          </select>
        </label>
        <br />
        <button onClick={calculateAge}>Calculate Age</button>
        <p>{calculateAge()}</p>
      </form>
    </div>
  );
};

export default AgeCalculator;
