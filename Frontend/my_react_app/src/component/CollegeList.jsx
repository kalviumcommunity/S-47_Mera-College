// feaching my data

import "./CollegeList.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
function CollegeList() {
    const[college,setcollege]=useState([])
    
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




      return (
        <div className="container">
    <h1 className="title">College List</h1>
    <Link to={"/create"}><button className="btn-1">Create</button></Link>
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
            {college.map((collegeData , index) => (
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


