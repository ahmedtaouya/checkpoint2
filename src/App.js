import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from "./component/Img";
import Description from "./component/Description";
import Name from "./component/Name";
import Price from "./component/Price";
function App() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Img />

        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
           <Description/>
          </Card.Text>
    
          <Button variant="primary"><Price /></Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
