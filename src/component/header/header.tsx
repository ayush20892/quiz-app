import "./header.css"
import { useUser } from "../../context/userContext/userContext"

type headerProps = {
  heading: String,
  greeting: String
}

export function Header({ heading, greeting } : headerProps ) {
  const { userState } = useUser()
  return(
    <header>
      <h1>{heading}</h1>
      <div className="header-details">
        <h3>{greeting}&nbsp; 
          <span>{userState.userName}</span>
        </h3>
        <h4>Score: &nbsp;
          <span>{userState.score}</span>
        </h4>
      </div>
    </header>
  )
}