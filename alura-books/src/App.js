import Header from './components/Header';
import Search from './components/Search';
import LatestReleases from './components/LatestReleases';
import styled from 'styled-components';


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box
  margin: 0;
  padding: 0;
  background-image: linear-gradient(90deg, #04256d, #326589);

  * {
    box-sizing: border-box;
  }
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <LatestReleases/>
    </AppContainer>
  );
}

export default App;
