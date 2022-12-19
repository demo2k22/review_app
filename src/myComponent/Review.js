import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Review(props) {
  let navigator = useNavigate();
  const [data, setData] = useState([]);
  function OnDelete(idx) {

    let all_data = data;
    all_data.splice(idx, 1);
    localStorage.setItem("review_data", JSON.stringify(all_data));
    window.location.reload();
  }
  function handleClick() {
    navigator("/add-review");
  }
  useEffect(() => {
    if (!localStorage.getItem("review_data")) {
      localStorage.setItem("review_data", JSON.stringify("[]"));
    } else {
      // console.log(JSON.parse(localStorage.getItem("review_data")));
      setData(...[JSON.parse(localStorage.getItem("review_data"))]);
      //console.log(data)
    }
  }, []);

  return (
    <div className="container my-5">
    <h2 className="text-center">Review List</h2>
      <button className="btn btn-primary float-right" onClick={handleClick}>
        + Add Review 
      </button>
      <br/>
      <div className="row">
        {data
          ? data.map((item, idx) => {
              return (
                <div
                  className="card text-white bg-primary mb-3 col-4"
                  style={{ maxWidth: "18rem", margin: "20px" }}
                >
                  <div className="card-header">{item.title}</div>
                  <div className="card-body">
                    <h5 className="card-title">Rating : {item.rating}</h5>
                    <p className="card-text">Desc :- {item.desc} </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        OnDelete(idx);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
