import React from 'react';
import styled from 'styled-components';
const Main = () => {
  return (
    <Smain>
      <h1>칭찬봇</h1>
      <img src="../assets/cat.png" alt="고양이" />
    </Smain>
  );
};
const Smain = styled.main`
  flex-grow: 3;
  box-sizing: border-box;
  border: 1px solid red;
  margin: 0 auto;
`;

export default Main;
