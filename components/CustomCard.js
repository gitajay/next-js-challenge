"use client"
import Card from 'react-bootstrap/Card';

function CustomCard({ job }) {
  const { id, title, company, about } = job || {};
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>{about}</Card.Text>
        <Card.Link href={`/jobs/${id}`}>View details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;