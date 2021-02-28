import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import "./App.css";
import Images from "./Images";
import Search from "./Search";

const App = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  const ACCESS_KEY ="2740e7a68bf18fd8157ebb3e5c4d725da5fa0a424a641d5be377eb5413251186";
  // const URL = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

  useEffect(() => {
    // console.log("query", query);
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`);
      setPosts(res.data.results);
      setLoading(false);
      setCurrentPage(1);
    };
    fetchPosts();
  }, [query]);

  function updateQuery(e) {
    setQuery(e);
  }
  // console.log(posts);

  // Get current posts
  if (posts.length) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <div>
        <Search callBackFn={updateQuery}></Search>
        <Images posts={currentPosts} loading={loading}></Images>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    );
  } else {
    return (
      <>
        <Search callBackFn={updateQuery}></Search>
        <div className="container mt-2 d-flex justify-content-center">
          <img
            src="https://unsplash.com/photos/apITQIds-Ms?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
            className="img-fluid " alt="space"
          > </img>
        </div>
      </>
    );
  }
};

export default App;
