import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    if (!values.query) {
      toast.error("Type some... thing", {
        duration: 2000,
        position: "top-right",
        style: {
          height: "70px",
          width: "350px",
          fontSize: "25px",
        },
      });
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header className={s.header}>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
