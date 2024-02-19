// feaching my data

import "./CollegeList.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import Cookies from 'js-cookie';
function CollegeList() {
    const[college,setcollege]=useState([])
    const [sort,setSort] = useState('All')
    
    useEffect(()=>{
        axios.get('http://localhost:200')
            .then(res => setcollege(res.data) )
        .catch((error) => {
          console.log(error)
        })
      },[]);

      const hendelDelete = (id) =>{
        axios.delete(`http://localhost:200/delete/${id}`)
        window.location.reload()
        .then(res => console.log(res))
        .catch((error) => {
          console.log(error)
        })
      }



      const hendelSingOut = () =>{
        Cookies.remove('firstName')
        Cookies.remove('lastName')
        Cookies.remove('email')
        Cookies.remove('mobileNumber')
        Cookies.remove('token')
      }

      const HandleSort=(e)=>{
        console.log(e.target.value)
        setSort(e.target.value)
    
      }
      const filter = sort === 'ALL'? college: college.filter((data)=>data.Location === sort)

      return (
        <div className="container">
    <h1 className="title">College List</h1>
    <Link to={"/create"}><button className="btn-4">Create</button></Link>
    <Link to={"/"}><button className="btn-1" onClick={hendelSingOut}>Sing Out</button></Link>
    <select value={sort} onChange={HandleSort}>
      <option value="ALL">ALL</option>
      <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
      <option value="New Delhi">New Delhi</option>
      <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
      <option value="Kharagpur, West Bengal">Kharagpur, West Bengal</option>
      <option value="Kanpur, Uttar Pradesh">Kanpur, Uttar Pradesh</option>
      <option value="Roorkee, Uttarakhand">Roorkee, Uttarakhand</option>
      <option value="Guwahati, Assam">Guwahati, Assam</option>
      <option value="Rupnagar, Punjab">Rupnagar, Punjab</option>
      <option value="Bhubaneswar, Odisha">Bhubaneswar, Odisha</option>
      <option value="Gandhinagar, Gujarat">Gandhinagar, Gujarat</option>
    </select> 
    <hr/>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Average Package</th>
                <th>Placement Rates</th>
                <th>Campus Size</th>
                <th>Ranking</th>
            </tr>
        </thead>
        {/* <hr/> */}
        <tbody>
            {filter.map((collegeData , index) => (
                <tr key={collegeData.id}>
                    <td>{collegeData.Name}</td>
                    <td>{collegeData.Location}</td>
                    <td>{collegeData.AveragePackage}</td>
                    <td>{collegeData.placementRates}</td>
                    <td>{collegeData.CampusSize}</td>
                    <td>{collegeData.Ranking}</td>
                    <Link to={`/update/${collegeData._id}`}><button className="btn-2">Update</button></Link>
                    <button className="btn-3" onClick={(e)=>hendelDelete(collegeData._id)}>Delete</button>
                </tr>
            ))}
        </tbody>

    </table>
    <hr />
</div>
    );
}

export default CollegeList;


