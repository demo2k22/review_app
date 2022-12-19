import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddReview from "./myComponent/AddReview";
import Review from "./myComponent/Review";

function App() {
  const onDelete = (list) => {
    console.log("i am deleting+", list);
    setList(
      list.filter((e) => {
        return e !== list;
      })
    );
  };
  const [list, setList] = useState([
    { sno: 1, title: "mobile phone", rating: 1, desc: "goodd" },
    { sno: 3, title: "charger", rating: 2, desc: "goodd" },
    { sno: 4, title: "books", rating: 4, desc: "goodd" },
  ]);
  return (
    <Routes>
      <Route path="/" element={<Review list={list} onDelete={onDelete} />} />
    
      <Route path="/add-review" element={<AddReview />} />
    </Routes>
  );
}

export default App;
