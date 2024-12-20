import Counter from "./ClassComponent";
import Counter2 from "./ClassComponent2";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./EventPractice";
import DropDownComponent from "./DropDownComponent";
import RadioButton from "./RadioButton";
import { Fragment } from "react";
import JsxSytax from "./jsx문법";
import GreetingComponent from "./GreetingComponent";

import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponenet";
import TableMap from "./TableMap";
import WelcomProps from "./WelcomeProps";
import UserList from "./UserList";
import TodoList from "./TodoList";
import NameCard from "./NameCard";
import InfoEffect from "./InfoEffect";
import ReducerCnt from "./ReducerState";
import Average from "./Average";
import CreateRef from "./RefEx1";
import InnerValueKeep from "./RefEx2";
const productInfo = {
  date: "2024-09-01",
  product: "iPhone 16 Pro",
};
function App() {
  return (
    <>
      <InnerValueKeep></InnerValueKeep>
      <CreateRef></CreateRef>
      <Average></Average>
      <ReducerCnt></ReducerCnt>
      <InfoEffect></InfoEffect>
      <NameCard></NameCard>
      <TodoList></TodoList>
      <UserList></UserList>
      <TableMap></TableMap>
      <RadioButton></RadioButton>
      <DropDownComponent></DropDownComponent>
      <EventPractice></EventPractice>
      <Clock></Clock>
      <Counter2></Counter2>
      <Say></Say>
      <Counter></Counter>
      <Articles></Articles>
      <MyComponent name="안유진" age={21}></MyComponent>
      <BoxComponent></BoxComponent>
      <JsxSytax></JsxSytax>
      <GreetingComponent></GreetingComponent>
      <WelcomProps
        name="장원영"
        job="아이돌"
        addr="서울시"
        isAdult={true}
        productInfo={productInfo}
      ></WelcomProps>
    </>
  );
}

export default App;
