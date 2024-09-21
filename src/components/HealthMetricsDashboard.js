import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import NewEntryForm from './NewEntryForm';
import HealthRecordDetailModal from './HealthRecordDetailModal';
import   './HealthMetricsDashboard.css';


const HealthMetricsDashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchDate, setSearchDate] = useState('');
  const [heartRateThreshold, setHeartRateThreshold] = useState('');

  const addMetric = (newMetric) => {
    setMetrics([...metrics, newMetric]);
  };

  const deleteMetric = (id) => {
    setMetrics(metrics.filter((metric) => metric.id !== id));
  };

  const updateMetric = (updatedMetric) => {
    setMetrics(metrics.map((metric) => (metric.id === updatedMetric.id ? updatedMetric : metric)));
  };

  const openRecordDetail = (metric) => {
    setSelectedRecord(metric);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };

  const handleSearch = (e) => {
    setSearchDate(e.target.value);
  };

  const handleHeartRateFilter = (e) => {
    setHeartRateThreshold(e.target.value);
  };

  const filterMetrics = () => {
    return metrics.filter((metric) => {
      const matchesDate = searchDate === '' || metric.date.includes(searchDate);
      const matchesHeartRate = heartRateThreshold === '' || metric.heartRate >= heartRateThreshold;
      return matchesDate && matchesHeartRate;
    });
  };

  const renderMetrics = () =>
    filterMetrics().map((metric) => (
      <tr key={metric.id} onClick={() => openRecordDetail(metric)}>
        <td>{metric.date}</td>
        <td>{metric.temperature} °F</td>
        <td>{metric.bloodPressure.systolic}/{metric.bloodPressure.diastolic} mmHg</td>
        <td>{metric.heartRate} bpm</td>
        <td>
          <button onClick={() => alert('Edit functionality here')}>
            <FaEdit />
          </button>
          <button onClick={() => deleteMetric(metric.id)}>
            <FaTrash />
          </button>
        </td>
      </tr>
    ));

  return (
    
  
    <div>

      <h2>Health Metrics Dashboard</h2>

      {/* Search and Filter Fields */}
      <div className="search-filters">
        <input
          type="date"
          value={searchDate}
          onChange={handleSearch}
          placeholder="Search by Date"
        />

        <input
          type="number"
          value={heartRateThreshold}
          onChange={handleHeartRateFilter}
          placeholder="Heart Rate Threshold"
        />
      </div>

      {/* Render Metrics */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°F)</th>
            <th>Blood Pressure (mmHg)</th>
            <th>Heart Rate (bpm)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderMetrics()}</tbody>
      </table>

      <NewEntryForm addMetric={addMetric} />

      {/* Record Detail Modal */}
      {selectedRecord && (
        <HealthRecordDetailModal
          selectedRecord={selectedRecord}
          closeModal={closeModal}
          deleteMetric={deleteMetric}
          updateMetric={updateMetric}
        />
      )}
    </div>
  );
};

export default HealthMetricsDashboard;
