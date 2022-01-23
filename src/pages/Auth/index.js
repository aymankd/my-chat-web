import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
function Index() {
  const [authState, setauthState] = useState(true);
  return <div>{authState ? <Login /> : <Register />}</div>;
}
export default Index;
