import { useState } from 'react'
import './App.css'
import SignUpForm from './component/SignUpForm'
import CollegeList from './component/CollegeList'
import Usepropes from './component/usepropes'
// import Form from './component/Form'
import Create from './component/Create'
import UpdateData from './component/UpdateData'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUpForm/> */}
      {/* <CollegeList/> */}
      {/* <Usepropes collegeName={"IIT Kanpur"} Reanking={"3"}/> */}
      {/* <Form/> */}
      {/* <Create/> */}
      {/* <UpdateData/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUpForm/>}/>
          <Route path='/college' element={<CollegeList/>}/>
          {/* <Route path='/form' element={<Form/>}/> */}
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<UpdateData/>}/>
        </Routes>
    </>
  )
}

export default App
