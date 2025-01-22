import React, { useState } from "react";
import ImageInput from "./ImageInput";
import ReactCompareImage from "react-compare-image";

function ImageDiff() {
	const [image1, setImage1] = useState<string | null>(null);
	const [image2, setImage2] = useState<string | null>(null);
	const [showSlider, setShowSlider] = useState(false);

	return (
		<>
			<div className="p-2">
				{!!image1 && !!image2 && !showSlider && (
					<button
						onClick={() => setShowSlider(true)}
						className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-lg"
					>
						Compare Images
					</button>
				)}
				{showSlider && (
					<button
						onClick={() => setShowSlider(false)}
						className="mt-2 px-4 py-2 bg-secondary-500 text-white rounded-lg"
					>
						Reset
					</button>
				)}
			</div>
			<div className="flex gap-4 w-full max-w-4xl">
				{!showSlider && (
					<>
						<div className="w-1/2 space-y-4">
							<ImageInput
								onImageSelect={setImage1}
								label="Select first image"
							/>
							{!!image1 && (
								<img src={image1} alt="Image 1" className="w-full rounded-lg" />
							)}
						</div>
						<div className="w-1/2 space-y-4">
							<ImageInput
								onImageSelect={setImage2}
								label="Select second image"
							/>
							{!!image2 && (
								<img src={image2} alt="Image 2" className="w-full rounded-lg" />
							)}
						</div>
					</>
				)}
				{showSlider && (
					<ReactCompareImage
						leftImage={image1}
						rightImage={image2}
						sliderLineWidth={2}
					/>
				)}
			</div>
		</>
	);
}

export default ImageDiff;
