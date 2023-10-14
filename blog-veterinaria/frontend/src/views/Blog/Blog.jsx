import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";

import axios from "axios";

import "./Blog.css";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/dogs?populate=*").then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="grid-container">
        {posts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};
