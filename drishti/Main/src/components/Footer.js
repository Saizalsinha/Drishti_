import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot">
      <ul>
        <li className="copyright">Copyright @2022 Saizal Sinha</li>
        <li>
          <Link to="/Vision">Vision</Link>
        </li>
        <li>
          <Link to="/Read-Text">Read Text</Link>
        </li>
        <li>
          <Link to="/About-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
