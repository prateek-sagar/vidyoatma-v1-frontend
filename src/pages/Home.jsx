import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
    </div>
  );
}

export default Home;
