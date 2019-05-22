import React, { Component } from 'react';
import FormContext from './api-context';

class FormInfo extends Component {

  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.tokenRef = React.createRef();
  }

  static contextType = FormContext;

  handleSumbit = () => {
    const name = this.nameRef.current.value;
    const token = this.tokenRef.current.value;
    this.context.changeName(name, token);
    this.nameRef.current.value = '';
    this.tokenRef.current.value = '';
  }

  render () {
    return(
        <div className="mx-auto mb-5" style={{width: '400px'}}>
            <div>
              <span className="mr-5"><strong>Your Name</strong></span>
              <label htmlFor="name">{this.context.name}</label>
            </div>
            <div>
              <span className="mr-5"><strong>Token</strong></span>
              <label htmlFor="token">{this.context.token}</label>
            </div>
            <div className="mx-auto" style={{width: '400px'}}>
              <input className="mb-2" type="text" id="name" placeholder="Name" ref={this.nameRef} /> <br/>
              <input className="mb-4" type="password" id="token" placeholder="Token" ref={this.tokenRef} /> <br/>
              <button className="ml-5 btn btn-dark" onClick={this.handleSumbit}>Confirm</button>
            </div>
        </div>
  )}
}

export default FormInfo;