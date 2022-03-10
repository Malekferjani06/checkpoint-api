import React, { useState } from 'react';
import{Form,Button} from 'react-bootstrap'
function AddNewCity({addFunction}) {
  const [input, setinput] = useState({id:Math.random()}); 
  console.log(input)
  return <div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>City Name</Form.Label>
    <Form.Control onChange={(e)=>setinput({...input,city:e.target.value})}     type="text" placeholder="Enter City" />
    <Form.Text className="text-muted">
      Rertun City Name.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control   onChange={(e)=>setinput({...input,description:e.target.value})}   type="text" placeholder="Enter Description" />
    <Form.Text className="text-muted">
      Return description of Cities.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onChange={(e)=>setinput({...input,img:e.target.value})} type="text" placeholder="Image Url" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  onClick={()=>addFunction(input)}    variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>;
}

export default AddNewCity;
