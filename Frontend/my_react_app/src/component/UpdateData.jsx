import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useParams} from 'react-router-dom';
import "./UpdateData.css"
// import { Link } from 'react-router-dom'
import { useParams, useNavigate} from 'react-router-dom';
function UpdateData() {

const {id} = useParams();

const [Name, setName] = useState('');
const [Location, setLocation] = useState('');
const [AveragePackage, setAveragePackage] = useState('');
const [placementRates, setPlacementRates] = useState('');
const [CampusSize, setCampusSize] = useState('');
const [Ranking, setRanking] = useState('');
const navigate=useNavigate()

useEffect(()=>{
  axios.get('http://localhost:200/update/'+id)
  .then(res => {
    console.log(res)
    setName(res.data.Name)
    setLocation(res.data.Location)
    setAveragePackage(res.data.AveragePackage)
    setPlacementRates(res.data.placementRates)
    setCampusSize(res.data.CampusSize)
    setRanking(res.data.Ranking)
  })
  .catch((error) => {
    console.log(error)
  })
},[]);


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
  axios.put("http://localhost:200/update/"+id,
  {Name,Location,AveragePackage,placementRates,CampusSize,Ranking}
  )
  .then(
      result=> 
      {
      console.log(result)
      navigate('/college')
  }
  )
  .catch(err => console.log(err))
}




  return (
    <div className='update'>
        <h1 className='heading-22'>Update</h1>
        <form onSubmit={handleSubmit}>
  <label>
    College Name:
  <input
    type="text"
    name="name"
    value={Name}
    onChange={(e)=>setName(e.target.value)}
  />
    </label>
  <br />
  <label>
  Location:
  <input
    type="text"
    name="location"
    value={Location}
    onChange={(e)=>setLocation(e.target.value)}
  />
    </label>  
  <br />
  <label>
  Average Package:
  <input
    type="text"
    name="averagePackage"
    value={AveragePackage}  
    onChange={(e)=>setAveragePackage(e.target.value)}
  />
    </label>
  <br />
  <label>
  Placement Rates:
  <input
    type="text"
    name="placementRates"
    value={placementRates}
    onChange={(e)=>setPlacementRates(e.target.value)}
  />
    </label>
  <br />
  <label>
  Campus Size:
  <input
    type="text"
    name="campusSize"
    value={CampusSize}
    onChange={(e)=>setCampusSize(e.target.value)}
  />
    </label>
    <br />
  <label>
  Ranking:
  <input
    type="text"
    name="ranking"
    value={Ranking}
    onChange={(e)=>setRanking(e.target.value)}
  />
    </label>
  <br />
  <button type="submit">Submit</button>
  </form>

  </div>
      
  )
}

export default UpdateData
