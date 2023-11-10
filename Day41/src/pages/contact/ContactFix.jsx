import React, { Component } from "react";

export class ContactFix extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="item-contact item-contact-fix" id="item-contact">
          <div className="contact-left">
            <label htmlFor="check">Not Completed</label>
            <input type="checkbox" className="input-check" id="check" />
          </div>
          <div className="contact-right">
            <button className="btn-exit" onClick={this.props.handleClickExit}>
              Thoát
            </button>
            <button className="btn-fix">Sửa</button>
            <button className="btn-delete">Xóa</button>
          </div>
        </div>
      </>
    );
  }
}

export default ContactFix;
