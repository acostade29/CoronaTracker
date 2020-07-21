import React from 'react';
import '../CommentListPage/CommentListPage.css';
import CommentCard from '../../components/CommentCard/CommentCard';

function CommentListPage(props) {
  return (
    <>
      <h1>Comment List</h1>
      <div className='CommentListPage-grid'>
        {props.comments.map(comment =>
            <CommentCard
                key={comment._id}
                comment={comment}
                handleDeleteComment={props.handleDeleteComment}
                user={props.user}

            />
        )}
      </div>
    </>
  );
}
export default CommentListPage;