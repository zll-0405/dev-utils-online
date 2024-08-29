"use client";

import React, { useState } from 'react';

const Base64Converter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('encode');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    if (mode === 'encode') {
      setOutput(btoa(newInput));
    } else {
      try {
        setOutput(atob(newInput));
      } catch (error) {
        setOutput('Invalid Base64 string');
      }
    }
  };

  const handleModeChange = (newMode: 'encode' | 'decode') => {
    setMode(newMode);
    setInput('');
    setOutput('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">Base64 encoder/decoder</h2>
      <p className="text-center text-gray-600 mb-6">Free, Open Source</p>
      <div className="flex mb-4">
        <button
          onClick={() => handleModeChange('encode')}
          className={`flex-1 p-2 ${mode === 'encode' ? 'bg-white text-black border-b-2 border-blue-500' : 'bg-gray-100 text-gray-600'} rounded-tl`}
        >
          Encode
        </button>
        <button
          onClick={() => handleModeChange('decode')}
          className={`flex-1 p-2 ${mode === 'decode' ? 'bg-white text-black border-b-2 border-blue-500' : 'bg-gray-100 text-gray-600'} rounded-tr`}
        >
          Decode
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">
          {mode === 'encode' ? 'Text to encode' : 'Base64 to decode'}
        </label>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Paste here"
          className="w-full h-32 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Base64</label>
        <textarea
          value={output}
          readOnly
          className="w-full h-32 p-2 border border-gray-300 rounded"
        />
      </div>
      <button onClick={handleCopy} className="w-full p-2 bg-gray-200 text-gray-700 rounded">
        Copy
      </button>
    </div>
  );
};

export default Base64Converter;