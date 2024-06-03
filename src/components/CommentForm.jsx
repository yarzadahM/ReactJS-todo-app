import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      addComment({ name, comment });
      setName("");
      setComment("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <input
        type='text'
        className='w-full p-2 mb-2 rounded bg-gray-800 text-white placeholder-gray-500'
        placeholder='Your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className='w-full p-2 mb-2  rounded  bg-gray-800 text-white placeholder-gray-500'
        placeholder='Write a comment...'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded mb-5'
      >
        Post comment
      </button>
    </form>
  );
};

export default CommentForm;
