import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export default function GalleryComponent({ images }) {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={images}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
