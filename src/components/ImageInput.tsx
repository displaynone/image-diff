import React, { ChangeEvent, DragEvent, useState } from 'react';

interface ImageInputProps {
  onImageSelect: (file: string) => void;
  label: string;
}

function ImageInput({ onImageSelect, label }: ImageInputProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    onImageSelect(URL.createObjectURL(file));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors
        ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <label className="cursor-pointer block">
        <span className="text-gray-600">{label}</span>
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          className="hidden"
        />
      </label>
      <p className="text-sm text-gray-500 mt-2">
        Drop image here or click to select
      </p>
    </div>
  );
}

export default ImageInput;
