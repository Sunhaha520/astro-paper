import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

export default function GalleryComponent({ images }) {
  const [open, setOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [hoveredImage, setHoveredImage] = React.useState(null);

  const slides = images.map((image) => ({ src: image.src, title: image.title, description: image.description }));

  const openLightbox = (index) => {
    setCurrentSlide(index);
    setOpen(true);
  };

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 800: 2, 400: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={`Image ${index}`} style={{ cursor: "pointer" }} />
            {hoveredImage === image && (
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentSlide}
      />

      <style jsx>{`
        .image-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .my-masonry-grid_column > div:hover .image-info {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
