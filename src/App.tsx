import React from 'react';
import './App.css';
import ImageDiff from './components/ImageDiff';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Image Diff</h1>
      <ImageDiff />
    </div>
  );
}

export default App;
