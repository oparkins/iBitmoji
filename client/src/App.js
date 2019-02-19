import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bitmojiIDError: false, 
      bitmojiID: ""
    };
  }

  validateBitmojiID = name => event => {
    this.setState({ bitmojiID: event.target.value });
    if(this.state.bitmojiID !== "")
    {
      //d7b64a81-626c-4920-a261-3b28b443d7aa
      var regexChecker = /[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}/g;
      var result = regexChecker.exec(event.target.value);

      if(result == null) {
        this.setState({bitmojiIDError: true});
      }
      else
      {
        if(result[0].length !== event.target.value.length)
        {
          this.setState({bitmojiIDError: true});
        }
        else 
        {
          this.setState({bitmojiIDError: false});
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              iBitmoji - A Bitmoji Client
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          error = {this.state.bitmojiIDError}
          id="outlined-name"
          label="Enter your Bitmoji ID:"
          value={this.state.bitmojiID}
          onChange={this.validateBitmojiID('bitmoji')}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default App;
