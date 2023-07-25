// Custom //
import NFTContainer from "../../components/NFTContainer/NFTContainer";
import NFTData from "../../data/NFTCard";
// CSS //
import classes from "./MarketPage.module.css";

const MarketPage = () => {
  return (
    <div className={classes.marketPageContainer}>
      <div className={classes.MarketPageHeading}>
        <div className={classes.Headings}>
          <span>Amazing and Super</span>
          <span>Unqiue Art of this Week</span>
        </div>
        <button className={classes.seeAllBtn}>SEE ALL</button>
      </div>
      <div className={classes.Collections}>
        {NFTData.map((item) => (
          <NFTContainer
            key={item.id}
            imgURL={item.imgURL}
            heading={item.heading}
            price={item.price}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
