import React, { Component } from 'react';
import { Card, CardDeck, Row, ButtonGroup, ToggleButton, Container } from 'react-bootstrap';
import share from '../../../images/share.png';
import add from '../../../images/add.png';
import save from '../../../images/save.png';

class Features extends Component {
    render() {
        return (
            <Container className = "landing-features">
                <Row className = "landing-features-header justify-content-center">
                    <h1>
                        Key Features
                    </h1>
                </Row>
                <CardDeck>
                    <Card>
                        <div className="card-image-container">
                            <Card.Img variant="top" src={add} />
                        </div>
                        <Card.Body>
                            <Card.Title>Create your own custom boards</Card.Title>
                            <Card.Text>
                                Add and edit widgets, draw on the canvas, and move anything around as you wish
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <div className="card-image-container">
                            <Card.Img variant="top" src={save} />
                        </div>
                        <Card.Body>
                            <Card.Title>Sign in to save your boards</Card.Title>
                            <Card.Text>
                                When you log in with your Google account, all your board data can be easily saved and accessed.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <div className="card-image-container">
                            <Card.Img variant="top" src={share} />
                        </div>
                        <Card.Body>
                            <Card.Title>Share your board</Card.Title>
                            <Card.Text>
                                Send your board to your friends with its unique link. Manage your permissions to ensure that it is only visible to the intended audience
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                    </Card>
                </CardDeck>
            </Container>
           
        );
    }
}

export default Features;