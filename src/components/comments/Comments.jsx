import "./comments.scss";
import user from "../../assets/images/user2.jpg";
import user2 from "../../assets/images/user3.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, sequi.",
      name: "John Doe",
      userId: 1,
      profilePic: user,
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione amet laudantium quidem quos nostrum.",
      name: "Jane Doe",
      userId: 2,
      profilePic: user2,
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
