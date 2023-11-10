import React, { Component } from "react";

export class ContactDefault extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="item-contact" id="item-contact">
          <button className="btn-fix" onClick={this.props.handleClickFix}>
            Sửa
          </button>
          <button className="btn-delete">Xóa</button>
        </div>
      </>
    );
  }
}

export default ContactDefault;
