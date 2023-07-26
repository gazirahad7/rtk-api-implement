import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const posts = useSelector((state) => state.app.posts);

  const post = posts.filter((ele) => ele.id === id);
  console.log("post", post);

  return (
    <div className="modalBackground">
      <div className="modalContainer position-relative">
        <div className="p-2 position-absolute top-0 end-0">
          <button
            className="btn btn-danger btn-sm "
            onClick={() => setShowPopup(false)}
          >
            Close
          </button>
        </div>
        <h2>{post[0].title}</h2>
        <h3>{post[0].content}</h3>
      </div>
    </div>
  );
};

export default CustomModal;
