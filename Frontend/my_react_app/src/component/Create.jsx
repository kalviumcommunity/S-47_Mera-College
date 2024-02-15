import React, { useState } from 'react';
import './CreateUser.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Create() {
    const [Name, setName] = useState('');
    const [Location, setLocation] = useState('');
    const [AveragePackage, setAveragePackage] = useState('');
    const [placementRates, setPlacementRates] = useState('');
    const [CampusSize, setCampusSize] = useState('');
    const [Ranking, setRanking] = useState('');
    const navigate=useNavigate()


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
          Name,
          Location,
          AveragePackage,
          placementRates,
          CampusSize,
          Ranking
        })
        axios.post("http://localhost:200/create"
        ,{Name,Location,AveragePackage,placementRates,CampusSize,Ranking}
        )
        .then(
            result=> 
            {
            console.groupCollapsed(result)
            navigate('/college')
        }
        )
        .catch(err => console.log(err))
      };
    

  return (
    <div className='form'>
      <h1 className='heading-11'>Create</h1>
  <form onSubmit={handleSubmit}>
  <label>
    College Name:
  <input
    type="text"
    name="name"
    onChange={(e)=>setName(e.target.name)}
  />
    </label>
  <br />
  <label>
  Location:
  <input
    type="text"
    name="location"
    onChange={(e)=>setLocation(e.target.value)}
  />
    </label>  
  <br />
  <label>
  Average Package:
  <input
    type="text"
    name="averagePackage"
    onChange={(e)=>setAveragePackage(e.target.value)}
  />
    </label>
  <br />
  <label>
  Placement Rates:
  <input
    type="text"
    name="placementRates"
    onChange={(e)=>setPlacementRates(e.target.value)}
  />
    </label>
  <br />
  <label>
  Campus Size:
  <input
    type="text"
    name="campusSize"
    onChange={(e)=>setCampusSize(e.target.value)}
  />
    </label>
    <br />
  <label>
  Ranking:
  <input
    type="text"
    name="ranking"
    onChange={(e)=>setRanking(e.target.value)}
  />
    </label>
  <br />
  <button type="submit">Submit</button>
  </form>

  </div>
  )
}

export default Create





