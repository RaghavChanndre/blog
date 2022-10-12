import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Header from "./components/header/Header";
import Post from "./components/post/Post";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import SinglePost from "./components/singlePost/SinglePost";

import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/blogs" exact element={<Login/>}/>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/register" exact element={<Register/>}></Route>
          <Route path="/settings" exact element={<Settings/>}></Route>
          <Route path="/single" exact element={<Single/>}></Route>
          <Route path="/singlepost" exact element={<SinglePost/>}></Route>
          <Route path="/write" exact element={<Write/>}></Route>
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;