import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    //possible to define a function inline for useSelector rather than externally
    //depends on pref and situation

    if (isLoading) {
        return (
            <Row>
                <Loading/>
            </Row>
        )
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }
    
    return (
        <Row className='ms-auto'>
            {campsites.map(campsite => {
                return (
                <Col md='5' className='m-4' key={campsite.id}>
                    <CampsiteCard campsite={campsite}>
                    </CampsiteCard>
                </Col>
                );
            })}
        </Row>
    )
}

export default CampsitesList;