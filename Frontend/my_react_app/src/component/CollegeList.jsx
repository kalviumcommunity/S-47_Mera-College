// feaching my data
import Data from "../Data"
import "./CollegeList.css"


import React from 'react'

function CollegeList() {
    console.log(Data)
  return (
        <div>
            {
                Data && Data.map(data =>{
                    return(
                        <>
                        <div key={data.id} className="CollegeList">
                                Name : {data.Name} <br/>
                                Location : {data.Location}<br/>
                                AveragePackage : {data.AveragePackage}<br/>
                                placement Rates : {data.placementRates}<br/>
                                Campus Size : {data.CampusSize}<br/>
                                Ranking : {data.Ranking}<br/>
                        </div>
                        </>
                    )
                })
            }
        </div>
      )
}

export default CollegeList
