import React from 'react'
import {createStore} from 'redux'


class ReduxDemo extends React.Component {

    render() {

        //2. Create Reducer : prevState, Action
        const reducer = function(state,action){
            if(action.type==='ATTACK'){
                return action.payload;
            } else if(action.type==='GREEN_ATTACK'){
                return action.payload;
            } else {
                return state;
            }
        }

        //1.  Create Store(Reducer, InitialState)
        const store = createStore(reducer,'Peace');

        //3. Subscribe
        store.subscribe(() => {
            console.log('Store is now ready.', store.getState())
        });

        //4. Dispatch
        store.dispatch({type:'ATTACK', payload:'IRON MAN'})
        store.dispatch({type:'GREEN_ATTACK', payload:'JAMES BOND'})

        return (
            <div>
                <h2> Redux Demo Component</h2>
            </div>
        )
    }
}

export default ReduxDemo;