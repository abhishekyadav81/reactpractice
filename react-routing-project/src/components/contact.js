import React from 'react'


class Contact extends React.Component{




clickMe(){
  console.log('Clicked !');
this.props.history.push('/');
}


render(){

return(  

/* <div>
    <h3> About Page </h3>
</div> */


<div className="jumbotron">
  <h1>Contact Page</h1>
   <p>
    <a className="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs &raquo;</a>
    <button onClick={this.clickMe.bind(this)}> Click Me</button>
  </p> 
</div>


);

}


}


export default Contact;