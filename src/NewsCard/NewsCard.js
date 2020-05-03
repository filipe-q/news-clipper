import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const NewsCard = ( props ) => {
    return (
        <Col sm={4} style={{marginTop:'30px'}}>
            <Card>
                <Card.Img variant="top" src={props.imageURL} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text><span role="img" aria-label="Calendar Emoji">🗓</span>{props.date}</Card.Text>
                    <Button variant="primary" size="sm" href={props.sourceURL} target="_blank" >{props.source} <span role="img" aria-label="World Emoji">🌏</span></Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated {props.editionDate} by {props.author}</small>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default NewsCard;