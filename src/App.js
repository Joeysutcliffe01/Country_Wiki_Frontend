import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";
import ServerStartUpMessage from "./components/ServerMessage/ServerMessage";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ServerStartUpMessage />
    </>
  );
}

export default App;
