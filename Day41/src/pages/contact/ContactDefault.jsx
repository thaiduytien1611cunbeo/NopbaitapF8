import React, { Component } from "react";

export class ContactDefault extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="item-contact" id="item-contact">
          <button className="btn-fix" onClick={this.props.handleClick}>
            Sửa
          </button>
          <button className="btn-delete" onClick={this.props.deleteForm}>
            Xóa
          </button>
        </div>
      </>
    );
  }
}

export default ContactDefault;
