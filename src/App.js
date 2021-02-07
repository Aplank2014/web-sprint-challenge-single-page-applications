import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';
import Confirmation from './Components/Confirmation';

const App = () => {
  const [orders, setOrders] = useState([]);

  return (
    <div className="App">
      <div className='header'>
        <nav>
          <h1>Lambda Eats</h1>
          <div className='nav-link'>
            <Link id='nav-home' to='/'style={{paddingLeft: 13, textDecoration: 'none' }} >Home</Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path='/pizza'>
          <Form orders={orders} setOrders={setOrders}/>
          <Confirmation orders={orders}/>
        </Route>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;