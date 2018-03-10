import React from 'react'

class Counter extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            data :0
        }
    }

    setNewNumber(){
        this.setState({data: this.state.data+1})
    }


    render(){
        return (

                <div>
                    <h2> Counter Component : <Content myNum={this.state.data}/></h2>
                    setTimeout(() => {
                        this.setNewNumber.bind(this)
                    }, 1000);
                    <button className="btn btn-success" onClick={this.setNewNumber.bind(this)} >
                    Increase
                    </button>
                    

                </div>
        )
    }
}

class Content extends React.Component{
// dumb component, does not have it's own props / state

    constructor(){
        super();
        console.log('Constructor Invoked');
    }

    componentWillMount(){
        console.log('Component Will Mount Invoked');
    }


    render(){
    return (

        <div>
            <h2> Counter : {this.props.myNum} </h2>

        </div>

)
    }
componentDidMount(){
    console.log('Component Did Mount Invoked');
    }

    componentWillReceiveProps(){
        console.log('Component Will Receive Props Invoked');
        }
    
        shouldComponentUpdate(){
            console.log('Should Component Update Invoked');
            return true;
        }

        componentWillUpdate(){
            console.log('Component will Update Invoked');
        }
        componentDidUpdate(){
            console.log('Component Did Update Invoked');
        }
        componentWillUnmount(){
            console.log('Component Will Unmount Invoked');
        }


}

export default Counter;
