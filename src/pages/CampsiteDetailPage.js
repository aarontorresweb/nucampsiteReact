import { useSelector } from 'react-redux';
import { Container, Row } from'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/CampsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    console.log(`campsiteId is ${campsiteId}`)
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('Campsite ID from CampsiteDetailPage.js:', campsite)

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
};

export default CampsiteDetailPage;
