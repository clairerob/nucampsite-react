import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
	const items = [
		selectFeaturedCampsite(),
		selectFeaturedPromotion(),
		selectFeaturedPartner(),
	];
	//now the if that data ever changes in either data file, we don't have to change these files, we'll still have access to the current data
	return (
		<Row>
			{items.map((item, idx) => {
				//React wants us to use a key with map, so use current index to generate that dynamically
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
