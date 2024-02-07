import React, { useEffect, useCallback } from 'react';
const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});
const ListItem = React.memo(({ post, key, testfuc }) => {
  console.log('list item is rendering');
  return (
    <li key={key}>
      <a>{post.title}</a>
    </li>
  );
});
const B = React.memo(({ message, posts }) => {
  // 여러 컴포넌트로 나눈 경우
  console.log('b component is rendering');
  const testfuc = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      {posts.map((post) => (
        <ListItem key={post.id} post={post} testfuc={testfuc} />
      ))}
    </div>
  );
});

export default B;
