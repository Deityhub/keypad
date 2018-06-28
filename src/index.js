import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import KeyPad from './component/KeyPad';

class App extends Component {
    render(){
        const inputKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'BS' , 0, 'OK'];

        return (
            <div>
               <div className="calculator">
                 <KeyPad inputKeys={inputKeys}/>
               </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

