import React, {Component} from 'react';
import Layout from '../src/UI/Layout';
import UsersProfile from '../src/Components/UsersProfile/UsersProfile';
import User from '../src/Components/User/User';
import Toolbar from '../src/UI/Toolbar';


import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Toolbar />
          <Switch>
           
            <Route path='/user' component={User} />
            <Route path='/' exact component={UsersProfile} />   
            
          </Switch>
        </Layout>
      </div>
    )
  }
}


export default App;
