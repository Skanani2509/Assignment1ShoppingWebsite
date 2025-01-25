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
        </div>
            )
          
    };
    


export default Comments;