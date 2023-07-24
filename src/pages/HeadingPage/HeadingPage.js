// CSS //
import classes from "./HeadingPage.module.css";

// Custom //
import MainHeading from "../../components/MainHeading/MainHeading";
import BidingImage from "../../components/BidingImage/BidingImage";

const HeadingPage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainHeading />
      <BidingImage />
    </div>
  );
};

export default HeadingPage;
