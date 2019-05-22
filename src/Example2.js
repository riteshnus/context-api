import React, { Component } from 'react';
import FormContainer from './FormContainer';
import FormContext from './api-context';

class Example2 extends Component {

  state = {
    name : '',
    token: ''
  }

  changeName = (name, token) => {
    this.setState({
      name: name,
      token: token
    })
  }

  clearValue = () => {
    this.setState({
      name: '',
      token: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <FormContext.Provider 
          value={{
            name: this.state.name,
            token: this.state.token,
            changeName: this.changeName,
            clearValue: this.clearValue
          }}>
            <div className="border border-primary m-5 p-5">
              <FormContainer/>
            </div>
        </FormContext.Provider>
      </React.Fragment>
    )
  }
};

export default Example2;