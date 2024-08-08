import "./SearchResult.css";
import data from "./slider.json";




export const SearchResult = ({ result }) => {
  return (
   
    <div
      className="search-result"
      onClick={event =>  window.location.href='/housegrid/'}
    >
      {result}
    </div>
  );
};

