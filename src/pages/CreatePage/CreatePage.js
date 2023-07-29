// CSS //
import classes from "./CreatePage.module.css";

// Images //
import Naruto1 from "../../assets/Images/naruto.jpg";
import Naruto2 from "../../assets/Images/naruto2.jpg";

const CreatePage = () => {
  return (
    <div className={classes.CreatePageContainer} id="create">
      <div className={classes.LeftSide}>
        <div className={classes.LeftSideInner}>
          <h1>Create And Sell</h1>
          <h1>
            Your <span className={classes.extra}>Best NFTs</span>
          </h1>
          <p>
            Start Exploring the world of digital art today with full confidence.
          </p>
          <div>
            <button className={classes.CreateBtn}>Create Now</button>
            <span className={classes.LearnSpan}>Learn More</span>
          </div>
        </div>
      </div>
      <div className={classes.RightSide}>
        <div className={classes.RightSideInner}>
          <img className={classes.img1} src={Naruto1} />
          <img  className={classes.img2} src={Naruto2} />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
