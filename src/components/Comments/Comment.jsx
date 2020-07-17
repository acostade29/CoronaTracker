import React from 'react';
import {Link} from 'react-router-dom';

function CommentCard({comment, handleDeleteComment}) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{comment.name}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>text</dt>
                    <dd>{comment.text}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link
                    className='btn btn-xs btn-warning'
                    to={{
                            pathname: '/edit',
                            state: {comment}
                    }}
                >
                EDIT
                </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteComment(comment._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default CommentCard;