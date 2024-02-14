// using propes

import React from 'react'
import data from '../Data.json'
function Usepropes(props) {
  console.log(data)
  return (
    <>
    <div>
      <h1>College Name : {props.collegeName}</h1>
      <h2> College Rank : {props.Reanking}</h2>
    </div>
    <div>
      {data.map( dt => {
        return(
          <>
          <ul>
              <li>{dt.Name}
              <br />
              {dt.Ranking}
              <br />
              {dt.AveragePackage}
              </li>
            </ul>
          </>
        )
      })}
    </div>
    </>
  )
}

export default Usepropes
