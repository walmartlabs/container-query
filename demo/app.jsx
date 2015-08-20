/*global document:false*/
import React from "react/addons";

import "./app.css";

import ClassBasedLayout from "./components/class-based-layout";
import ColumnBasedLayout from "./components/column-based-layout";
import StyleBasedLayout from "./components/style-based-layout";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <table>
          <td width={500} style={{verticalAlign: "top"}}>
            <h4>Container fixed at 500px</h4>
            <ClassBasedLayout />
          </td>
          <td width={300} style={{verticalAlign: "top"}}>
            <h4>Container fixed at 300px</h4>
            <StyleBasedLayout />
          </td>
        </table>

        <h4>Test of columns dynamic generated</h4>
        <ColumnBasedLayout />
      </div>
    );
  }
}

const content = document.getElementById("content");

React.render(<App/>, content);
