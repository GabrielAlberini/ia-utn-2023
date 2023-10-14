import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
import { Blog } from "../views/Blog/Blog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
