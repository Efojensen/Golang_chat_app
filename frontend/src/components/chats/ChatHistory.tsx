import { Component } from 'react'

interface ChatHistoryProps {
    chatHistory: {data: string}[]
}

class ChatHistory extends Component<ChatHistoryProps> {
    render() {
        const messages = this.props.chatHistory.map((msg, index) => (
            <p key={index}>{msg.data}</p>
        ));

        return (
            <div className='bg-[#f7f7f7] m-0 p-5'>
                <h2 className='m-0 p-0 font-semibold text-3xl'>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;