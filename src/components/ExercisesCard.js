
import { Col, Card, Button} from "react-bootstrap";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function ExercisesCard({item}) {
  return (
    <Col xs={12} md={6} lg>
      <Card className="m-4 ex-card"  >
        <Card.Img variant="top" src={require(`../static/sprites/${item.eng.toLowerCase()}.jpg`)}></Card.Img>
        <Card.Title className="my-3 text-center">{item.rus}</Card.Title>
        <div className="position-absolute before-hover-card"><Link className=" btn btn-primary" to={`/exercise/${item.eng}`}>
        Поехали</Link></div>
      </Card>
    </Col>
  );
}

ExercisesCard.propTypes = {
  item:PropTypes.object,
}