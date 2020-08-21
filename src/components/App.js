import React from 'react';
import {
  Box
} from '@chakra-ui/core'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login, Register, AddBio, Home } from './pages'


function App() {
  return (
    <Box className="App" background="#2b3237">
      <Router>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/register" component={Register} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/add-bio" component={AddBio} exact/>
            </Switch>
      </Router>
    </Box>
  );
}

export default App;
