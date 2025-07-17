import React, { useState } from 'react';
import NewEntryForm from './components/NewEntryForm';
import HealthMetricsDashboard from './components/HealthMetricsDashboard';
import HealthRecordDetailModal from './components/HealthRecordDetailModal';
import Footer from './components/Footer';

function App() {
  const [healthMetrics, setHealthMetrics] = useState([]);
  const [viewRecord, setViewRecord] = useState(null);

  const addMetric = (newMetric) => {
    setHealthMetrics([newMetric, ...healthMetrics]);
  };

  const deleteMetric = (id) => {
    setHealthMetrics(healthMetrics.filter((metric) => metric.id !== id));
  };

  const editMetric = (updatedMetric) => {
    setHealthMetrics(
      healthMetrics.map((metric) =>
        metric.id === updatedMetric.id ? updatedMetric : metric
      )
    );
  };

  const viewDetails = (record) => {
    setViewRecord(record);
  };

  const closeModal = () => {
    setViewRecord(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-grow py-6 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          🩺 Health Tracking App
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Dashboard */}
          <div className="lg:w-2/3">
            <HealthMetricsDashboard
              metrics={healthMetrics}
              onEdit={editMetric}
              onDelete={deleteMetric}
              onView={viewDetails}
            />
          </div>

          {/* New Entry Form */}
          <div className="lg:w-1/3">
            <NewEntryForm addMetric={addMetric} />
          </div>
        </div>

        {/* Modal */}
        {viewRecord && (
          <HealthRecordDetailModal record={viewRecord} onClose={closeModal} />
        )}
      </div>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
}

export default App;
