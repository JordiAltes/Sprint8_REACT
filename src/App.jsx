import React from "react";
import "../src/index.css";
import "animate.css";
import Routes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import '@fortawesome/fontawesome-svg-core/styles.css';


export const App = () => (
  <AuthProvider>
    <Routes />;
  </AuthProvider>
);

export default App;
