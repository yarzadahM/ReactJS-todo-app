import React, { useState } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const CommentList = ({ comments, deleteComment, editComment }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();

    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    return isToday ? "Today" : date.toLocaleDateString();
  };

  const handleEditClick = (index, comment) => {
    setIsEditing(index);
    setEditedComment(comment.comment);
  };

  const handleEditChange = (e) => {
    setEditedComment(e.target.value);
  };

  const handleEditSave = (index) => {
    const updateComment = { ...comments[index], comment: editedComment };
    editComment(index, updateComment);
    setIsEditing(null);
    setEditedComment("");
  };
  // Sort comments based on the date (newest first)
  const sortedComments = comments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className='border-t border-gray-700 pt-4'>
      {comments.length === 0 ? (
        <div className=' font-bold text-center text-red-400'>
          There is no comment yet.
        </div>
      ) : (
        sortedComments.map((comment, index) => (
          <div
            className='mb-2 p-2 border-b border-gray-600 flex flex-col items-start'
            key={index}
          >
            <div className='flex flex-row '>
              <div className='text-yellow-500 text-xl mr-2'>😊</div>
              <div className='text-white font-bold'>
                {comment.name}
                <span className='text-gray-400 font-semibold ml-5'>
                  {formatDate(comment.date)}
                </span>
              </div>
            </div>

            {isEditing === index ? (
              <div className='w-full mt-3'>
                <input
                  className='w-full p-2 mb-2 rounded bg-gray-800 text-white placeholder-gray-500'
                  value={editedComment}
                  onChange={handleEditChange}
                />
                <button
                  onClick={() => handleEditSave(index)}
                  className='mt-2 px-4 py-2 bg-blue-600 text-white rounded'
                >
                  Save
                </button>
              </div>
            ) : (
              <div className='text-gray-400 mt-3'>{comment.comment}</div>
            )}

            <div className='flex space-x-4 mt-4'>
              <button
                onClick={() => deleteComment(index)}
                className='flex flex-row text-gray-400 font-bold justify-center items-center'
              >
                <RiDeleteBin6Line />
                <span className='ml-4'>Remove</span>
              </button>
              <button
                onClick={() => handleEditClick(index, comment)}
                className='flex flex-row text-gray-400 font-bold justify-center items-center'
              >
                <RiEdit2Line />
                <span className='ml-4'>Edit</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
