import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

export default function GalleryComponent({ images }) {
  const [open, setOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = images.map((image) => ({ src: image }));

  const openLightbox = (index) => {
    setCurrentSlide(index);
    setOpen(true);
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 400: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => openLightbox(index)}>
            <img src={image} alt={`Image ${index}`} style={{ cursor: "pointer" }} />
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentSlide}
      />
    </>
  );
}
