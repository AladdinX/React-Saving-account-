import React from "react";



export default class Show extends React.Component {
  balance = parseInt(localStorage.getItem("inNum")) - parseInt(localStorage.getItem("outNum"));
  showListItem = (localKey) => {
    return <ul>
      {localStorage.getItem(localKey) && localStorage.getItem(localKey).split(",").map((e) => {
        return <li key={e}>
          {e}
        </li>
      })}
    </ul>
  };
  saveWithdrawn = (amount) => {
    // Check if balance is bigger than amount, if so do this underneath. If not, do nothing (show alert)
    if (parseInt(localStorage.getItem("balance")) > parseInt(localStorage.getItem("balance")) + amount) {
      if (localStorage.getItem("withdraw")) {
        localStorage.setItem(
          "withdraw",
          parseInt(localStorage.getItem("withdraw")) + amount
        );
      } else {
        localStorage.setItem("withdraw", amount);
      }
      this.updateBalance(-amount);
    } else {
      alert('Insufficient balance!')
    }
  };

  render() {
    return (<>
      <div className="myUl">
        {this.showListItem("outNumList")}
        {this.showListItem("outItemList")}
      </div>
    </>)
  }
}