import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export function BasicExample() {
  return (
    <Card style={{ width: '18rem', backgroundColor: '#1a1a1a' }} className='text-white border-0 shadow-lg rounded-lg p-3 m-3'>
      <Card.Img variant="top" src="" className="rounded-top" />
      <Card.Body>
        <Card.Title className="text-white">Card Title</Card.Title>
        <Card.Text className='text-gray-50'>
          description.
        </Card.Text>
        <Button style={{ backgroundColor: 'black', borderColor: '#ff9800', padding: '10px 20px' }} className='rounded-pill hover-bg-light'>
          Explore More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
