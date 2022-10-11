import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
	const items = useSelector((state) => [
		selectFeaturedCampsite(state),
		selectFeaturedPromotion(state),
		selectFeaturedPartner(state),
	]);

	return (
		<Row>
			{items.map((item, idx) => {
				//React wants us to use a key with map, so can use current index to generate that dynamically
				return (
					item && (
						<Col md className='m-1' key={idx}>
							<AnimatedDisplayCard item={item} />
						</Col>
					)
				);
			})}
		</Row>
	);
};

export default DisplayList;
