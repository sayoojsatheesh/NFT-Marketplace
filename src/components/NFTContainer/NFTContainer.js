import classes from "./NFTContainer.module.css";
// Image //
import clock from '../../assets/Images/clock.png'

const NFTContainer = (props) => {
  return (
    <div className={classes.nftContainer}>
      <img
        className={classes.imgTag}
        src={props.imgURL}
      />
      <div className={classes.nftContainerFooter}>
        <div className={classes.subFooter}><span>{props.heading}</span><span>{props.price}</span></div>
        <div className={classes.subFooter}><span className={classes.expiryTime}><img src={clock} /><span>{props.time}</span></span><button >Place a Bid</button></div>
      </div>
    </div>
  );
};

export default NFTContainer;
