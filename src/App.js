import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import useReducer1 from './routes/useReducer1';
import useReducer2 from './routes/useReducer2';
import InfinityScroll from './routes/InfinityScroll';
import Notfound from './routes/Notfound';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Header />
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/useReducer1" component={useReducer1} />
            <Route path="/useReducer2" component={useReducer2} />
            <Route path="/InfinityScroll" component={InfinityScroll} />
            <Route path="*" component={Notfound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
