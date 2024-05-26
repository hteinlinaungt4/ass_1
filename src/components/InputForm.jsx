import { useState } from "react"

function InputForm({formhandle}) {
  return (
    <div>
      <form>
        <input onChange={e=>{formhandle(e.target.value)}} className="p-3 border border-amber-300" placeholder="Enter Your Search ID"></input>
      </form>
    </div>
  )
}

export default InputForm
