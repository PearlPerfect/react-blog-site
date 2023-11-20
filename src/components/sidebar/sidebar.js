import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT Us</span>
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life" style={{textDecoration: 'none', color: "#312e81"}}>
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music" style={{textDecoration: 'none', color: "#312e81"}}>
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport" style={{textDecoration: 'none', color: "#312e81"}}>
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style" style={{textDecoration: 'none', color: "#312e81"}}>
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech" style={{textDecoration: 'none', color: "#312e81"}}>
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema" style={{textDecoration: 'none', color: "#312e81"}}>
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/talent.paul.18/" target="_blank" rel="noopener noreferrer"><i className="navIcon fab fa-facebook-square"></i></a>  
        <a href="https://github.com/PearlPerfect" target="_blank" rel="noopener noreferrer"><i className="navIcon fab fa-github-square"></i></a>
       <a href="https://www.instagram.com/_pearlblaze_/" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-instagram-square"></i> </a>
       <a href="https://twitter.com/Tech_luver" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-twitter-square"></i> </a>
       <a href="https://www.pinterest.com/zenithyonex4life/" target="_blank" rel="noopener noreferrer"> <i className="navIcon fab fa-pinterest-square"></i></a>

        </div>
      </div>
    </div>
  );
}