import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">...Bringing to you the best </span>
        <span className="headerTitleLg">PEARL'SBLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1521455/pexels-photo-1521455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}