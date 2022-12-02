import logo from './logo.svg';
import {useEffect, useState} from 'react';


import { Button, Form } from 'react-bootstrap'


function App() {
  const [rsCode, setRSCode]= useState();
  const [codeParams, setCodeParams] = useState();
 
  useEffect(()=>{
    let queryString = window.location.search; 
    let URLParams = new URLSearchParams(queryString); 
    const params = URLParams.get('rsCode')
    setRSCode(params)
    console.log(rsCode)
  })  
  return(
  <Form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
  <input type="hidden" name="oid" value="00D5f000005x2AN"/>
  {/**
   * First Name
   */}
  <Form.Group className="mb-3" controlId='formBasicEmail'>
    <Form.Label>
      First Name:
    </Form.Label>
    <br/>
    <Form.Control 
      placeholder="Enter the Lead's First Name"  
      className="form-control" 
      id="first_name" 
      maxLength="40" 
      name="first_name" 
      size="20" 
      type="text" 
    />
  </Form.Group>

  {/**
   * Last Name
   */}
  
  <Form.Group className="mb-3">
    <Form.Label>
      Last Name:
    </Form.Label>
    <br/>
    <Form.Control  
      placeholder="Enter the Lead's Last Name"
      className="form-control" 
      id="last_name" 
      maxLength="80" 
      name="last_name" 
      size="20" 
      type="text"
    />
    <br/>
  </Form.Group>
  
  {/**
   * Email
   */}
  <Form.Group className="mb-3">
    <Form.Label>
      Email:
    </Form.Label>
    <br/>
    <Form.Control
      placeholder="Enter the Lead's Email"  
      className="form-control" 
      id="email" 
      maxLength="80" 
      name="email" 
      size="20" 
      type="text"
    />
    <br/>
  </Form.Group>
   {/**
    * Company
    */}
  <Form.Group className="mb-3">
    <Form.Label>
      Company:
    </Form.Label>
    <br/>
    <Form.Control 
      className="form-control" 
      id="company" 
      maxLength="40" 
      name="company" 
      size="20" 
      type="text" 
    />
    <br/>
  </Form.Group>
  <Form.Group className="mb-3">
  <Form.Control  
    className="form-control referred_by_code disabledInput" 
    aria-disabled="disabled" 
    id="00N8b00000DVVW0" 
    maxLength="255" 
    name="00N8b00000DVVW0" 
    size="20" 
    type="hidden"
    defaultValue={rsCode}
  />
  <br/>
  </Form.Group>
  {/**
   * Submit
   */}
   <div className='d-grip gap-2'>
   <Button 
    variant="success" 
    size="lg"
    type="submit" 
    name="submit" 

  >
    Submit
  </Button>
   </div>
  </Form>
)}

    
    
    
   {/*</input> <!-- <input type=hidden name="retURL" value="https://test-aqguqd9d73adj.saasquatch.app/thank-you"> -->
    
    <!--  ----------------------------------------------------------------------  -->
    <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
    <!--  these lines if you wish to test in debug mode.                          -->
    <!--  <input type="hidden" name="debug" value=1>                              -->
    <!--  <input type="hidden" name="debugEmail" value="klip@saasquatch.com">   -->
  <!--  ----------------------------------------------------------------------  --> */}

export default App;
