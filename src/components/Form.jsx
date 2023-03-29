import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicFormComponent() {
  return (
      <Form /*onSubmit={do something with your sql stuff}*/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User ID</Form.Label>
          <Form.Control type="email" placeholder="StudentID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default BasicFormComponent;
