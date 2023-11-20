import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";
import Login from "../src/pages/login/login"
import Register from "../src/pages/register/register"
import Settings from "../src/pages/settings/settings"
import AddPost from "../src/pages/addpost/addpost";
import Single from "./pages/singlepage/singlepage";
import AboutPage from "./pages/about/about_page";
import ContactUs from "./pages/contact/contactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route  path="/posts" element={<Homepage />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/contact" element={<ContactUs />} />
        <Route  path="/register" element = {currentUser ? <Homepage /> : <Register />} />
        <Route  path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id"  element={<Single />}/>
        <Route path="/write" element = {currentUser ? <AddPost /> : <Login />} />
        <Route path="/settings"element=  {currentUser ? <Settings /> : <Login />}/> 
      </Routes>


    </Router>
  );
}

export default App;
