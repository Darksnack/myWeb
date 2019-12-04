/*
 * @Description: 
 * @Version: 1.0
 * @Date: 2019-12-02 09:12:00
 * @LastEditTime: 2019-12-02 10:04:04
 */
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './page/Home/Home'

class App extends React.Component{
  render() {
    return (
      <Router >
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}
export default App;
