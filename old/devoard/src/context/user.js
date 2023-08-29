import { createContext, useState } from 'react';

export const UserContext = createContext({
  loggedUser: {
    username: '',
    email: '',
    imageUrl: ''
  },
  loggedIn: false,
  setLoggedUser: () => {},
  setLoggedIn: () => {}
})

const UserProvider = ({ children }) => {
  const setLoggedUser = (data) => {
    setState(prevState => (
      {
        ...prevState,
        loggedUser: data
      }
    ))
  }

  const setLoggedIn = () => {
    setState(prevState => (
      {
        ...prevState,
        loggedIn: !prevState.loggedIn
      }
    ))
  }

  const initialState = {
    loggedUser: {
      username: '',
      email: '',
      imageUrl: ''
    },
    loggedIn: false,
    setLoggedUser,
    setLoggedIn
  }

  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;