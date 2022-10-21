import React from "react";



export default class In extends React.Component {
  inNum = 0;
  balance = parseInt(localStorage.getItem("inNum")) - parseInt(localStorage.getItem("outNum"));
  submitForm = (e) => {
    e.preventDefault();
    this.inNum += (localStorage.getItem("inNum")) && parseInt(localStorage.getItem("inNum"))
    localStorage.setItem("inNum", this.inNum);
    window.location.reload();
  }
  render() {
    this.inNum = this.inNum + parseInt(localStorage.getItem("inNum"));
    return (<>
      <div className="numberShow">
        <h1>Deposit  : {localStorage.getItem("inNum")}</h1>
        <h1>Withdraw : {localStorage.getItem("outNum")}</h1>
        <h1>Balance  : {localStorage.getItem("inNum") && localStorage.getItem("outNum") ?
          this.balance : localStorage.getItem("inNum")} </h1>
      </div>
      <div className="inDiv">
        <form onSubmit={this.submitForm}>
          <input type="number"
            onChange={(e) => this.inNum = parseInt(e.target.value)}
            placeholder=" -How much do you want to save ?"
            required />
          <button>Save</button>
        </form>
      </div>
    </>
    )
  }
}