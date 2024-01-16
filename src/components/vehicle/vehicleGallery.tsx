import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

export default function VehicleGallery({ images }: { images: string[] }) {
  const formattedImages = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));
  return (
    <ImageGallery
      items={formattedImages}
      className="h-full"
      lazyLoad={false}
      useBrowserFullscreen={false}
      slideDuration={1000}
    />
  );
}
