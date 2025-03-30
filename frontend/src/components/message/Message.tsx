import { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        return <div className='block bg-white my-[10px] mx-auto py-[10px] px-5 rounded-[5px] clear-both'>{this.state.message.body}</div>
    }
}

export default Message;