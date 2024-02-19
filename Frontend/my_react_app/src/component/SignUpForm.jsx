import React, { useState } from 'react';
import './SignUpForm.css';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignUpForm = () => {
  // State for user information
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');

 const navigate = useNavigate();


 // Function to handle form submission and cookis
 const handleSignUp = (e) => {
  e.preventDefault()

  axios.post('http://localhost:200/signup', { firstName, lastName, email, mobileNumber })
  .then(response => {
    console.log('Response from backend:', response);
    const token = response.data.token;
    console.log('Token:', token);
    Cookie.set('token', token);
    Cookie.set('firstName', firstName);
    Cookie.set('lastName', lastName);
    Cookie.set('email', email);
    Cookie.set('mobileNumber', mobileNumber);
    console.log(document.cookie);
  })
  .catch(error => {
    console.error('Error signing up:', error);
  });
   navigate('/college');
 };

 return (
   <div  id="boder">
     <h2>Sign Up</h2>
     <form>
       <label>


       First Name:
         <input
           type="text"
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
         />
       </label>
       <br />


       <label>
         Last Name:
         <input
           type="text"
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
         />
       </label>
       <br />


       <label>
         Email:
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
/>
       </label>
       <br />


       <label>
         Mobile Number:
         <input
           type="text"
           value={mobileNumber}
           onChange={(e) => setMobileNumber(e.target.value)}
         />
       </label>
       <br/>
       <button type="button" onClick={(e) =>  handleSignUp(e) }>Sign Up</button>

     </form>
   </div>
 );
 }
 export default SignUpForm;