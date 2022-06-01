import React, { useEffect } from "react";
import { Col, Container, Row, Card, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { onFetchPost } from "../redux/actions/post.actions";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);

  useEffect(() => {
    dispatch(onFetchPost());
  }, []);

  const allPosts = posts.map((post) => <PostCard key={post.id} post={post} />);

  return (
    <Container>
      <h1 className="my-3">News Feeds</h1>
      <Row>
        <Col md={10}>
          <Row>{allPosts}</Row>
        </Col>
        <Col md={2} className="d-none d-md-block">
          <Card>
            <Card.Img
              className="w-100"
              variant="top"
              src="https://i.pinimg.com/originals/55/53/f3/5553f39e670eba8fa1395f81aa71c4a5.png"
            />
            <Card.Body>
              <Card.Title>Username</Card.Title>
              <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
