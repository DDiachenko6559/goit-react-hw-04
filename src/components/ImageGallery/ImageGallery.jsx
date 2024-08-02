import s from "./ImageGallery.module.css";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item) => (
        <li key={item.id} className={s.item}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
