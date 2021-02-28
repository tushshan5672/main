import React, {useState} from "react";
import "./App.css";

export default function Search({callBackFn}) {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      // console.log(`Submitting Name ${query}`)
      callBackFn(query);
      setQuery('');
  }
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row d-flex justify-content-center">
          <form className="form-inline d-flex justify-content-center" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Enter your query here" value={query}
              onChange={e => setQuery(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-outline-light mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
