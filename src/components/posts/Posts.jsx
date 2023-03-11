import "./posts.scss";
import user from "../../assets/images/user2.jpg";
import user2 from "../../assets/images/user3.jpg";
import post from "../../assets/images/post/post.jpeg";
import Post from "../post/Post";

const Posts = () => {
  //temporary
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: user,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: post,
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic: user2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. grrgrgrgrgrg klsadnmreslkfcjos spodfkvwe;l op sldkswoekfopefk wolekf",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
