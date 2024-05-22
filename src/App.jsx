import { Link } from "react-router-dom";
import "./App.css";
import { createContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={"RaOne"}>
      <div>
        <h1 className="text-3xl font-bold underline">Home of Vidyoatma</h1>
        <Link to={"/register"}>
          <button>Try for free</button>
        </Link>
        <Link to={"/authenticate"}>
          <button>Login</button>
        </Link>
      </div>
    </UserContext.Provider>
  );
}

export default App;
