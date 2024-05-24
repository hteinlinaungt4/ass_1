import { useReducer } from "react"

function App() {

  const initialState = {
    count : 0
  }

  const reducer = (state,{type,payload})=>{
      switch (type) {
        case "plus":
          return {
            ...state,
            count : state.count + 1,
          };
          case "minus":
            return {
              ...state,
              count : state.count - 1,
            };
      
        default: return state.count;
      }
  }
  
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <button onClick={()=>{dispatch({type : "plus"})}}>+</button>
      <p>{state.count}</p>
      <button onClick={()=>{dispatch({type : "minus"})}}>-</button>
    </div>
  )
}

export default App
