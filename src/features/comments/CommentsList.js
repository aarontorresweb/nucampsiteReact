import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from '../comments/CommentForm';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    // console.log(comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);
    
    if (isLoading) {
        return (
            <Loading />
        )
    } else if (errMsg) {
        return(
            <Error errMsg={errMsg} />
        )
    } else if (comments && comments.length > 0) {
        return (
            <Col md ='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm campsiteId = { campsiteId }/>
            </Col> 
        )
    } else 
    return (
        <Col md='5' className='m-1'>
            There are no comments yet! 
        </Col>
    )
}

export default CommentsList;