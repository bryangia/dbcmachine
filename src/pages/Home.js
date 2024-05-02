import "./Home.css";
import logo from "../images/DBC.png";

export const HomeContent = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{flex: 1}}>
          <p className="HomeText">DBC Machine INC</p>
          <p className="HomeText">6040 Brittmore Rd Suite H</p>
          <p className="HomeText">Houston TX, 77041</p>
        </div>
        <img className='CompanyLogo' src={logo}></img>
      </div>
    </>
  );
};
