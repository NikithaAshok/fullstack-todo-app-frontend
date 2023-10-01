
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "../search.css";

const Search = ({ setResults }) => {
  const [input, setInput] = useState("");
//   const [data, setData] = useState([]);
const baseUrl = "http://localhost:3000"

  useEffect(() => {
    const fetchData = async (value) => {
      try {
        const response = await axios.get(
          `${baseUrl}/search?keyword=${value}`
        );
        const data = response.data;
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData when the input changes
    if (input) {
      fetchData();
    } else {
      // If the input is empty, clear the results
      setResults([]);
    }
  }, [input, setResults]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
