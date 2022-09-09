import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/page-components/Header";
import Main from "./components/page-components/Main";
import './App.scss'

function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Fragment>
  );
}

export default App;
