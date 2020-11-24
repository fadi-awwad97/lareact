import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import Home from './Home';
import Category from './containers/categories';

function App() {
    return (
  
      <main>
               
          
              <Switch>
                  <Route path="/" component={Login} exact />
                  <Route path="/home" component={Home} />
                  <Route path="/categ" component={Category} />

                  {/* <Route path="/reservation" component={Reserve} />
                  <Route path="/owner" component={OwnerPage}  /> */}
               
              </Switch>
       
  
      </main>
    );
  }
  
  export default App;