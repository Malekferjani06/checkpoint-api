import React from 'react';
import {Card,Button} from'react-bootstrap'

function CardCity({city,description,img}) {
  return <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{city}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary">Go to {city}</Button>
  </Card.Body>
</Card>
  </div>;
}

export default CardCity;
