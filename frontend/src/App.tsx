import './App.css';
import { Component } from 'react';
import { connect, sendMsg } from "./api";
import Header from './components/header';
import ChatHistory from './components/chats';
import ChatInput from './components/chatInput';

class App extends Component {
  constructor(props: string) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount(): void {
      connect((msg) => {
        console.log('New Message')
        this.setState(prevState => ({
          chatHistory: [...this.state.chatHistory, msg]
        }))
        console.log(this.state);
      });
  }

  send(event) {
    if (event.keycode === 13){
      sendMsg(event.target.value);
      event.target.value = ""
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send}/>
        {/* <button onClick={this.send} className='bg-blue-500 p-2 ml-7 w-[80px] rounded-xl hover:cursor-auto'>Hit</button> */}
      </div>
    );
  }
}

export default App
