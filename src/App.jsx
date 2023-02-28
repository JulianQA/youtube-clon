import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { Header } from "./components/Header/Header";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen/SearchScreen";
import { WatchScreen } from "./screens/WatchScreen/WatchScreen";

const Layout = ({ children }) => {
  const [toggleAsideBar, setToggleAsideBar] = useState(false);
  return (
    <>
      <Header
        setToggleAsideBar={setToggleAsideBar}
        toggleAsideBar={toggleAsideBar}
      />
      <AsideBar toggleAsideBar={toggleAsideBar} />
      {children}
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <Layout>
              <WatchScreen />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <h1>404 Not Found</h1>
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
