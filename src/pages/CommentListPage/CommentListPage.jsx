import React from 'react';
import '../CommentListPage/CommentListPage.css';
import CommentCard from '../../components/CommentsCard/CommentsCard';

function CommentListPage(props) {
  return (
    <>
      <h1>Comment List</h1>
      <div className='CommentListPage-grid'>
        {props.comments.map(comment =>
            <CommentCard
                key={comment._id}
                puppy={comment}
                user={props.user}
                handleDeletePuppy={props.handleDeleteComment}
            />
        )}
      </div>
    </>
  );
}
export default CommentListPage;