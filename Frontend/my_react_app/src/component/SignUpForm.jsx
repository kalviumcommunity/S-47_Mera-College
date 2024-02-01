import React, { useState } from 'react';
import './SignUpForm.css';


const SignUpForm = () => {
  // State for user information
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [mobileNumber, setMobileNumber] = useState('');


 // Function to handle form submission
 const handleSignUp = () => {
   console.log('User Details:', { firstName, lastName, email, mobileNumber });
 
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
       <br />


       <button type="button" onClick={handleSignUp}>
         Sign Up
       </button>
     </form>
   </div>
 );
 }
 export default SignUpForm;