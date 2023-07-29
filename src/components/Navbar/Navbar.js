// CSS //
import classes from "./Navbar.module.css";

// Image //
import MenuImage from "../../assets/Images/MenuIcon.png";
// Libaries //
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img className={classes.imageContainer} src={MenuImage}></img>
      <div className={classes.navLeftSide}>
        <Link to="market" spy={true} smooth={true} offset={-1} duration={500}>
          <div className={classes.navChild}>Market Place</div>
        </Link>
        <Link to="create" spy={true} smooth={true} offset={50} duration={500}>
          <div className={classes.navChild}>Artist</div>
        </Link>
        <Link to="popular" spy={true} smooth={true} offset={-2} duration={500}>
        <div className={classes.navChild}>Community</div>
        </Link>
        <Link to="popular" spy={true} smooth={true} offset={-2} duration={500}>
          <div className={classes.navChild}>Collections</div>
        </Link>
      </div>
      <Link to="subscribe" spy={true} smooth={true} offset={50} duration={500}>
      <button className={classes.btn}>Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
