import { CAMPSITES } from '../../app/shared/CAMPSITES'
import { Col, Row } from 'reactstrap'
import CampsiteCard from "./CampsiteCard"
import { selectAllCampsites } from './CampsitesSlice';

const CampsitesList = () => {
    const campsites = selectAllCampsites();

    return(
        <Row className="ms-auto">
            {
                CAMPSITES.map(campsite => (
                    <Col
                        md='5' 
                        className='m-4' 
                        key={campsite.id}
                    >
                    <CampsiteCard campsite={campsite}/>
                    </Col>
                ))
            }
        </Row>
    )
}

export default CampsitesList;