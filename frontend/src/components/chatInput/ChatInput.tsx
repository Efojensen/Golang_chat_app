import { Component } from 'react';

class ChatInput extends Component {
    render() {
        return (
            <div className='w-[95%] block m-auto'>
                <input onKeyDown={this.props.send} className='p-2.5 m-0 text-[16px] border-none rounded-[5px] w-[98%] border-black shadow-2xl bg-amber-300'/>
            </div>
        )
    }
}

export default ChatInput