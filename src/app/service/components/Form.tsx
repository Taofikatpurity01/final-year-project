'use client'

import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';

// Type definitions
interface Bin {
  id: number;
  location: string;
  fillLevel: number;
  needsCollection: boolean;
  lastUpdated: string;
}

interface NewBinData {
  location: string;
  fillLevel: number;
  needsCollection: boolean;
}

interface UpdateBinData {
  id: string;
  location: string;
  fillLevel: number;
  needsCollection: boolean;
}

const SmartWasteForm = () => {
  const [bins, setBins] = useState<Bin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [selectedBin, setSelectedBin] = useState<Bin | null>(null);
  
  // Form states
  const [newBin, setNewBin] = useState<NewBinData>({
    location: '',
    fillLevel: 0,
    needsCollection: false
  });
  const [searchId, setSearchId] = useState<string>('');
  const [deleteId, setDeleteId] = useState<string>('');
  const [updateData, setUpdateData] = useState<UpdateBinData>({
    id: '',
    location: '',
    fillLevel: 0,
    needsCollection: false
  });

  const API_BASE = 'https://smart-waste-management-system-zngv.onrender.com';

  // Icon components as simple SVGs
  const TrashIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3,6 5,6 21,6"></polyline>
      <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
  );

  const SaveIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17,21 17,13 7,13 7,21"></polyline>
      <polyline points="7,3 7,8 15,8"></polyline>
    </svg>
  );

  const RouteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="19" r="3"></circle>
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
    </svg>
  );

  const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  );

  const AlertIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );

  const LoaderIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>
  );

  // const showMessage = (text: string, type: 'success' | 'error' | 'info' = 'info') => {
  //   setMessage(text);
  //   setMessageType(type);
  //   setTimeout(() => setMessage(''), 5000);
  // };
  
