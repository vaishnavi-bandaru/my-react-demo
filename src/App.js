import "./App.css";
import MyButton from "./components/MyButton/MyButton";
import MyApp from "./components/MyContext/MyContext";
import Counter from "./components/MyRef/MyRef";
import { useState } from "react";
import { createTodos } from "./utils.js";
import TodoList from "./components/MyTodo/TodoList.js";
import ProductPage from "./components/MyCallback/ProductPage.js";
import { MyReducer } from "./components/MyReducer/MyReducer.js";
import MyPortal from "./components/MyPortal/MyPortal.js";

const todos = createTodos();

export default function App() {
    // const clicked = true;
    // const buttonName = "Click Count";
    // const frens = [
    //   { name: "Saurabh", place: "Benglur", color: "Blue" },
    //   { name: "Base", place: "Champapet", color: "Magenta" },
    //   { name: "Winni", place: "Sanga", color: "Green" },
    //   { name: "Kobs", place: "Asan", color: "Purple" },
    // ];
    // const listFrens = frens.map((fren) => (
    //   <li key={fren.color} style={{ color: fren.color }}>
    //     {fren.name}
    //   </li>
    // ));

    // const childProp = <button>ChildButton</button>;

    const [tab, setTab] = useState("all");
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            {/* <h1>Frens</h1>
        <ul>{listFrens}</ul> */}
            {/* <MyButton name={buttonName} showText={clicked}/> */}
            {/* <MyApp/> */}
            {/* <Counter /> */}
            {/* <MyButton name={buttonName} showText={clicked}/> */}


            {/* <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => {setIsDark(e.target.checked); console.log(e)}}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} /> */}

            {/* <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      >

      </ProductPage> */}

            {/* <MyReducer></MyReducer> */}

            <MyPortal></MyPortal>
            <MyButton></MyButton>

        </>
    );
}
