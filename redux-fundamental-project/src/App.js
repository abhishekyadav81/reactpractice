import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from "./actions/contactAction"
//import logo from './logo.svg';
import './App.css';

// connect() 
// function 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange(e) {
    this.setState ({
      name: e.target.value
    })
    console.log('e.target.value '+e.target.value);
    console.log('this.state.name '+this.state.name);
  }

  handleSubmit(e) {
    e.preventDefault();

    let contact={
      name:this.state.name
    }

    console.log("NAME "+this.state.name);
    this.props.createContact(contact);
  }

  render() {
    return (
      <div>
        <h2>contact Details</h2>
        <hr />
        <ul>
          {
            this.props.contacts.map((contact, i) =>
              <li key={i}>
                {contact.name}
              </li>
            )
          }


        </ul>

        <h2>Add contact form</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
