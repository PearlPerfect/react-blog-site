import Sidebar from "../../components/sidebar/sidebar";
import About from "../../components/about/about";
import "./about_page.css";

export default function AboutPage() {
  return (
    <div className="single">
      <About />
      <Sidebar />
    </div>
  );
}