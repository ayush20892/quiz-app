import { useState } from "react"
import { useUser } from "../context/userContext/userContext"
import { refreshPage } from "../util"


export function UserEntry () {
  const { userDispatch } = useUser()
  const [inputValue, setInputValue] = useState("")
  return(
    <div>
      <h1>Welcome to general fun quiz.</h1>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username"></input>
      {console.log(inputValue)}
      <button onClick={() => {
        userDispatch({type: "ADD-USER", payload: inputValue});
        refreshPage() }}>
          Submit
      </button>
    </div>
  )
}




