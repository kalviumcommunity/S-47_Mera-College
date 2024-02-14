import React, { useState } from 'react';
import './Form.css'
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
function Form() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     location: '',
    //     averagePackage: '',
    //     placementRates: '',
    //     campusSize: '',
    //     ranking: ''
    //   });
    const [Name, setName] = useState('');
    const [Location, setLocation] = useState('');
    const [AveragePackage, setAveragePackage] = useState('');
    const [placementRates, setPlacementRates] = useState('');
    const [CampusSize, setCampusSize] = useState('');
    const [Ranking, setRanking] = useState('');
    // const navigate=useNavigate()
    //   const (e)=>e.target. = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //   };
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
        axios.post("http://localhost:200"
        ,{Name,Location,AveragePackage,placementRates,CampusSize,Ranking}
        )
        .then(
            result=> 
            {
            console.groupCollapsed(result)
            // navigate('/')
        }
        )
        .catch(err => console.log(err))
      };
    
  return (
    <div>
      
<form onSubmit={handleSubmit}>
<label>
  College Name:
  <input
    type="text"
    name="name"
    // value={formData.name}
    onChange={(e)=>setName(e.target.name)}
  />
</label>
<br />
<label>
  Location:
  <input
    type="text"
    name="location"
    // value={formData.location}
    onChange={(e)=>setLocation(e.target.value)}
  />
</label>
<br />
<label>
  Average Package:
  <input
    type="text"
    name="averagePackage"
    // value={formData.averagePackage}
    onChange={(e)=>setAveragePackage(e.target.value)}
  />
</label>
<br />
<label>
  Placement Rates:
  <input
    type="text"
    name="placementRates"
    // value={formData.placementRates}
    onChange={(e)=>setPlacementRates(e.target.value)}
  />
</label>
<br />
<label>
  Campus Size:
  <input
    type="text"
    name="campusSize"
    // value={formData.campusSize}
    onChange={(e)=>setCampusSize(e.target.value)}
  />
</label>
<br />
<label>
  Ranking:
  <input
    type="text"
    name="ranking"
    // value={formData.ranking}
    onChange={(e)=>setRanking(e.target.value)}
  />
</label>
<br />
<button type="submit">Submit</button>
</form>

    </div>
  )
}

export default Form





