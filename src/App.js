import React, { Component } from 'react';
import LinkItem from './LinkItem.js';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

//  Form to add a new link
//  LinksView

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      listItems: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleRemoveLinkItem = this.handleRemoveLinkItem.bind(this);
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    if( this.validateLink(this.state.inputValue) ){
      this.addNewLink(this.state.inputValue);
    } else {
      alert('invalid url');
    }
  }

  handleRemoveLinkItem(index){
    const newListItems = (this.state.listItems).slice();
    newListItems.splice(index, 1)

    this.setState({
      listItems: newListItems
    });
  }

  validateLink( url ){
    // Validation
    // https://gist.github.com/dperini/729294
    const urlRegex = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/, 'i');
    return urlRegex.test(url);
  }

  addNewLink( url ){
    const newListItems = (this.state.listItems).slice();
    newListItems.push(url);

    this.setState({
      listItems: newListItems
    });
  }

  render() {
    return (
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="newLink" value={this.state.inputValue} onChange={this.handleChange} />
          <button>+</button>
        </form>

        <div>
          <Row>
            <Col xs={6}>
              {
                this.state.listItems.map((entry, index) =>
                  <LinkItem key={ entry + entry.length } url={entry} onRemove={this.handleRemoveLinkItem} index={index}/>
                )
              }
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default App;
