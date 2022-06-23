import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Combobox from "react-widgets/Combobox";

function AddPage() {
  
  let colors = ["red", "green", "blue", "yellow", "orange", "purple"];

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(-1);
  };

  return (
   
    <div className="flex w-full justify-center">
      <div>
        <div>
          <div className="flex">
            <button onClick={routeChange}>
              <div className="mt-2 border-2 border-gray-300 hover:border-black p-1 rounded-lg">
                <BiArrowBack size={24} />
              </div>
            </button>
            <div className="flex flex-col justify-center ml-2 mt-1">
              <h1>Return List Page </h1>
            </div>
          </div>
          <div>
            <h1 className="mt-4">Add Book Page</h1>
            <h1 className="mt-4">Book Name</h1>
          </div>
          <input
            className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
            type="text"
            placeholder="Book Name"
          />
        </div>
        <div>
          <h1>Author</h1>
          <select
            name="books"
            className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
          >
            {colors.map((author) => (
              <option
                key={author}
                value={author}
                className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
              >
                {author}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1>Category</h1>
          <select
            name="books"
            className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
          >
            {colors.map((categories) => (
              <option
                key={categories}
                value={categories}
                className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
              >
                {categories}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1>Publisher</h1>
          <select
            name="books"
            className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
          >
            {colors.map((publishers) => (
              <option
                key={publishers}
                value={publishers}
                className="mt-1 mb-2 p-2 w-80 h-full border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black"
              >
                {publishers}
              </option>
            ))}
          </select>
        </div>
        <button className="mt-1 mb-2 p-2 w-80 h-20 border-2 outline-2 outline-black border-gray-300 rounded-md hover:border-black">
          Add Book
        </button>
      </div>

    </div>
  );
}

export default AddPage;
