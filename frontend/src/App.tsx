import './App.css';
import { Component } from 'react';
import { connect, sendMsg } from "./api";
import Header from './components/Header';
import ChatHistory from './components/chats';

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

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <button onClick={this.send} className='bg-blue-500 p-2 ml-7 w-[80px] rounded-xl hover:cursor-auto'>Hit</button>
      </div>
    );
  }
}

export default App
