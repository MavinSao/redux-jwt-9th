import React from "react";
import { Col, Card, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions/post.actions";
const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deletePost(id)).then((re) => {
      console.log("====================================");
      console.log(re);
      console.log("====================================");
    });
  };

  return (
    <Col className="my-2" md={3}>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <b>{post.username}</b>
          <DropdownButton
            className={post.owner ? "d-block" : "d-none"}
            variant="secondary"
            size="sm"
            id="dropdown-basic-button"
            title="More"
          >
            <Dropdown.Item onClick={() => onDelete(post.id)}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item>Update</Dropdown.Item>
          </DropdownButton>
        </Card.Header>
        <Card.Img
          style={{ objectFit: "cover", height: "150px" }}
          className={post.image ? "img-fluid" : "d-none img-fluid"}
          variant="top"
          src={post.image ? post.image : "image/default.webp"}
        />
        <Card.Body>
          <Card.Title>{post.caption}</Card.Title>
          <Card.Text>
            {post.numberOfLikes} {post.numberOfLikes > 2 ? "likes" : "like"}
          </Card.Text>
          <Button size="sm" variant="primary">
            Like
          </Button>{" "}
          <Button size="sm" variant="warning">
            Comment
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostCard;
