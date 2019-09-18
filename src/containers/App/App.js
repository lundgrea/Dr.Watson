import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, clearStoredMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     messages: []
  //   }
  // }

  //passed down to WelcomeModal and ChatBox
  // addMessage = (message, isUser) => {
  //   const { messages } = this.state;
  //   this.setState({ messages: [...messages, { message, isUser }]});
  // }

  // clearMessages = () => {
  //   this.setState({ messages: [] });
  // }

  //passed down to Header
  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.props.clearStoredMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    // const { messages } = this.state;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal />}
        {user && <ChatBox />}
      </div>
    );
  }
}

//allows for conditional rendering of the Modal and ChatBox
export const mapStateToProps = ({ user }) => ({
  user,
});

//both methods related to signOut
export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored, clearStoredMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
