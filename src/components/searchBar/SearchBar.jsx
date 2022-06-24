import { GrSearch } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {useNavigate } from 'react-router-dom'
import axios from "axios";

function SearchBar() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `add`; 
    navigate(path);
  }

  const handleChange = (e) => {
    const searchTerm= e.target.value;
  }


  return ( 
      <div className="flex justify-center h-full w-80 mx-auto mt-4"> 
          <input
          id="searchInput"
            className="p-2 w-full h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
            type="search"
            name="searchTerm"
            placeholder="Search"
            onChange={handleChange}

          />
        <button>
          <div className="border-2 border-gray-300 hover:border-black p-1 rounded-lg ml-2">
            <GrSearch size={24} />
          </div>
        </button>
        <button onClick={routeChange}> 
          <div className="border-2 border-gray-300 hover:border-black p-1 rounded-lg ml-2">
            <AiOutlinePlusCircle size={24} />
          </div>
        </button>
      </div>
  );
}

export default SearchBar;
