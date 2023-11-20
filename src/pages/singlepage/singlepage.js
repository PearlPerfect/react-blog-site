import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/eachpost";
import "./singlepage.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}