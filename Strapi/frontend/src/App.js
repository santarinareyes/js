/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";

// const mockPosts = [
//   {
//     likes: 10,
//     description: "Just a random image",
//     image: {
//       url: "/uploads/thumbnail_Hero_Mobile_10a3fd150c.png",
//     },
//   },
//   {
//     likes: 12,
//     description: "Just a random image again",
//     image: {
//       url: "/uploads/thumbnail_Hero_Mobile_10a3fd150c.png",
//     },
//   },
// ];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:1337/posts");
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default App;
