import Search from '../components/Search';
import LatestReleases from '../components/LatestReleases';
import AppContainer from '../components/AppContainer';

function Home() {
  return (
    <AppContainer>
      <Search/>
      <LatestReleases/>
    </AppContainer>
  );
}

export default Home;
