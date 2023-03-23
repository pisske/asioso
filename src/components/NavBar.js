import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavBar.js";
import { links } from "../utils/constants";
import { BsFillTelephoneFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            {" "}
            <h1>Asioso</h1>
          </Link>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <a href='#footer'>
              {" "}
              <BsFillTelephoneFill />
              +3816911145
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default NavBar;
