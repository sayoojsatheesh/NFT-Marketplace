// Custom //
import Navbar from "./components/Navbar/Navbar";
import HeadingPage from "./pages/HeadingPage/HeadingPage";
// CSS //
import classes from "./assets/global.module.css";

function App() {
  return (
    <div className={classes.main}>
      <Navbar />
      <HeadingPage/>
    </div>
  );
}

export default App;
