import React from "react";
import In from "./component/In/In";
import Out from "./component/Out/Out";
import Show from "./component/Show/Show";



export default class App extends React.Component {
  checkAndAdd = (entry, list) => {
    (localStorage.getItem(list)) ? localStorage.setItem(list, entry + "," + localStorage.getItem(list)) : localStorage.setItem(list, entry);
  }
  render() {
    return (<div className="container">
      <div className="inputs">
        <In />
        <Out addToList={this.checkAndAdd} />
      </div>
      <div className="showDiv">
        <Show />
      </div>
    </div>)
  }
}