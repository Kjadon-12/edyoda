
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../src/assest/BackGround.png'

import Navbarr from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';





function App() {
  return (
    <>
      <Navbarr/>
      <div style={{backgroundImage : `url(${background})`, height: "inherit" , paddingBottom:"45px"}}>
      <Container>
      <Row>
        <Col  lg={8} sm={12} md={12}  ><LeftSide/></Col>
        <Col  lg={4} sm={12} md={12}  ><RightSide/></Col>
      </Row>
      </Container>
      </div>
     
    </>
  );
}

export default App;
