import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       <Route path="/blog/:id" element={<BlogDetails/>}/>

      </Routes>
    </>
  );
}

export default App;
