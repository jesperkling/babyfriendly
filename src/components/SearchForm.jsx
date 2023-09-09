import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = () => {
  return (
    <Form className=" bg-success text-white my-5 p-4 rounded-lg">
      <h5>Restaurant</h5>
      <Form.Group className="my-2">
        <Form.Control
          type="text"
          placeholder="Search..."
          className="form-control-lg"
        />
      </Form.Group>

      <Form.Group className="my-2">
        <Form.Label>lorem ipsum</Form.Label>
        <Form.Control
          as="select"
          // value={}
          // onChange={}
          className="form-control-lg text-warning"
        >
          <option value="">+ 0 km</option>
          <option value="1">1 km</option>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
        </Form.Control>
      </Form.Group>

      <Button className="m-2 text-white" variant="danger">
        asiento bb
      </Button>
      <Button className="m-2 text-white" variant="warning">
        cambiador bb
      </Button>
      <Button className="m-2 text-white" variant="warning">
        menu bb
      </Button>
      <hr />
      <div className="text-center">
        <Button className="m-2 " variant="danger">
          Lorem ipsum lorem ipsum
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
