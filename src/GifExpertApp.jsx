import React, { useState } from "react";
import AddCatgory from "./components/AddCatgory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCatgory
        categories={categories}
        setCategories={setCategories}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <hr />
      <div>
        {categories.map((category) => (
          <div key={category}>
            <GifGrid category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifExpertApp;
