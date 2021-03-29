import React from 'react';

function Posts({ posts, loading }) {

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(({ id, title }) => (
        <li key={id} className='list-group-item'>
          <div className='list-number'>{id}.</div>
          {title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;