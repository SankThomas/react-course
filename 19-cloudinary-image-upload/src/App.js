import React, { useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";

export default function App() {
  const [images, setImages] = useState([]);
  const [imageData, setImageData] = useState(null);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "isqeway9");

    const postImage = async () => {
      try {
        const res = await axios.post(
          // Substitute "${process.env.CLOUDINARY_CLOUDNAME}" with your Cloudinary Cloud Name
          `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUDNAME}/image/upload`,
          formData
        );
        setImageData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };

  // You can remove the console.log
  console.log(imageData);

  return (
    <>
      <section className="container">
        <h1>Image Upload App Using Cloudinary</h1>

        <div>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setImages(e.target.files[0])}
          />
          <button type="submit" onClick={uploadImage}>
            Upload Image
          </button>
        </div>

        {imageData ? (
          <div>
            <Image
              // Substitute "${process.env.CLOUDINARY_CLOUDNAME}" with your Cloudinary Cloud Name
              cloudName={`${process.env.CLOUDINARY_CLOUDNAME}`}
              publicId={imageData.public_id}
            />
          </div>
        ) : (
          <p>Upload your image to view it here</p>
        )}
      </section>
    </>
  );
}
