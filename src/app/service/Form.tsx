'use client'

import React from 'react'

const Form = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      
    <form action="#" method="POST" className="space-y-6 grid grid-cols-2 gap-6 m-auto">
      {/* Collect Sensor Data */}
      <div>
        <label htmlFor="sensor-data" className="block text-sm font-semibold text-gray-700">Collect Sensor Data</label>
        <input type="text" id="sensor-data" name="sensor-data" placeholder="Enter sensor data" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Display Bin Status */}
      <div>
        <label htmlFor="bin-status" className="block text-sm font-semibold text-gray-700">Display Bin Status</label>
        <input type="text" id="bin-status" name="bin-status" placeholder="Enter bin status" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Optimize Collection Route */}
      <div>
        <label htmlFor="optimize-route" className="block text-sm font-semibold text-gray-700">Optimize Collection Route</label>
        <input type="text" id="optimize-route" name="optimize-route" placeholder="Enter optimization data" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Add New Bin(s) */}
      <div>
        <label htmlFor="add-bin" className="block text-sm font-semibold text-gray-700">Add New Bin(s)</label>
        <input type="text" id="add-bin" name="add-bin" placeholder="Enter new bin details" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Delete Bin Data */}
      <div>
        <label htmlFor="delete-bin" className="block text-sm font-semibold text-gray-700">Delete Bin Data</label>
        <input type="text" id="delete-bin" name="delete-bin" placeholder="Enter bin ID to delete" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Save Data */}
      <div>
        <label htmlFor="save-data" className="block text-sm font-semibold text-gray-700">Save Data</label>
        <input type="text" id="save-data" name="save-data" placeholder="Enter data to save" className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>

      {/* Exit Button */}
      
    </form>
    <div className="flex justify-between items-center">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save</button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => window.location.href = '/'}>Exit</button>
      </div>
  </div>
  )
}

export default Form