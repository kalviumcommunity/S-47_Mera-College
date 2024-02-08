// feaching my data

import "./CollegeList.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"

function CollegeList() {
    const[college,setcollege]=useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:200')
        .then((res)=>{
          setcollege(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
      },[]);
      return (
        <div>
    <h1>College List</h1>
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
        <tbody>
            {college.map((collegeData) => (
                <tr key={collegeData.id}>
                    <td>{collegeData.Name}</td>
                    <td>{collegeData.Location}</td>
                    <td>{collegeData.AveragePackage}</td>
                    <td>{collegeData.placementRates}</td>
                    <td>{collegeData.CampusSize}</td>
                    <td>{collegeData.Ranking}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
}

export default CollegeList;