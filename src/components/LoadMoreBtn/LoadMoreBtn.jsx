import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.loadMore}>
      <button className={s.btn} type="button" onClick={onClick}>
        Search more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
