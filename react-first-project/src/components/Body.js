import React from "react";
import logo from "../logo.svg";
import CheckLoginStatus from "./CheckLoginStatus";

const styles = {
    para1: {
        fontWeight : 'bold',
        color : 'red',
        fontSize : '20px'
    },
    para2: {
        fontWeight : 'bold',
        color : 'green',
        fontSize : '20px'
    }
}

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn : false
        }
    }

    receiveClick() {
        this.setState({isLoggedIn: !this.state.isLoggedIn})
        console.log('isLoggedIn'+!this.state.isLoggedIn);
    }

    getDefaultProps() {
        return {
            title: 'React Fundamentals session 1'
        }
    }
    render() {
        return (
            <div>
                <h2>Body Section</h2>
                <p style={styles.para1}>This is paragraph 1 </p>
                <p style={styles.para2}>This is paragraph 2 </p>
                <img style={{width:100,height:100}} src={logo} alt="j"></img>
                <p>Your status is : {this.state.isLoggedIn?'Your are logged in':'You are logged off'}</p>

                <CheckLoginStatus hitclick={this.receiveClick.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default Body;