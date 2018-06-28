import React, {Component} from 'react';

class ContentArea extends Component {
    render(){
        let ogwugo = this.props.contents.join('');
        return (
            <input type="text" value={ogwugo} />
        )
    }
}

export default ContentArea;