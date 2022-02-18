import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";

const Search = () => {
  const [term, setTerm] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm();
  };
  const router = useRouter();
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Events"
        />
      </form>
    </div>
  );
};

export default Search;
