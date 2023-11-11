import React, { Component } from "react";

export class ContactFix extends Component {
  constructor(props) {
    super(props);
  }

  handleCheckCompleted = () => {};

  render() {
    return (
      <>
        <div className="item-contact item-contact-fix" id="item-contact">
          <div className="contact-left">
            <label htmlFor="check">Not Completed</label>
            <input type="checkbox" className="input-check" id="check" checked />
          </div>
          <div className="contact-right">
            <button className="btn-exit" onClick={this.props.handleClick}>
              Thoát
            </button>
            <button className="btn-fix" onClick={this.props.handleClick}>
              Sửa
            </button>
            <button className="btn-delete" onClick={this.props.deleteForm}>
              Xóa
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactFix;
