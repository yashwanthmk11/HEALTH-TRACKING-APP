import React, { useState } from 'react';
import '../components/HealthRecordDetailModal.css';

const HealthRecordDetailModal = ({ selectedRecord, closeModal, deleteMetric, updateMetric }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecord, setEditedRecord] = useState({ ...selectedRecord });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecord({ ...editedRecord, [name]: value });
  };

  const handleSave = () => {
    updateMetric(editedRecord);
    setIsEditing(false);
    closeModal();
  };

  if (!selectedRecord) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {!isEditing ? (
          <div>
            <h2>Health Record Details</h2>
            <p><strong>Date:</strong> {selectedRecord.date}</p>
            <p><strong>Temperature:</strong> {selectedRecord.temperature} °F</p>
            <p><strong>Blood Pressure:</strong> {selectedRecord.bloodPressure.systolic}/{selectedRecord.bloodPressure.diastolic} mmHg</p>
            <p><strong>Heart Rate:</strong> {selectedRecord.heartRate} bpm</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteMetric(selectedRecord.id)}>Delete</button>
          </div>
        ) : (
          <div>
            <h2>Edit Record</h2>
            <input type="date" name="date" value={editedRecord.date} onChange={handleChange} />
            <input type="number" name="temperature" value={editedRecord.temperature} onChange={handleChange} placeholder="Body Temperature (°F)" />
            <input type="number" name="systolic" value={editedRecord.bloodPressure.systolic} onChange={handleChange} placeholder="Systolic (mmHg)" />
            <input type="number" name="diastolic" value={editedRecord.bloodPressure.diastolic} onChange={handleChange} placeholder="Diastolic (mmHg)" />
            <input type="number" name="heartRate" value={editedRecord.heartRate} onChange={handleChange} placeholder="Heart Rate (bpm)" />
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRecordDetailModal;
