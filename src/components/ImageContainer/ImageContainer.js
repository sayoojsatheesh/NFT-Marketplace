// CSS //
import classes from "./ImageContainer.module.css";
// Custom //
import otaku from '../../assets/Images/otaku.png'
const ImageContainer = (props) => {
  return (
    <div className={classes.ImageContainer}>
      <img src={props.ImageURL} className={classes.ImageTag} />
      <div className={classes.ImageFooter}>
        <img className={classes.AvatarContainer} src={otaku} />
        <div className={classes.TextContainer}>
          <span className={classes.span1}>Owner</span>
          <span className={classes.span2}>{props.ArtistName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
