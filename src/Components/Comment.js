import React, { useState } from "react";


const Comments = ({ comments, addComment }) => {
    const [newComment, setNewComment] = useState("");
    const [image, setImage] = useState(null);

    const handleCommentSubmit = () => {
        if (newComment.trim() || image) {
          addComment({ text: newComment, image });
          setNewComment("");
          setImage(null);
        }
      };
    
      return (
        <div>
          <h1>Comments</h1>
          <div className="comments-list">
            {comments.map((comment, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
            <p>{comment.text}</p>
            {comment.image && (
              <img
                src={URL.createObjectURL(comment.image)}
                alt="Uploaded"
                style={{ width: "100px" }}
              />
            )}
        </div>
         ))}

       </div>
       <textarea
        placeholder="Add your comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleCommentSubmit}>Submit</button>
      </div>  
    );          
 };

export default Comments;