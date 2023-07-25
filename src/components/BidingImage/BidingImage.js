// CSS //
import classes from "./BidingImage.module.css";

// Image //
import NFTImage from "../../assets/Images/NFT1.avif";
import svgImage from "../../assets/Images/download.svg";

const BidingImage = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.ImageContainer}>
        <img className={classes.ImageTag} src={NFTImage} alt="NFT Image" />
        <img className={classes.svgTag} src={svgImage} />
        <div className={classes.bidContainer}>
          <div className={classes.topContainer}>
            <div className={classes.bidCard}>
              <span className={classes.firstSpan}>BID ENDs IN</span>
              <span>05:45:12:05</span>
            </div>
            <div className={classes.bidCard}>
              <span className={classes.firstSpan}>CURRENT BID</span>
              <span>0.24 ETH</span>
            </div>
          </div>
          <div className={classes.btnCont}>
            <button className={classes.bidBtn}>Place a Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidingImage;
