import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home of Vidyoatma</h1>
      <Link to={"/register"}>
        <button>Try for free</button>
      </Link>
      <Link to={"/authenticate"}>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default App;
