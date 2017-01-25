import React, { Component } from 'react';
import './App.css';
// components

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ''
    }
  }
  render() {
    const toDoItems = this.state.items.map(item => {
      return <li>{item}</li>
    });

    return (
        <div className='App'>
          <form onSubmit={(event) => this.addListItem(event)}>
            <input type="text" value={this.state.value} onChange={(event) => this.resultChange(event)} />
          </form>
          <ul>{toDoItems}</ul>
        </div>
    );
  }

addListItem(event){
  event.preventDefault();
  const newItems = this.state.items;
  let value = this.state.value;
  newItems.push(value);
  this.setState({items: newItems});
  value = '';
  this.setState({value: ''});
}
resultChange(event){
  this.setState({value: event.target.value});
}
}

export default App;
