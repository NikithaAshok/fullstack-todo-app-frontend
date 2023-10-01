import React, { useState, useEffect } from "react"; // Correct import statement
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo} from "./utils/HandleApi";
import Search from "./components/Search";
import { SearchResults } from "./components/SearchResults";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [toDoId, setToDoId] = useState("")

  const [results,setResults] = useState([]);
 

  useEffect(() => {
    getAllToDo(setToDo)
  },[])
  
  const updateMode = (_id, text) => {
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        
        {/* </ul> */}
        <h1> Search Bar</h1>
        <div className="search-container">
        <Search setResults={setResults}/>
        {results && results.length > 0 && <SearchResults results={results} />}
        </div>
        
        <div className="top">
          <input 
          type="text" 
          placeholder="Add To Do"
          value={text}
          onChange={(e) => setText(e.target.value)}/>

          <div 
          className="add" 
          onClick={ isUpdate ? 
          () => updateToDo(toDoId, text, setToDo, setText, setIsUpdate) 
          : () => addToDo(text, setText, setToDo)}>
            {isUpdate ? "Update" : "Add"}
          </div>
          </div>

          <div className="line"></div>

          <div className="list">

            {toDo.map((item) => <ToDo 
            key={item._id} 
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={ () => deleteToDo(item._id, setToDo)}/>)}

          </div>

        
      </div>
    </div>
  );
}

export default App;
