import React from 'react';
import './App.css';
import NewsCardDeck from './NewsCardDeck/NewsCardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NewsRoomTitle from './NewsRoomTitle/NewsRoomTitle';

function App() {

  return (
    <div className="App">
      <Container>  
        <Jumbotron>
          <Container>
            <NewsRoomTitle companyTitle="Dengun"  />
          </Container>
        </Jumbotron>
        <Row>
          <Col>
            <NewsCardDeck />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
