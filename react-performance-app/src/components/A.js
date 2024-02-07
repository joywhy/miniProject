import React, { useEffect, useState } from 'react';

const A = ({ message, posts }) => {
  //  모든 요소를 하나의 컴포넌트에 넣은 경우
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <a>{post.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default A;
