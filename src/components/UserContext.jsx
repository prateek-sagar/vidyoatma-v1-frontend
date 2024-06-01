import { createContext, useContext } from "react";
import { useImmer } from "use-immer";

const UserContext = createContext();

const currentUser = {
  islogIn: true,
  id: "",
  role: "",
};

export const UserProvider = ({ children }) => {
  const [user, updateUser] = useImmer(currentUser);
  const login = (response) => {
    console.log(response.id);
    updateUser((draft) => {
      draft.id = response.id;
      draft.role = response.role;
      draft.islogIn = true;
    });
    console.log(user.id);
  };
  const logout = () => {
    updateUser((draft) => {
      draft.id = currentUser.id;
      draft.islogIn = currentUser.islogIn;
      draft.role = currentUser.role;
    });
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
