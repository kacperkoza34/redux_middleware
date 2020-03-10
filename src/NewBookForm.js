import React from 'react';

class NewBookForm extends React.Component {
  state = {
    input: '',
  }
  handleChange = (e) =>{
    this.setState({input: e.target.value});
  }
  sendBook = (isValid) => {
    if(isValid){
      this.props.addBook(this.state.input);
      this.setState({input: ''});
    }
  }
  render(){
    const isValid = this.state.input.length && this.state.input.trim().length && this.state.input.length < 30;
    return (
      <div className='form'>
        <input value={this.state.input} onChange={event => this.handleChange(event)}></input>
        <div>{ isValid? '' : 'Add title'}</div>
        <button onClick={() => this.sendBook(isValid)}><span>Add book</span></button>
      </div>
    )
  }
}

export default NewBookForm;
