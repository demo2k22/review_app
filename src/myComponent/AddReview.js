import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddReview() {
  const navigator = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements.title.value);
    const data = {
      title: event.target.elements.title.value,
      desc: event.target.elements.desc.value,
      rating: event.target.elements.rating.value,
    };

    let localStorage_data = localStorage.getItem("review_data");
    let review_data;
    try {
      review_data = JSON.parse(JSON.parse(localStorage_data));
      console.log(review_data);
    } catch {
      review_data = JSON.parse(localStorage_data);
    }
    review_data.push(data);
    localStorage.setItem("review_data", JSON.stringify(review_data));

    alert("Your review is added successfully");
    document.getElementById("review-form").reset();
  };

  const handleReset = (e) => {
    document.getElementById("review-form").reset();
  };
  const handleShowReview = (e) => {
    navigator("/");
  };

  return (
    <div className="container my-5">
      <div className="container-fluid">
        <h3>Add Review</h3>
        <form onSubmit={handleSubmit} id="review-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select className="form-control" id="rating" name="rating" required>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="desc" name="desc">
              Description
            </label>
            <textarea type="text" className="form-control" id="desc" />
          </div>

          <button type="submit" className="btn btn-success my-2">
            Submit
          </button>

          <button
            onClick={handleReset}
            className="btn btn-primary float-right ml-3"
          >
            Reset
          </button>
          <button
            className="btn btn-primary float-right ml-3"
            type="button"
            onClick={handleShowReview}
          >
            Show Review
          </button>
        </form>
      </div>
    </div>
  );
}
