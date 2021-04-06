/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */

const API_URL = "http://localhost:1337";
const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({ description, likes, url }) => {
  return (
    <div className="Post">
      <img className="post__image" src={formatImageUrl(url)}></img>
      <div className="post__text--content">
        <span className="post__likes">Likes: {likes}</span>
        <h4 className="post__description">{description}</h4>
      </div>
    </div>
  );
};
