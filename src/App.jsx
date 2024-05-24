import List from './components/List'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [userdata, setuserdata] = useState([])
  const handleform = (data) => {
    setuserdata([...userdata,data])
  }
  return (
   <div className='container justify-center mx-auto flex h-screen items-center'>
    <div>
     {
        userdata.map((value,index)=>(
          <List key={index} data={value}></List>
        ))
     }
      <Form handleform={handleform}></Form>
    </div>
   </div>
  )
}

export default App
