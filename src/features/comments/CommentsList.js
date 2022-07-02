import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from '../comments/CommentForm';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    console.log(comments);
    
    if (comments && comments.length > 0) {
        return (
            <Col md ='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm campsiteId = { campsiteId }/>
            </Col> 
        )
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments yet! 
        </Col>
    )
}

export default CommentsList;