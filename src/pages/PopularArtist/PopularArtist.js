// CSS //
import classes from "./PopularArtist.module.css";
// Custom //
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { Images } from "../../data/NFTCard";

const PopularArtist = () => {
  return (
    <div className={classes.MainContainer} id="popular">
      <div className={classes.Heading}>
        <div>
          <h1>
            Popular <span>Artist</span>
          </h1>
          <h1>Of This Week</h1>
        </div>
        <button className={classes.SellAllBtn}>See All</button>
      </div>
      <div className={classes.ImageContainer}>
        {Images.map((item) => (
          <ImageContainer
            key={item.id}
            AvatarPNG={item.AvatarPNG}
            ArtistName={item.ArtistName}
            ImageURL={item.ImageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularArtist;
