import React, { Component } from "react";

export class Row_User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: [],
      status: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.User !== state.User) {
      return {
        User: props.User,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.User !== this.state.User) {
      this.setState({
        User: this.state.User,
      });
    }
  }

  onDelete = (tenant_id) => {
    this.props.onDelete(tenant_id);
  };

  render() {
    let { User } = this.state;

    return (
      <tr>
        <td>{User.tenant_id}</td>
        <td>{User.full_name}</td>
        <td>{User.email}</td>
        <td>{User.phone_no}</td>
        <td>{User.sex}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(this.state.User.tenant_id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default Row_User;
