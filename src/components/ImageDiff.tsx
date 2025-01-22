import React, { useState } from "react";
import ImageInput from "./ImageInput";

function ImageDiff() {
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);

  return (
    <div className="flex gap-4 w-full max-w-4xl">
      <div className="w-1/2 space-y-4">
        <ImageInput onImageSelect={setImage1} label="Select first image" />
        {image1 && <img src={image1} alt="Image 1" className="w-full rounded-lg" />}
      </div>
      <div className="w-1/2 space-y-4">
        <ImageInput onImageSelect={setImage2} label="Select second image" />
        {image2 && <img src={image2} alt="Image 2" className="w-full rounded-lg" />}
      </div>
    </div>
  );
}

export default ImageDiff;
