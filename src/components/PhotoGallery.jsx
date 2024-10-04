// src/components/PhotoGallery.jsx
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PhotoGallery({ photos }) {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Debug: 打印 photos 检查数据
  console.log("Photos received in PhotoGallery:", photos);

  const handlePhotoClick = (index) => {
    setCurrentSlide(index);
    setOpen(true);
  };

  if (!photos || photos.length === 0) {
    return <div>No photos to display</div>;
  }

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={(_, photo, index) => handlePhotoClick(index)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos.map((photo) => ({ src: photo.src }))}
        index={currentSlide}
      />
    </>
  );
}

