import { useState } from "react";
import "./App.css";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { Header } from "./components/Header/Header";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";

function App() {
  const [toggleAsideBar, setToggleAsideBar] = useState(false);
  return (
    <>
      <Header
        setToggleAsideBar={setToggleAsideBar}
        toggleAsideBar={toggleAsideBar}
      />
      <AsideBar toggleAsideBar={toggleAsideBar} />
      <HomeScreen />
    </>
  );
}

export default App;
