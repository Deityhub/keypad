import React, {Component} from 'react';
import ContentArea from './ContentArea';

class KeyPad extends Component {
    constructor(props){
        super(props);
        this.state = {
            outputArray: []
        }
    }

    handleClick(e){
        let param = this.state.outputArray;
        
        if(typeof e == 'number'){
            param.push(e)
            this.setState({
                outputArray: param
            })
        }else if(e == 'BS'){
            param.pop();
            this.setState({
                outputArray: param
            })
        }else if(e == 'OK') {
            alert(param.join(''));
        }
    }

    render(){

        return (
            <div>
                <ContentArea contents={this.state.outputArray}/>
                <div className="calculator-buttons">
                    {
                        this.props.inputKeys.map((curVal)=>{
                            return (
                                <button key={curVal} className="btn" onClick={this.handleClick.bind(this, curVal)}>{curVal}</button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default KeyPad;