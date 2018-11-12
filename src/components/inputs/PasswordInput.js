import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const faEyeIcon = <FontAwesomeIcon icon={faEye} />;
const faEyeSlashIcon = <FontAwesomeIcon icon={faEyeSlash} />;

export default class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.showHide = this.showHide.bind(this);
    this.state = {
      type: 'password',
      error: ""
    };
  }
  handleFocus() {
    //console.log("input underline must be blue");
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
    console.log(this.props.id);
    console.log("keyup: check input value, if format correct, then hide the error message");
  }
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    });
  }
  render() {
    let eyeIcon;
    if(this.state.type === 'input') {
      eyeIcon = <span toggle={this.props.id} className="fa fa-fw field-icon toggle-password" onClick={this.showHide} >{faEyeSlashIcon}</span>;
    } else {
      eyeIcon = <span toggle={this.props.id} className="fa fa-fw field-icon toggle-password" onClick={this.showHide} >{faEyeIcon}</span>;
    }
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
            type={this.state.type}
            data-toggle="tooltip"
            data-html="true"
            data-placement="right"
            autocomplete="off"
            title='<div align="left"><small>6-20 characters</small><br /><small>At least 1 uppercase letter</small><br /><small>At least i number</small></div>'
          />
          {eyeIcon}
        </div>
        <small>
          {this.state.error}
        </small>
      </div>
    );
  }
}
