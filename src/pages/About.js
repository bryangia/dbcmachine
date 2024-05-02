import front_sign from "../images/office/front_sign.jpg"
import "./About.css"

export const AboutContent = () => {
    return (
      <div className="about-container">
        
        <img className="AboutImg" src={front_sign} alt="sign"/>
        <h1>About Us</h1>
        <p>DBC Machine INC has been serving the Houston area since 2015. We have served many clients including NOV, Hunting, etc. Quality is our top priority and we strive to deliver our best work in a timely manner.</p>
        <h2>Quality Policy</h2>
        <p>
          DBC Machine, INC is commited to providing quality products that meet and exceed customers' expectations, satisfaction and continuing to improve the effectiveness of the quality management system in compliance with ISO-9001:2015
        </p>
      </div>
    );
  };