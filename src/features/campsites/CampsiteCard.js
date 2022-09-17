import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg width='100%'
            src={props.campsite.image}
            alt={props.campsite.name} />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default CampsiteCard;

//RENDERS the card component
//The concept of "rendering" a component is more or less similar to the concept of invoking/calling a function, versus defining a component/function. It is when the component is actually used to create the application in the browser by putting its name inside < > tags, versus being defined to be used at a later time.