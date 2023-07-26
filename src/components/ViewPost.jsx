import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, showPost } from "../features/postSlice";
import CustomModal from "./CustomModal";

const ViewPost = () => {
  const dispatch = useDispatch();

  const { posts, loading, error, searchData } = useSelector(
    (state) => state.app
  );
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  console.log({ posts });

  useEffect(() => {
    dispatch(showPost());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error} </h3>;
  }

  return (
    <div className="d-flex flex-wrap justify-content-between  ">
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      {posts &&
        posts
          .filter((el) => {
            if (searchData.length === 0) {
              return el;
            } else {
              return el.title.toLowerCase().includes(searchData.toLowerCase());
            }
          })

          .map((el, index) => (
            <div
              key={index}
              className="card my-4 container"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title"> {el.title} </h5>
                <p className="card-text">{el.content}</p>
              </div>

              <div className="d-flex justify-content-center gap-4 mb-4">
                <button
                  className="btn  btn-sm  btn-primary"
                  onClick={() => [setId(el.id), setShowPopup(true)]}
                >
                  View{" "}
                </button>

                <Link to={`/edit/${el.id}`}>
                  <button className="btn  btn-sm btn-info">Update </button>
                </Link>
                <button
                  className="btn  btn-sm btn-danger"
                  onClick={() => dispatch(deletePost(el.id))}
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ViewPost;
