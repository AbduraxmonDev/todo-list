import Image from "../../assets/images/image-1.png";
import Icon from "../../assets/icons/menu-icon.png";
import CheckedIcon from "../../assets/icons/check.png";

function GetStarted() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <h1 className="banner__title">
            <span>t</span>
            <span>o</span>
            <span>d</span>
            <span>o</span>
          </h1>
          <p className="banner__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis
            animi corporis porro ad reprehenderit.
          </p>
          <a href="/" className="banner__link">
            Get started
          </a>
          <img src={Image} alt="images of 3 girls" className="banner__image" />
          <div className="banner__card">
            <div className="card__header">
              <h5 className="card__title">Download todo app</h5>
              <img src={Icon} alt="" className="card__menu" />
            </div>
            <div className="card__body">
              <p className="card__text">the first step for better life</p>
            </div>
            <div className="card__footer">
              <div className="card__type">
                <span className="card__circle"></span>
                <span className="card__circle"></span>
              </div>
              <div className="card__checkbox">
                <img
                  src={CheckedIcon}
                  alt=""
                  className="checkbox__image"
                  style={{ width: "12px" }}
                />
                <p className="checkbox__text">Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
