import './App.css';
import { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts
        posts={currentPosts}
        loading={loading}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
