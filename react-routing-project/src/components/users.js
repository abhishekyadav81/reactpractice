import React from 'react'


class User extends React.Component {

    render() {


        return (
            <div>

                <h2> User Page : {this.props.match.params.id}</h2>
                
             </div>   

        );

    }


}


export default User;