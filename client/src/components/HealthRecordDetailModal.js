import React from 'react';

const HealthRecordDetailModal = ({ record, onClose }) => {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Health Record Detail</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><strong>Date:</strong> {record.date}</li>
          <li><strong>Temperature:</strong> {record.temperature} °F</li>
          <li><strong>Blood Pressure:</strong> {record.bloodPressure.systolic}/{record.bloodPressure.diastolic} mmHg</li>
          <li><strong>Heart Rate:</strong> {record.heartRate} bpm</li>
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default HealthRecordDetailModal;
