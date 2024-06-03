import React, { useEffect, useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
const App = () => {
  const [comments, setComments] = useState([]);

 
  const addComment = (comment) => {
    const newComment = {
      ...comment,
      date: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);

    setComments(updatedComments);
  };

  const editComment = (index, updatedComment) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, ...updatedComment } : comment
    );
    setComments(updatedComments);
  };


  return (
    <div className='container mx-auto p-4  min-h-screen  text-white'>
      <div className='max-w-xl mx-auto p-6 bg-gray-900 rounded-lg mt-10'>
        <h1 className='text-xl mb-4'>
          How can we ensure AI systems remain aligned with human values and
          ethics?
        </h1>
        <div className='text-gray-400 mb-4'>Discussion ({comments.length})</div>

        <CommentForm addComment={addComment} />
        <CommentList
          comments={comments}
          deleteComment={deleteComment}
          editComment={editComment}
        />
      </div>
    </div>
  );
};

export default App;
