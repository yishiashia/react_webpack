import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'checkbox',
      error: "The Accept Terms must be accepted."
    };
  }
  render() {
    return (
      <div className="form-check">
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.state.type}
          className="form-check-input"
        />
        <label
          className="form-check-label"
          htmlFor={this.props.id}
          dangerouslySetInnerHTML={{ __html: this.props.title }}
        >
        </label><br />
        <small>
          {this.state.error}
        </small>
      </div>
    );
  }
}