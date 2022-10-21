import React from "react";



export default class Out extends React.Component {
  outNum = 0;
  outItem = "";
  itemsArr = localStorage.getItem('outItemList') && localStorage.getItem('outItemList').split(",").map((e) => e);
  balance = localStorage.getItem("outNum") ? parseInt(localStorage.getItem("inNum")) - parseInt(localStorage.getItem("outNum")) : localStorage.getItem("inNum");

  submitForm = (e) => {
    e.preventDefault();
    if ((this.itemsArr) && this.itemsArr.includes(this.outItem)) {
      alert('You have this item in your list - Try with another name for the item');
    } else {
      if (this.balance < this.outNum) {
        alert("You don't have - " + this.outNum + " - You have only - " + this.balance + " - In your account");
      } else {
        this.props.addToList(this.outItem, 'outItemList');
        this.props.addToList(this.outNum, 'outNumList');
        this.outNum += (localStorage.getItem("outNum")) && parseInt(localStorage.getItem("outNum"));
        localStorage.setItem("outNum", this.outNum);
        window.location.reload();
      }
    }
  }
  render() {
    return (
      <div className="outDiv">
        <form onSubmit={this.submitForm}>
          <input type="text" required
            onChange={(e) => this.outItem = e.target.value}
            placeholder="What have you bought ? " />
          <input type="number" required
            onChange={(e) => { this.outNum = parseInt(e.target.value) }}
            placeholder="How much it cost ? " />
          <button>Take Out</button>
        </form>
      </div>
    )
  }
}