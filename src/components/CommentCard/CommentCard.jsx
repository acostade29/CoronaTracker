import React from 'react';
import {Link} from 'react-router-dom';
import userService from '../../services/userService';

function CommentCard({comment, handleDeleteComment, user }) {
    return (
        
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{comment.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Comment</dt>
                    <dd>{comment.name}</dd>
                    
                    
                </dl>
            </div>
            <div className='panel-footer'>
                
                {comment.user === user._id ?
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteComment(comment._id)}
                >
                    DELETE
                </button>
                :
                <></>
                }
            </div>
        </div>
    )
}
export default CommentCard;