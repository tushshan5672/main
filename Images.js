import React from "react";
import "./App.css";
export default function Images({ posts, loading }) {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <React.Fragment>
      {posts &&
        posts.map(post => (
          <div key={post.id} className="container mt-2 d-flex justify-content-center mb-3 item-c">
            <img
              src={post.urls.regular}
              key={post.id}
              className="img-fluid item-i"
              alt={post.alt_description}
            />
          </div>
        ))}
    </React.Fragment>
  );
}
