import { useEffect, useState } from "react";
import { fetchImages } from "../../services/api";
import toast from "react-hot-toast";
// import s from "./App.module.css";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgs, setImgs] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getData() {
      try {
        setIsLoaded(true);
        setErrorMessage(false);
        const data = await fetchImages(query, page);
        setGallery((prev) => {
          return [...prev, ...data];
        });
        if (data.length === 0) {
          toast.error("Invalid request", {
            position: "top-right",
            style: {
              height: "70px",
              width: "350px",
              fontSize: "25px",
            },
          });
        }
      } catch (e) {
        setErrorMessage(true);
      } finally {
        setIsLoaded(false);
      }
    }
    getData();
  }, [page, query]);

  function handleSearch(newQuery) {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  }

  function handelLoadMore() {
    setPage(page + 1);
  }

  function openModal(img) {
    setImgs(img);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setImgs("");
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {errorMessage && <ErrorMessage />}
      {gallery.length > 0 && (
        <ImageGallery items={gallery} openModal={openModal} />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          imgUrl={imgs.urls.regular}
          likes={imgs.likes}
        />
      )}
      {gallery.length > 0 && !isLoaded && (
        <LoadMoreBtn onClick={handelLoadMore} />
      )}
      {isLoaded && <Loader />}
    </div>
  );
};

export default App;