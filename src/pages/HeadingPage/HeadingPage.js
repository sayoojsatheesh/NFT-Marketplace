// CSS //
import classes from "./HeadingPage.module.css";

// Custom //
import MainHeading from "../../components/MainHeading/MainHeading";

const HeadingPage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainHeading />
    </div>
  );
};

export default HeadingPage;
