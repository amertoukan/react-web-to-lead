import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';

import {} from 'react-bootstrap'


// function getRSCode(){

//     let rsCode__param = URLParams.get('rsCode');
//     let referredByCodeField = document.getElementById('referred_by_code');
    
//     console.log(`URLParams: ${URLParams}`)
//     console.log(`queryString: ${queryString}`)
//     console.log(`referredByCodeField: ${referredByCodeField}`) 
//     if(rsCode__param == null){
//         rsCode = localStorage.getItem('rsCode') 
//         referredByCodeField.value = rsCode;
        
//     } else {
//         window.localStorage.setItem('rsCode', rsCode__param)
//         let rsCode = localStorage.getItem('rsCode')
//         document.getElementById('referred_by_code').value = rsCode;
//     }
//   }


function App() {
  const [rsCode, setRSCode]= useState();
  const [codeParams, setCodeParams] = useState();

// window.URLParams.get('rsCode')
  console.log(codeParams)
  useEffect(()=>{

    let queryString = window.location.search; 
    let URLParams = new URLSearchParams(queryString); 
  })
  return(
  <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
  <input type="hidden" name="oid" value="00D8b0000013hDd"/>
  {/**
   * First Name
   */}
  <div className="mb-3">
    <label>
      First Name:
    </label>
    <br/>
    <input   
      className="form-control" 
      id="first_name" 
      maxLength="40" 
      name="first_name" 
      size="20" 
      type="text" 
    />
  </div>

  {/**
   * Last Name
   */}
  
  <div className="mb-3">
    <label>
      Last Name:
    </label>
    <br/>
    <input  
      className="form-control" 
      id="last_name" 
      maxLength="80" 
      name="last_name" 
      size="20" 
      type="text"
    />
    <br/>
  </div>
  
  {/**
   * Email
   */}
  <div className="mb-3">
    <label>
      Email:
    </label>
    <br/>
    <input  
      className="form-control" 
      id="email" 
      maxLength="80" 
      name="email" 
      size="20" 
      type="text"
    />
    <br/>
  </div>
   {/**
    * Company
    */}
  <div className="mb-3">
    <label>
      Company:
    </label>
    <br/>
    <input   
      className="form-control" 
      id="company" 
      maxLength="40" 
      name="company" 
      size="20" 
      type="text" 
    />
    <br/>
  </div>
  <div className="mb-3">
  <label>
    Referred By Code:
  </label>
  <br/>
  <input  
    className="form-control referred_by_code disabledInput" 
    aria-disabled="disabled" 
    id="00N8b00000DVVW0" 
    maxLength="255" 
    name="00N8b00000DVVW0" 
    size="20" 
    type="text"
    defaultValue="1234"
  />
  <br/>
  </div>
  {/**
   * Submit
   */}
   <input 
    className ="btn btn-success btn-lg" 
    type="submit" 
    name="submit" 
    style={{"width": "100%"}}
  />
  </form>
)}

    
    
    
   {/*</input> <!-- <input type=hidden name="retURL" value="https://test-aqguqd9d73adj.saasquatch.app/thank-you"> -->
    
    <!--  ----------------------------------------------------------------------  -->
    <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
    <!--  these lines if you wish to test in debug mode.                          -->
    <!--  <input type="hidden" name="debug" value=1>                              -->
    <!--  <input type="hidden" name="debugEmail" value="toukan.amer@gmail.com">   -->
  <!--  ----------------------------------------------------------------------  --> */}

export default App;
