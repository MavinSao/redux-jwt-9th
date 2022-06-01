import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { handlePostData } from "../services/post.service";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState();

  const onPost = () => {
    handlePostData(caption, imageURL).then((isSuccess) => {
      if (isSuccess) {
        alert("Post Data Successfully");
      }
    });
  };

  return (
    <Container>
      <Form className="w-75 m-auto my-4">
        <h1>Your Post</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Caption</Form.Label>
          <Form.Control
            as="textarea"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter caption"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder="Image URL"
          />
        </Form.Group>
        <Button variant="primary" onClick={onPost}>
          Post
        </Button>
      </Form>
    </Container>
  );
};

export default Post;
