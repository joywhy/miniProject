import './App.css';
import styled from 'styled-components';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    <Scontainer>
      <Header />
      <Main />
    </Scontainer>
  );
}
const Scontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid blue;
`;
export default App;
