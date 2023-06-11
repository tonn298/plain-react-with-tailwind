import { useWindowSize } from 'usehooks-ts';
import { LandingPage } from './pages/landingPage/LandingPage';
import { SmallLandingPage } from './pages/landingPage/SmallLandingPage';

function App() {
  const { width } = useWindowSize();
  const isSmallDevice = width < 320;
  return isSmallDevice ? <SmallLandingPage /> : <LandingPage />;
}

export default App;
