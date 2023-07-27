import classes from "./Subscrib.module.css";

const SubscribePage = () => {
  return (
    <div className={classes.SubscribContainer}>
      <div className={classes.LeftContainer}>
        <div className={classes.LeftSubContainer}>
          <img className={classes.ImageRight} src="https://plus.unsplash.com/premium_photo-1682124669726-6721b5a1932c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=885&q=80"/>
          <img className={classes.ImageLeft} src="https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
        </div>
      </div>
      <div className={classes.RightContainer}>
        <div className={classes.RightSubContainer}>
          <div>
            <h1>
              Subscribe And <span>get our</span>
            </h1>
            <h1>
              <span>Updates</span> Every Weak
            </h1>
          </div>
          <p>
            We have blog related to NFTs you can subscribe to get updates and
            thougths about latest news and articles there.
          </p>
          <div className={classes.SubscribeBtn}>
            <input
              placeholder="Enter your E-Mail"
              className={classes.Input}
              type="text"
            ></input>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
