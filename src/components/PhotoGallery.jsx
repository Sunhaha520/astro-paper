// src/components/PhotoGallery.jsx
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PhotoGallery({ photos }) {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePhotoClick = (index) => {
    setCurrentSlide(index);
    setOpen(true);
  };

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
