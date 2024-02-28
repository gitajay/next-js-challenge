"use client"
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "@/lib/features/userSlice.js";

export default function({ job }) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { title, company, about, address } = job || {};

  const handleApply = () => {
    if (!userData) {
      dispatch(setOpen(true));
    }
  }

  return (
    <Card style={{ width: '56rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
        <Card.Text>{about}</Card.Text>
        <Card.Text>{userData ? address : "XXXXX"}</Card.Text>
        <Card.Link href={`/jobs`}>Back to Jobs listings</Card.Link>
        |
        <Card.Link as="button" variant="primary" onClick={handleApply}>
          Apply
        </Card.Link>
      </Card.Body>
    </Card>
  ) 
}