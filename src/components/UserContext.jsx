import { createContext, useContext, useState } from "react";

const UserContext = createContext("Raone");

const currentUser = {
  name: "",
  islogIn: false,
  id: "",
  email: "",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(currentUser);
  const login = (response) => {
    console.log(response);
  };
  const logout = () => {
    setUser(currentUser);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
