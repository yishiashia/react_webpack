import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.state = {
      error: ""
    };
  }
  handleFocus() {
    console.log("input underline must be blue");
  }
  handleBlur(e) {
    if(e.target.value.trim() == "") {
      this.setState({
        error: "Please enter " + this.props.title
      });
    } else {
      this.setState({
        error: ""
      });
    }
  }
  handleKeyup() {
    console.log("keyup: check input value, if format correct, then hide the error message");
  }
  render() {
    return (
      <div className="measure">
        <label
          className="control-label"
          htmlFor={this.props.id}
        >
          {this.props.title}
        </label>
        <div>
          <input
            className="form-control"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyUp={this.handleKeyup}
            name={this.props.name}
            id={this.props.id}
            value={this.props.value}
          />
        </div>
        <small>
          {this.state.error}
        </small>
      </div>
    );
  }
}
