// Custom //
import Navbar from "./components/Navbar/Navbar";
import HeadingPage from "./pages/HeadingPage/HeadingPage";
import MarketPage from "./pages/MarketPage/MarketPage";
// CSS //
import classes from "./assets/global.module.css";

function App() {
  return (
    <div className={classes.main}>
      <Navbar />
      <HeadingPage />
      <MarketPage />
    </div>
  );
}

export default App;
