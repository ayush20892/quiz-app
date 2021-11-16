import { Header } from "../component/header/header"
import { LeaderBoardList } from "../component/leaderBoard/leaderBoardList"

export function LeaderBoard () {
  return(
    <div>
      <Header heading={"General Fun Game"} greeting={"Welcome,"}/>
      <LeaderBoardList />
    </div>
  )
}