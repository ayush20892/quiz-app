import "./entryPage.css"
import { useState } from "react";
import { useUser } from "../../context/userContext/userContext";
import { refreshPage } from "../../util"

export function EntryPage() {
  const { userDispatch } = useUser()
  const [inputValue, setInputValue] = useState("")
  return(
    <div className="entry-box">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter username">
      </input>
      <div className="username-submit">
        <button onClick={() => {
          userDispatch({type: "ADD-USER", payload: inputValue});
          refreshPage() }}>
            Submit
        </button>
      </div>
    </div>
  );
}