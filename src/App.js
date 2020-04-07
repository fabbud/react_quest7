import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const quotes = {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  }


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      card: quotes
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
   // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
   // Extract the DATA from the received response
    .then(response => response.data)
   // Use this data to update the state
    .then(data => {
     console.log(data)
     this.setState({
       card: data[0],
     });
    });
  }

  render(){
    return (
      <>
        <QuoteCard card={this.state.card} />
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </>
    )
  }
}

export default App;
