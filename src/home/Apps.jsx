import { useState } from "react";

import "./Apps.css";
import { SearchBar } from "../components/searchbar/SearchBar";
import { SearchResultsList } from "../components/searchbar/SearchResultsList";

function Gpubar() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Gpubar;
