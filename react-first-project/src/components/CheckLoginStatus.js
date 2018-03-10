import React from "react";

class CheckLoginStatus extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn : false
        }
    }

    render() {
        return (
            <div>
                <h2>Body Section</h2>
                <button onClick={()=>this.props.hitclick()}> {this.props.isLoggedIn?'Logout':'Login'}</button>
            </div>
        );
    }
}

export default CheckLoginStatus;