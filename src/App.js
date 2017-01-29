import React, {Component} from 'react';
import Editor from './editor/Editor';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
injectTapEventPlugin();

import store from './store/store';
const history = syncHistoryWithStore(browserHistory, store)
window.hist = history;
class App extends Component {
  constructor(props) {
    super(props);
    this.cool = "rad"
  }
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Router ref={r=>window.r = r} history={history}>
            <Route path="/:room_id" component={Editor}>

                  </Route>
                  <Redirect from="/" to="/default" />



      </Router>
    </MuiThemeProvider>

      </Provider>
    );
  }
}

export default App;
