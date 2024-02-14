import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './component/SignUpForm'
import CollegeList from './component/CollegeList'
import Usepropes from './component/usepropes'
import Form from './component/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUpForm/> */}
      {/* <CollegeList/> */}
      {/* <Usepropes collegeName={"IIT Kanpur"} Reanking={"3"}/> */}
      <Form/>
    </>
  )
}

export default App
