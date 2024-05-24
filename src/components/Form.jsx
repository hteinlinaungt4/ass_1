import { useState } from "react"

function Form({handleform}) {
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
 const formsubmit = (e) => {
    e.preventDefault();
    if(name.length < 1 || address.length < 1){
      return window.confirm("Please fill valid Filed");
    }
    const data = {
      name,
      address
    }
    handleform(data)
    setaddress("")
    setname("")
  }
  return (
   <div className="shadow bg-white p-3 my-5">
    <form onSubmit={formsubmit}>
      <div className="p-2 grid grid-cols-2 items-center">
        <label htmlFor="">Name</label>
        <input value={name} className="p-2 rounded-lg" placeholder="Enter Name ...." onChange={(e)=>setname(e.target.value)}></input>
      </div>
      <div className="p-2 grid grid-cols-2">
        <label htmlFor="">Address</label>
        <input value={address} className="p-2 rounded-lg" placeholder="Enter Address ...." onChange={(e)=>setaddress(e.target.value)}></input>
      </div>
      <div className="flex justify-end">
        <button className="p-2 text-slate-100 rounded-lg bg-blue-600">Create</button>
      </div>
    </form>
   </div>
  )
}

export default Form
