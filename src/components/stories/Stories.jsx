import "./stories.scss";
import user2 from "../../assets/images/user4.jpg";
import user3 from "../../assets/images/user5.jpg";
import user4 from "../../assets/images/user6.jpg";
import user5 from "../../assets/images/user7.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //temporary
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: user2,
    },
    {
      id: 2,
      name: "Jane Doe",
      img: user3,
    },
    {
      id: 3,
      name: "John Smith",
      img: user4,
    },
    {
      id: 4,
      name: "Jane Smith",
      img: user5,
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="image" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="image" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
