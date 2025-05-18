import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-hot-toast";
import style from "./css/SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      toast.error("Please enter a search keywords");
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={submitHandler} className={style.SearchForm}>
      <div className={style.SearchFormInputContainer}>
        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={style.SearchFormButton}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;