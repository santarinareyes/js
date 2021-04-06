/* eslint-disable no-unused-vars */
import "./App.css";
import Post from "./components/Post";

const post = {
  likes: 10,
  description: "Just a random image",
  image: {
    url: "/uploads/thumbnail_Hero_Mobile_10a3fd150c.png",
  },
};

function App() {
  return (
    <div className="App">
      <Post
        likes={post.likes}
        description={post.description}
        url={post.image && post.image.url}
      />
    </div>
  );
}

export default App;
