import "./addpost.css";

export default function AddPost() {
  return (
    <div className="addPost">
      <img
        className="addPostImg"
        src="https://images.pexels.com/photos/6485428/pexels-photo-6485428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="addPostForm">
        <div className="addPostFormGroup">
          <label htmlFor="fileInput">
            <i className="addPostIcon fas fa-image"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="addPostInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="addPostFormGroup">
          <textarea
            className="addPostInput addPostText"
            placeholder="Add your post..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="addPostSubmit" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
}