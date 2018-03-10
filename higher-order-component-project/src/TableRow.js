import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            ID -> {this.props.obj.id}
          </td>
          <td>
            NAME -> {this.props.obj.name}
          </td>
        </tr>
    );
  }
}

export default TableRow;