import s from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  console.log(item);
  return (
    <>
      <div>
        <img
          className={s.image}
          src={item.urls.small}
          alt={item.alt_description}
          width={350}
          height={300}
          onClick={() => {
            openModal(item);
          }}
          style={{ cursor: "pointer" }}
        />
        <a href={item.user.links.html} className={s.link} target="blank">
          {item.user.name}
        </a>
      </div>
    </>
  );
};
export default ImageCard;

// return (
//   <>

//       <img
//       onClick={()=>{openModal(item)}}
//         src={item.urls.small}
//         alt={item.urls.alt_description}
//         className={css.img}
//       />

//   </>
