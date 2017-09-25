import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Form , Segment , Input} from 'semantic-ui-react';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '',
    lname:'',
    add:''};
  
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleFname(event){
    this.setState({fname: event.target.value});
  }
  handleLname(da){
    this.setState({lname: da.target.value});
  }
  handleAdd(event){
    this.setState({add: event.target.value});
  }
  handleClear(){
    this.setState({fname:'',lname:'',add:''})
  }
  render() {
    return (
      <div>
        <Segment inverted>
          <Form inverted  >
              <Form.Input label='First name' placeholder='First name' value={this.state.fname} onChange={this.handleFname}/>
              <Form.Input label='Last name' placeholder='Last name' value={this.state.lname} onChange={this.handleLname} />
              <Form.TextArea label='Address' placeholder='Enter your Address'value={this.state.add} onChange={this.handleAdd} />
              <Form.Group>
                <Link to="/Page"><Form.Button content="Submit" /></Link>
                <Form.Button content="Clear" onClick={this.handleClear} />
              </Form.Group>
          </Form>
        </Segment>
      </div>
    )
  }
}

export default App;
