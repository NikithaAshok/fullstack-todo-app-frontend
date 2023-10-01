// import React, { useState } from "react";
// import axios from "axios";

// function Search() {
//   //for search


//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

// //   const handleChange 

// const obj = {}

//   const handleSearch = async (obj, data, setData) => {
//    try{
//         const response = await axios.get(`${baseUrl}/search`);
//         console.log("Fetched data",{data})
//         setData(response.data);
//    } catch(error){
//     console.error("Error fetchign data")
//    }
//   };

//   return (
//     <div>
//         <input 
//         type="text" 
//         placeholder="Enter your query here"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}/>
//         <button onClick={() => handleSearch(query,data,setData)} >Search</button>
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//           </ul>
//     </div>
//   );
// }

// export default Search;


// import React,{useState} from "react";

// import {FaSearch} from "react-icons/fa"
// import "../search.css"

// const Search = ({setResults}) => {
//     const [input, setInput] = useState("")

//     const fetchData = (value) => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((json) => {
//             const results = json.filter((user) => {
//                 return user && user.name && user.name.toLowerCase().includes(value)
//             })
//             setResults(results)
//         })
//     }

//     const handleChange = (value) => {
//         setInput(value);
//         fetchData(value);
//     }

//     return <div className="input-wrapper">
//         <FaSearch id="search-icon"/>
//         <input 
//         placeholder="Type to search..."
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//         />
//     </div>
// }

// export default Search;

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
        const response = await axios.get(`${baseUrl}/search`);
        const json = response.data;
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
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
