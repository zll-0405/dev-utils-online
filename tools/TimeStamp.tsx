"use client";

import React, { useState } from "react";

const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  const convertTimestamp = () => {
    const dateObj = new Date(parseInt(timestamp) * 1000);
    setDate(dateObj.toLocaleString());
  };

  const convertDate = () => {
    const dateObj = new Date(date);
    setTimestamp(Math.floor(dateObj.getTime() / 1000).toString());
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 text-center">Timestamp Converter</h2>
      <div className="mb-4">
        <label className="block mb-1">Timestamp (seconds)</label>
        <input
          type="number"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={convertTimestamp}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Convert to Date
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Date</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={convertDate}
          className="mt-2 p-2 bg-green-500 text-white rounded"
        >
          Convert to Timestamp
        </button>
      </div>
    </div>
  );
};

export default TimestampConverter;
