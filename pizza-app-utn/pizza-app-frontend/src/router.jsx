import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Users } from "./components/Users/Users";
import { List } from "./components/List/List";
import { ViewNotFound } from "./components/ViewNotFound/ViewNotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:slug" element={<List />} />
        <Route path="/*" element={<ViewNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
