import { useEffect, useState } from "react"
import InputForm from "./components/InputForm"
import List from "./components/List"


function App() {
  const [data, setdata] = useState(null)

  const formhandle =async (id = 10) =>{
   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      setdata(res);
  }

  useEffect(()=>{
    formhandle();
  },[])
  
  console.log(data);
 
  return (
   <div className='space-y-10 flex-col container justify-center mx-auto flex h-screen items-center'>
      <InputForm formhandle={formhandle}></InputForm>
     {
      ( data &&
        <List data={data}></List>
      )
     }
   </div>
  )
}

export default App
