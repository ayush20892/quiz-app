import "./header.css"
import { useUser } from "../../context/userContext/userContext"

type headerProps = {
  heading: String,
  greeting: String
  username: String,
}

export function Header({ heading, greeting, username } : headerProps ) {
  const { userState } = useUser()
  return(
    <header>
      <h1>{heading}</h1>
      <div className="header-details">
        <h3>{greeting} {userState.userName}</h3>
        <h4>Score: {userState.score}</h4>
      </div>
    </header>
  )
}