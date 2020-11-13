import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import ProductItem from './components/ProductItem';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Nav />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route path='/products/:id' component={ProductItem} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