const showMessage = useCallback(
  (text: string, type: 'success' | 'error' | 'info' = 'info') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 5000);
  },
  [setMessage, setMessageType] // dependencies used inside
);

  // Fetch all bins
  // const fetchAllBins = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${API_BASE}/bins`);
  //     if (response.ok) {
  //       const data: Bin[] = await response.json();
  //       setBins(data);
  //       showMessage(`Loaded ${data.length} bins successfully`, 'success');
  //     } else {
  //       showMessage('Failed to fetch bins', 'error');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching bins:', error);
  //     showMessage('Error connecting to server', 'error');
  //   }
  //   setLoading(false);
  // };
  const fetchAllBins = useCallback(async () => {
  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/bins`);
    if (response.ok) {
      const data: Bin[] = await response.json();
      setBins(data);
      showMessage(`Loaded ${data.length} bins successfully`, 'success');
    } else {
      showMessage('Failed to fetch bins', 'error');
    }
  } catch (error) {
    console.error('Error fetching bins:', error);
    showMessage('Error connecting to server', 'error');
  }
  setLoading(false);
}, [API_BASE, setLoading, setBins, showMessage]);

  // Get specific bin
  const getBinById = async () => {
    if (!searchId) {
      showMessage('Please enter a bin ID', 'error');
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/bins/${searchId}`);
      if (response.ok) {
        const data: Bin = await response.json();
        setSelectedBin(data);
        showMessage('Bin found successfully', 'success');
      } else if (response.status === 404) {
        showMessage('Bin not found', 'error');
        setSelectedBin(null);
      }
    } catch (error) {
      console.error('Error fetching bin:', error);
      showMessage('Error fetching bin', 'error');
    }
    setLoading(false);
  };

  // Add new bin
  const addNewBin = async () => {
    if (!newBin.location) {
      showMessage('Location is required', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/bins`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBin),
      });

      if (response.ok) {
        const data: { success: boolean; message: string; data: Bin } = await response.json();
        showMessage(data.message || 'Bin added successfully', 'success');
        setNewBin({ location: '', fillLevel: 0, needsCollection: false });
        fetchAllBins(); // Refresh the list
      } else {
        showMessage('Failed to add bin', 'error');
      }
    } catch (error) {
      console.error('Error adding bin:', error);
      showMessage('Error adding bin', 'error');
    }
    setLoading(false);
  };

  // Update bin
  const updateBin = async () => {
    if (!updateData.id) {
      showMessage('Please enter bin ID to update', 'error');
      return;
    }

    setLoading(true);
    try {
      const updatePayload: Partial<Omit<Bin, 'id' | 'lastUpdated'>> = {};
      if (updateData.location) updatePayload.location = updateData.location;
      if (updateData.fillLevel !== undefined) updatePayload.fillLevel = parseInt(updateData.fillLevel.toString());
      updatePayload.needsCollection = updateData.needsCollection;

      const response = await fetch(`${API_BASE}/bins/${updateData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePayload),
      });

      if (response.ok) {
        showMessage('Bin updated successfully', 'success');
        setUpdateData({ id: '', location: '', fillLevel: 0, needsCollection: false });
        fetchAllBins(); // Refresh the list
      } else if (response.status === 404) {
        showMessage('Bin not found', 'error');
      } else {
        showMessage('Failed to update bin', 'error');
      }
    } catch (error) {
      console.error('Error updating bin:', error);
      showMessage('Error updating bin', 'error');
    }
    setLoading(false);
  };

  // Delete bin
  const deleteBin = async () => {
    if (!deleteId) {
      showMessage('Please enter bin ID to delete', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/bins/${deleteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        showMessage('Bin deleted successfully', 'success');
        setDeleteId('');
        fetchAllBins(); // Refresh the list
      } else if (response.status === 404) {
        showMessage('Bin not found', 'error');
      } else {
        showMessage('Failed to delete bin', 'error');
      }
    } catch (error) {
      console.error('Error deleting bin:', error);
      showMessage('Error deleting bin', 'error');
    }
    setLoading(false);
  };

  // Optimize collection route (mock implementation)
  const optimizeRoute = () => {
    const binsNeedingCollection = bins.filter(bin => bin.needsCollection || bin.fillLevel > 80);
    if (binsNeedingCollection.length === 0) {
      showMessage('No bins need collection currently', 'info');
    } else {
      showMessage(`Optimized route for ${binsNeedingCollection.length} bins: ${binsNeedingCollection.map(b => b.location).join(' → ')}`, 'success');
    }
  };

  
  useEffect(() => {
    fetchAllBins();
  }, [fetchAllBins]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <TrashIcon />
          Smart Waste Management System
        </h1>
        <p className="text-gray-600">Manage and monitor your smart waste bins efficiently</p>
      </div>

      {/* Status Message */}
      {message && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
          messageType === 'success' ? 'bg-green-100 text-green-800' :
          messageType === 'error' ? 'bg-red-100 text-red-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {messageType === 'success' ? <CheckIcon /> :
           messageType === 'error' ? <AlertIcon /> :
           <AlertIcon />}
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Actions */}
        <div className="space-y-6">
          {/* Load All Bins */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <SaveIcon />
              Load Sensor Data
            </h3>
            <button
              onClick={fetchAllBins}
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <LoaderIcon /> : <SaveIcon />}
              Refresh All Bins
            </button>
          </div>

          {/* Get Specific Bin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <SearchIcon />
              Get Bin Status
            </h3>
            <div className="space-y-3">
              <input
                type="number"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter bin ID"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                onClick={getBinById}
                disabled={loading}
                className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <LoaderIcon /> : <SearchIcon />}
                Search Bin
              </button>
            </div>
          </div>

          {/* Add New Bin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <PlusIcon />
              Add New Bin
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                value={newBin.location}
                onChange={(e) => setNewBin({...newBin, location: e.target.value})}
                placeholder="Location (required)"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="number"
                min="0"
                max="100"
                value={newBin.fillLevel}
                onChange={(e) => setNewBin({...newBin, fillLevel: parseInt(e.target.value) || 0})}
                placeholder="Fill Level (0-100)"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newBin.needsCollection}
                  onChange={(e) => setNewBin({...newBin, needsCollection: e.target.checked})}
                  className="rounded"
                />
                <span>Needs Collection</span>
              </label>
              <button
                onClick={addNewBin}
                disabled={loading}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <LoaderIcon /> : <PlusIcon />}
                Add Bin
              </button>
            </div>
          </div>

          {/* Update Bin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <SaveIcon />
              Update Bin Data
            </h3>
            <div className="space-y-3">
              <input
                type="number"
                value={updateData.id}
                onChange={(e) => setUpdateData({...updateData, id: e.target.value})}
                placeholder="Bin ID to update"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                value={updateData.location}
                onChange={(e) => setUpdateData({...updateData, location: e.target.value})}
                placeholder="New location (optional)"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="number"
                min="0"
                max="100"
                value={updateData.fillLevel}
                onChange={(e) => setUpdateData({...updateData, fillLevel: parseInt(e.target.value) || 0})}
                placeholder="Fill Level (0-100)"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={updateData.needsCollection}
                  onChange={(e) => setUpdateData({...updateData, needsCollection: e.target.checked})}
                  className="rounded"
                />
                <span>Needs Collection</span>
              </label>
              <button
                onClick={updateBin}
                disabled={loading}
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <LoaderIcon /> : <SaveIcon />}
                Update Bin
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - More Actions & Data Display */}
        <div className="space-y-6">
          {/* Delete Bin */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrashIcon />
              Delete Bin Data
            </h3>
            <div className="space-y-3">
              <input
                type="number"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
                placeholder="Enter bin ID to delete"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button
                onClick={deleteBin}
                disabled={loading}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <LoaderIcon /> : <TrashIcon />}
                Delete Bin
              </button>
            </div>
          </div>

          {/* Optimize Route */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <RouteIcon />
              Optimize Collection Route
            </h3>
            <button
              onClick={optimizeRoute}
              className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 flex items-center justify-center gap-2"
            >
              <RouteIcon />
              Generate Optimal Route
            </button>
          </div>

          {/* Selected Bin Display */}
          {selectedBin && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Bin Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">ID:</span> {selectedBin.id}</p>
                <p><span className="font-medium">Location:</span> {selectedBin.location}</p>
                <p><span className="font-medium">Fill Level:</span> {selectedBin.fillLevel}%</p>
                <p><span className="font-medium">Needs Collection:</span> {selectedBin.needsCollection ? 'Yes' : 'No'}</p>
                <p><span className="font-medium">Last Updated:</span> {new Date(selectedBin.lastUpdated).toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* All Bins Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">All Bins Summary ({bins.length})</h3>
            <div className="max-h-64 overflow-y-auto space-y-2">
              {bins.length === 0 ? (
                <p className="text-gray-500 text-center py-4">No bins loaded. Click Refresh All Bins to load data.</p>
              ) : (
                bins.map((bin) => (
                  <div
                    key={bin.id}
                    className={`p-3 rounded border-l-4 ${
                      bin.needsCollection || bin.fillLevel > 80
                        ? 'border-red-400 bg-red-50'
                        : bin.fillLevel > 50
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-green-400 bg-green-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{bin.location}</p>
                        <p className="text-sm text-gray-600">ID: {bin.id} | Fill: {bin.fillLevel}%</p>
                      </div>
                      {(bin.needsCollection || bin.fillLevel > 80) && (
                        <span className="text-red-600 text-xs font-medium">COLLECT</span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Exit Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center justify-center gap-2 mx-auto"
        >
          <XIcon />
          Exit System
        </button>
      </div>
    </div>
  );
};

export default SmartWasteForm;


// 'use client'

// import React, { useState, useEffect } from 'react'

// const Form = () => {
//   const [formData, setFormData] = useState({
//     sensorData: '',
//     binStatus: '',
//     optimizeRoute: '',
//     addBin: '',
//     deleteBin: '',
//     saveData: ''
//   });

//   useEffect(() => {
//     // Fetch data from the provided URL
//     fetch('https://70a69942-fbae-4442-ab6f-609f8fefde2d-00-15psmp9okxqmm.picard.replit.dev/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // Attempt to parse JSON
//       })
//       .then(data => {
//         // Assuming the response data matches the form fields, you can set the state accordingly
//         setFormData({
//           sensorData: data.sensorData || '',
//           binStatus: data.binStatus || '',
//           optimizeRoute: data.optimizeRoute || '',
//           addBin: data.addBin || '',
//           deleteBin: data.deleteBin || '',
//           saveData: data.saveData || ''
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         // Optionally, set an error state to display an error message
//       });
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <form action="#" method="POST" className="space-y-6 grid grid-cols-2 gap-6 m-auto">
//         {/* Collect Sensor Data */}
//         <div>
//           <label htmlFor="sensor-data" className="block text-sm font-semibold text-gray-700">Collect Sensor Data</label>
//           <input
//             type="text"
//             id="sensor-data"
//             name="sensorData"
//             value={formData.sensorData}
//             onChange={handleChange}
//             placeholder="Enter sensor data"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* Display Bin Status */}
//         <div>
//           <label htmlFor="bin-status" className="block text-sm font-semibold text-gray-700">Get Bin</label>
//           <input
//             type="text"
//             id="bin-status"
//             name="binStatus"
//             value={formData.binStatus}
//             onChange={handleChange}
//             placeholder="Get bin"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* Optimize Collection Route */}
//         <div>
//           <label htmlFor="optimize-route" className="block text-sm font-semibold text-gray-700">Optimize Collection Route</label>
//           <input
//             type="text"
//             id="optimize-route"
//             name="optimizeRoute"
//             value={formData.optimizeRoute}
//             onChange={handleChange}
//             placeholder="Enter optimization data"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* Add New Bin(s) */}
//         <div>
//           <label htmlFor="add-bin" className="block text-sm font-semibold text-gray-700">Add New Bin(s)</label>
//           <input
//             type="text"
//             id="add-bin"
//             name="addBin"
//             value={formData.addBin}
//             onChange={handleChange}
//             placeholder="Enter new bin details"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* Delete Bin Data */}
//         <div>
//           <label htmlFor="delete-bin" className="block text-sm font-semibold text-gray-700">Delete Bin Data</label>
//           <input
//             type="text"
//             id="delete-bin"
//             name="deleteBin"
//             value={formData.deleteBin}
//             onChange={handleChange}
//             placeholder="Enter bin ID to delete"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* Save Data */}
//         <div>
//           <label htmlFor="save-data" className="block text-sm font-semibold text-gray-700">Save Data</label>
//           <input
//             type="text"
//             id="save-data"
//             name="saveData"
//             value={formData.saveData}
//             onChange={handleChange}
//             placeholder="Enter data to save"
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>
//       </form>

//       {/* Exit Button */}
//       <div className="flex justify-between items-center">
//         <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save</button>
//         <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => window.location.href = '/'}>Exit</button>
//       </div>
//     </div>
//   )
// }

// export default Form



// 'use client'

// import React, { useState } from 'react'

// const Form = () => {
//   const [formData, setFormData] = useState({
//     sensorData: '',
//     binStatus: '',
//     optimizeRoute: '',
//     addBin: '',
//     deleteBin: '',
//     saveData: '',
//   })

//   const [responseMessage, setResponseMessage] = useState('')

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleAddBin = async () => {
//     try {
//       const res = await fetch('https://swms-1.onrender.com/api/v1/bin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ location: formData.addBin }),
//       })
//       const data = await res.json()
//       setResponseMessage('✅ Bin added: ' + JSON.stringify(data))
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         console.error("Fetch error: ", err.message);
//         setResponseMessage('❌ Error: ' + err.message);
//       } else {
//         setResponseMessage('❌ An unknown error occurred.');
//       }
//     }
//   }

//   const handleDeleteBin = async () => {
//     try {
//       const res = await fetch(`https://swms-1.onrender.com/api/v1/bin/${formData.deleteBin}`, {
//         method: 'DELETE',
//       })
//       const data = await res.json()
//       setResponseMessage('✅ Bin deleted: ' + JSON.stringify(data))
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         console.error("Fetch error: ", err.message);
//         setResponseMessage('❌ Error: ' + err.message);
//       } else {
//         setResponseMessage('❌ An unknown error occurred.');
//       }
//     }
//   }

//   const handleGetBins = async () => {
//     try {
//       const res = await fetch('https://swms-1.onrender.com/api/v1/bin')
//       const data = await res.json()
//       setResponseMessage('📦 Bin status: ' + JSON.stringify(data))
//     }catch (err: unknown) {
//       if (err instanceof Error) {
//         console.error("Fetch error: ", err.message);
//         setResponseMessage('❌ Error: ' + err.message);
//       } else {
//         setResponseMessage('❌ An unknown error occurred.');
//       }
//     }
//   }

//   const handleSensorData = async () => {
//     try {
//       const res = await fetch('https://swms-1.onrender.com/api/v1/sensors')
//       const data = await res.json()
//       setResponseMessage('📡 Sensor data: ' + JSON.stringify(data))
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         console.error("Fetch error: ", err.message);
//         setResponseMessage('❌ Error: ' + err.message);
//       } else {
//         setResponseMessage('❌ An unknown error occurred.');
//       }
//     }
//   }

//   const handleOptimizeRoute = async () => {
//     try {
//       const res = await fetch('https://swms-1.onrender.com/api/v1/bin/route')
//       const data = await res.json()
//       setResponseMessage('🚛 Optimized route: ' + JSON.stringify(data))
//     }catch (err: unknown) {
//       if (err instanceof Error) {
//         console.error("Fetch error: ", err.message);
//         setResponseMessage('❌ Error: ' + err.message);
//       } else {
//         setResponseMessage('❌ An unknown error occurred.');
//       }
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <form className="space-y-6 grid grid-cols-2 gap-6 m-auto" onSubmit={(e) => e.preventDefault()}>
//         {/* Sensor Data */}
//         <div>
//           <label htmlFor="sensorData" className="block text-sm font-semibold text-gray-700">Collect Sensor Data</label>
//           <input type="text" id="sensorData" name="sensorData" value={formData.sensorData} onChange={handleChange} placeholder="Enter sensor data" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//           <button type="button" className="mt-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleSensorData}>Fetch</button>
//         </div>

//         {/* Bin Status */}
//         <div>
//           <label htmlFor="binStatus" className="block text-sm font-semibold text-gray-700">Get Bin</label>
//           <input type="text" id="binStatus" name="binStatus" value={formData.binStatus} onChange={handleChange} placeholder="Get bin" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//           <button type="button" className="mt-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleGetBins}>Get</button>
//         </div>

//         {/* Optimize Route */}
//         <div>
//           <label htmlFor="optimizeRoute" className="block text-sm font-semibold text-gray-700">Optimize Route</label>
//           <input type="text" id="optimizeRoute" name="optimizeRoute" value={formData.optimizeRoute} onChange={handleChange} placeholder="Enter optimization input" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//           <button type="button" className="mt-2 px-3 py-1 bg-blue-500 text-white rounded" onClick={handleOptimizeRoute}>Optimize</button>
//         </div>

//         {/* Add Bin */}
//         <div>
//           <label htmlFor="addBin" className="block text-sm font-semibold text-gray-700">Add Bin</label>
//           <input type="text" id="addBin" name="addBin" value={formData.addBin} onChange={handleChange} placeholder="Enter location" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//           <button type="button" className="mt-2 px-3 py-1 bg-green-600 text-white rounded" onClick={handleAddBin}>Add</button>
//         </div>

//         {/* Delete Bin */}
//         <div>
//           <label htmlFor="deleteBin" className="block text-sm font-semibold text-gray-700">Delete Bin</label>
//           <input type="text" id="deleteBin" name="deleteBin" value={formData.deleteBin} onChange={handleChange} placeholder="Enter Bin ID" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//           <button type="button" className="mt-2 px-3 py-1 bg-red-600 text-white rounded" onClick={handleDeleteBin}>Delete</button>
//         </div>

//         {/* Save Data - Placeholder */}
//         <div>
//           <label htmlFor="saveData" className="block text-sm font-semibold text-gray-700">Save Data</label>
//           <input type="text" id="saveData" name="saveData" value={formData.saveData} onChange={handleChange} placeholder="Placeholder only" className="mt-2 p-2 w-full border border-gray-300 rounded-md" disabled />
//         </div>
//       </form>

//       {/* Response Display */}
//       {responseMessage && (
//         <div className="mt-6 bg-gray-100 border border-gray-300 p-4 rounded-md text-sm text-gray-800 whitespace-pre-wrap">
//           {responseMessage}
//         </div>
//       )}

//       {/* Exit Button */}
//       <div className="flex justify-end mt-6">
//         <button type="button" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900" onClick={() => window.location.href = '/'}>Exit</button>
//       </div>
//     </div>
//   )
// }

// export default Form



// 'use client'

// import React from 'react'

// const Form = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 ">
      
//     <form action="#" method="POST" className="space-y-6 grid grid-cols-2 gap-6 m-auto">
//       {/* Collect Sensor Data */}
//       <div>
//         <label htmlFor="sensor-data" className="block text-sm font-semibold text-gray-700">Collect Sensor Data</label>
//         <input type="text" id="sensor-data" name="sensor-data" placeholder="Enter sensor data" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Display Bin Status */}
//       <div>
//         <label htmlFor="bin-status" className="block text-sm font-semibold text-gray-700">Get Bin </label>
//         <input type="text" id="bin-status" name="bin-status" placeholder="Get bin" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Optimize Collection Route */}
//       <div>
//         <label htmlFor="optimize-route" className="block text-sm font-semibold text-gray-700">Optimize Collection Route</label>
//         <input type="text" id="optimize-route" name="optimize-route" placeholder="Enter optimization data" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Add New Bin(s) */}
//       <div>
//         <label htmlFor="add-bin" className="block text-sm font-semibold text-gray-700">Add New Bin(s)</label>
//         <input type="text" id="add-bin" name="add-bin" placeholder="Enter new bin details" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Delete Bin Data */}
//       <div>
//         <label htmlFor="delete-bin" className="block text-sm font-semibold text-gray-700">Delete Bin Data</label>
//         <input type="text" id="delete-bin" name="delete-bin" placeholder="Enter bin ID to delete" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Save Data */}
//       <div>
//         <label htmlFor="save-data" className="block text-sm font-semibold text-gray-700">Save Data</label>
//         <input type="text" id="save-data" name="save-data" placeholder="Enter data to save" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
//       </div>

//       {/* Exit Button */}
      
//     </form>
//     <div className="flex justify-between items-center">
//         <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save</button>
//         <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => window.location.href = '/'}>Exit</button>
//       </div>
//   </div>
//   )
// }

// export default Form