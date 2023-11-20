import "./homepage.css";
import { useLocation } from "react-router";
import Header from "../../components/header/header"; 
import Sidebar from "../../components/sidebar/sidebar";
import Posts from "../../components/posts/post";
// import Posts from "../../components/posts/Posts";



export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
   <Header/>
      <div className="home">
        <Posts/>
      <Sidebar/>
      </div>
    </>
  );
}