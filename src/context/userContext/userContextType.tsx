export type InitialStateUser = {
  userName: string,
  score: number
}

export type ActionUser = 
  | {type: "ADD-USER", payload: string}
  | {type: "DELETE-USER"}
  | {type: "UPDATE-SCORE", payload: number}
  | {type: "RESET-USER"}

export type userProviderType = {
  userState: InitialStateUser,
  userDispatch: (action: ActionUser) => void
}