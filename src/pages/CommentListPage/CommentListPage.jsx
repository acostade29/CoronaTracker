import React, {Component} from 'react';
import './CommentListPage.css';
import CommentCard from '../../components/CommentCard/CommentCard';
import * as commentAPI from '../../services/comment-api'


class CommentListPage extends Component {
    state = {
        comments: []
    }

    async componentDidMount() {
        const comments = await commentAPI.getAll();
        this.setState({comments});
    }

    handleDeleteCat = async (id, idx) => {
        await commentAPI.deleteOne(idx);
        this.setState(state => ({
            comments: state.comments.filter(c => c._id !== id)
        }), () => this.props.history.push('/comments'));
    }

    render() {
        return (
            <>
                <h1>List of comments</h1>
                <div className='CommentListPage-grid'>
                    {this.state.comments.map((comment, idx) =>
                        <CommentCard
                            key={comment._id}
                            idx={idx}
                            comment={comment}
                            user={this.props.user}
                            handleDeleteCat={this.handleDeleteCat}
                        />
                    )}
                </div>
            </>
        )
    }
}
export default CommentListPage;