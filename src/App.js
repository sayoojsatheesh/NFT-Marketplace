// Custom //
import Navbar from "./components/Navbar/Navbar";
import HeadingPage from "./pages/HeadingPage/HeadingPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import PopularArtist from "./pages/PopularArtist/PopularArtist";
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
    </div>
  );
}

export default App;
