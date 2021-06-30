import "./entryPage.css"
import { useState, useEffect } from "react";
import { useUser } from "../../context/userContext/userContext";
import { postNewUser } from "../../networkCalls";
import { refreshPage } from "../../util"
import axios from "axios";

export function EntryPage() {
  const { userDispatch } = useUser()
  const [inputValue, setInputValue] = useState<string>("")

  async function userNameSubmit() {
    const res = await postNewUser(inputValue, userDispatch)
    if(res === 1)
      refreshPage()
    console.log(res)
  }

  return(
    <div className="entry-box">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username">
      </input>
      <div className="username-submit">
        <button onClick={userNameSubmit}>
            Submit
        </button>
      </div>
    </div>
  )
}