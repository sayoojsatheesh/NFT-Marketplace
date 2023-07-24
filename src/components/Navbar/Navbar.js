// CSS //
import classes from './Navbar.module.css'

// Image //
import MenuImage from '../../assets/Images/MenuIcon.png'

const Navbar=()=>{
    return(
        <div className={classes.nav}>
            <img className={classes.imageContainer} src={MenuImage}></img>
            <div className={classes.navLeftSide}>
                <div className={classes.navChild}>Market Place</div>
                <div className={classes.navChild}>Artist</div>
                <div className={classes.navChild}>Community</div>
                <div className={classes.navChild}>Collections</div>
            </div>
            <button className={classes.btn}>Contact</button>
        </div>
    )

}

export default Navbar;