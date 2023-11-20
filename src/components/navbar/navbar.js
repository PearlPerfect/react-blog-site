import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const user = false;
  return (
    <div className="nav">
      <div className="navLeft">
      <a href="https://www.facebook.com/talent.paul.18/" target="_blank" rel="noopener noreferrer"><i className="navIcon fab fa-facebook-square"></i></a>  
        <a href="https://github.com/PearlPerfect" target="_blank" rel="noopener noreferrer"><i className="navIcon fab fa-github-square"></i></a>
       <a href="https://www.instagram.com/_pearlblaze_/" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-instagram-square"></i> </a>
       <a href="https://twitter.com/Tech_luver" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-twitter-square"></i> </a>
       <a href="https://www.pinterest.com/zenithyonex4life/" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-pinterest-square"></i></a>
              
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/" style={{textDecoration: 'none', color: "#312e81"}}>
              HOME
            </Link>
          </li>
          <li className="navListItem">
          <Link className="link" to="/about" style={{textDecoration: 'none', color: "#312e81"}}>
             ABOUT
            </Link>
            </li>
          <li className="navListItem">
          <Link className="link" to="/contact" style={{textDecoration: 'none', color: "#312e81"}}>
            CONTACT
            </Link></li>
          <li className="navListItem">
            <Link className="link" to="/write" style={{textDecoration: 'none', color: "#312e81"}}>
             POST
            </Link>
          </li>
          {user && <li className="navListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link className="link" to="/settings" style={{textDecoration: 'none', color: "#312e81"}}>
            <img
              className="navImg"
              src="https://images.pexels.com/photos/1557355/pexels-photo-1557355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
              alt=""
            />
           </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login" style={{textDecoration: 'none',  color: "#312e81"}}>
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register" style={{textDecoration: 'none', color: "#312e81"}}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}