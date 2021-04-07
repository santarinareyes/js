/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Post from "../components/Post";
import "../App.css";

const SinglePost = ({ match, history }) => {
  const url = "http://localhost:1337";
  const { id } = match.params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState("");

  const fetchPost = async () => {
    const response = await fetch(`${url}/posts/${id}`);
    const data = await response.json();
    setPost(data);
    setDescription(data.description);
    setLoading(false);
  };

  const handleDelete = async () => {
    const response = await fetch(`${url}/posts/${id}`, { method: "DELETE" });
    const data = response.json();
    history.push("/");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(handleEditSubmit);

    const response = await fetch(`${url}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
      }),
    });

    const data = await response.json();
    fetchPost();
    console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {post.id && (
            <>
              <Post
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}
              />
              <button className="main__nav" onClick={handleDelete}>
                Delete
              </button>
              <button className="main__nav" onClick={() => setEdit(true)}>
                Edit
              </button>
              {edit && (
                <form onSubmit={handleEditSubmit}>
                  <input
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="New description"
                  ></input>
                  <button>Confirm</button>
                </form>
              )}
            </>
          )}
          {!post.id && <p>404 - not found</p>}
        </>
      )}
    </div>
  );
};

export default SinglePost;
