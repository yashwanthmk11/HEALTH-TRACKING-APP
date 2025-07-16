import React from 'react';

const HealthMetricsDashboard = ({ metrics, onEdit, onDelete, onView }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Health Metrics Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">No health entries yet.</p>
        ) : (
          metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-600">Date: <span className="font-medium">{metric.date}</span></p>
              <p className="text-sm text-gray-600">Temperature: <span className="font-medium">{metric.temperature} °F</span></p>
              <p className="text-sm text-gray-600">Blood Pressure: <span className="font-medium">{metric.bloodPressure.systolic}/{metric.bloodPressure.diastolic} mmHg</span></p>
              <p className="text-sm text-gray-600">Heart Rate: <span className="font-medium">{metric.heartRate} bpm</span></p>

              <div className="flex justify-between mt-4 text-sm">
                <button onClick={() => onView(metric)} className="text-blue-600 hover:underline">View</button>
                <button onClick={() => onEdit(metric)} className="text-green-600 hover:underline">Edit</button>
                <button onClick={() => onDelete(metric.id)} className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HealthMetricsDashboard;
