import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../components/NewEntryForm.css';

const NewEntryForm = ({ addMetric }) => {
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [isCelsius, setIsCelsius] = useState(false); // Celsius/Fahrenheit toggle
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempInFahrenheit = isCelsius ? (temperature * 9/5) + 32 : temperature;

    const newMetric = {
      id: uuidv4(),
      date,
      temperature: tempInFahrenheit, // Store temperature in Fahrenheit
      bloodPressure: {
        systolic,
        diastolic,
      },
      heartRate,
    };

    addMetric(newMetric);
    // Reset form
    setDate('');
    setTemperature('');
    setSystolic('');
    setDiastolic('');
    setHeartRate('');
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <form onSubmit={handleSubmit} className="new-entry-form">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder={isCelsius ? "Body Temperature (°C)" : "Body Temperature (°F)"}
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        required
      />
      <button type="button" onClick={toggleTemperatureUnit}>
        {isCelsius ? "Switch to °F" : "Switch to °C"}
      </button>

      <input
        type="number"
        placeholder="Systolic (mmHg)"
        value={systolic}
        onChange={(e) => setSystolic(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Diastolic (mmHg)"
        value={diastolic}
        onChange={(e) => setDiastolic(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Heart Rate (bpm)"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
        required
      />

      <button type="submit">Add Entry</button>
    </form>
  );
};

export default NewEntryForm;
