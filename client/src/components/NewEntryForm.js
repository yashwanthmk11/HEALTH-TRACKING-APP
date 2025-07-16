import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewEntryForm = ({ addMetric }) => {
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [isCelsius, setIsCelsius] = useState(false);
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempInFahrenheit = isCelsius ? (temperature * 9 / 5) + 32 : temperature;

    const newMetric = {
      id: uuidv4(),
      date,
      temperature: tempInFahrenheit,
      bloodPressure: {
        systolic,
        diastolic,
      },
      heartRate,
    };

    addMetric(newMetric);
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
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Add Health Entry</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Body Temperature</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder={isCelsius ? "Temperature (°C)" : "Temperature (°F)"}
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={toggleTemperatureUnit}
            className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
          >
            {isCelsius ? "°C → °F" : "°F → °C"}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure</label>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Systolic"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            required
            className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Diastolic"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            required
            className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Heart Rate (bpm)</label>
        <input
          type="number"
          placeholder="Heart Rate"
          value={heartRate}
          onChange={(e) => setHeartRate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Entry
        </button>
      </div>
    </form>
  );
};

export default NewEntryForm;
