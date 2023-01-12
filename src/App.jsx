import { useState } from "react";
import "./App.css";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { Header } from "./components/Header/Header";

function App() {
  const [toggleAsideBar, setToggleAsideBar] = useState(false);
  return (
    <>
      <Header
        setToggleAsideBar={setToggleAsideBar}
        toggleAsideBar={toggleAsideBar}
      />
      <AsideBar toggleAsideBar={toggleAsideBar} />
    </>
  );
}

export default App;
