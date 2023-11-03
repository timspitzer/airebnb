import { useEffect, useState } from "react";

export function ImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);
  const [imagesWithIds, setImagesWithIds] = useState(images);

  useEffect(() => {
    setImagesWithIds(
      images.map((image) => ({ id: crypto.randomUUID(), url: image }))
    );
  }, [images]);

  return (
    <div>
      {imagesWithIds.map(({ id, url }) => (
        <img className="h-full w-full" key={id} src={url}></img>
      ))}
    </div>
  );
}
