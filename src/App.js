// Custom //
import Navbar from "./components/Navbar/Navbar";
import HeadingPage from "./pages/HeadingPage/HeadingPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import PopularArtist from "./pages/PopularArtist/PopularArtist";
import SubscribePage from "./pages/SubcribePage/SubscribPage";
// CSS //
import classes from "./assets/global.module.css";

function App() {
  return (
    <div className={classes.main}>
      <Navbar />
      <HeadingPage />
      <MarketPage />
      <CreatePage />
      <PopularArtist />
      <SubscribePage />
    </div>
  );
}

export default App;
