import React, { useContext } from "react"

export const authContext = React.createContext({
  user: {
    name: "Anônimo",
    email: "",
  },
  onSignOut: () => {},
})

export function useAuthContext() {
  return useContext(authContext)
}
