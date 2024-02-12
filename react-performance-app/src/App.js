import React, { useState, useEffect } from 'react';
import A from './components/A.js';
import B from './components/B.js';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: 'flex' }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;