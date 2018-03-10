import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h2>Footer Section</h2>
                <p>{this.props.text}</p>
                <p>{this.props.copyright}</p>
            </div>
        );
    }
}

export default Footer;