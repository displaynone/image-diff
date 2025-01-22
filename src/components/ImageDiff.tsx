import React, { ChangeEvent, useState } from "react";

function ImageDiff() {
	const [image1, setImage1] = useState(null);
	const [image2, setImage2] = useState(null);

	const handleImage1Change = (e: ChangeEvent<HTMLInputElement>) => {
		setImage1(URL.createObjectURL(e.target.files[0]));
	};

	const handleImage2Change = (e: ChangeEvent<HTMLInputElement>) => {
		setImage2(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div>
			<input type="file" onChange={handleImage1Change} />
			<input type="file" onChange={handleImage2Change} />
			{image1 && <img src={image1} alt="Image 1" />}
			{image2 && <img src={image2} alt="Image 2" />}
			{/* Add your image diff logic here */}
		</div>
	);
}

export default ImageDiff;
