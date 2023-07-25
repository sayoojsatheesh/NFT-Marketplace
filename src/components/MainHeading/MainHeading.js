import classes from "./MainHeading.module.css";

const MainHeading = () => {
  return (
    <div className={classes.mainContainer}>
      <h1>
        Discover and Collect The Best NFTs <span>Digital ART</span>.
      </h1>
      <p>
        Get started with the best way to buy and sell digital art and NFTs.Start
        exploring the wide world of digital art and NFTs with full cofidence.
      </p>
      <div className={classes.btnContanier}>
        <button className={classes.exploreBtn}>Explore Now</button>
        <button>Learn More</button>
      </div>
      <div className={classes.mainHeading}>
        <div className={classes.subHeading}>
          <div>6.7<span className={classes.kColor}>K</span></div>
          <div className={classes.bottomHeading}>Art Work</div>  
        </div>
        <div className={classes.subHeading}>
          <div>98.3<span className={classes.kColor}>K</span></div>   
          <div className={classes.bottomHeading}>Artist</div>  
        </div>
        <div className={classes.subHeading}>
          <div>33.3<span className={classes.kColor}>K</span></div>  
          <div className={classes.bottomHeading}>Collections</div>
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
