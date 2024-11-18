import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import JsxSytax from "./jsx문법";
import GreetingComponent from "./GreetingComponent";
import WelcomProps from "./WelcomeProps";
function App() {
  return (
    <>
      <h1>여기는 App.js입니다.</h1>
      {/* <JsxSytax></JsxSytax>
      <GreetingComponent></GreetingComponent> */}
      <WelcomProps
        name="곰돌이사육사"
        job="개발자"
        addr="경기도 수원시"
        isAdult={true}
      ></WelcomProps>
    </>
  );
}

export default App;
