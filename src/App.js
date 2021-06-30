import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import useReducer1 from './routes/useReducer1';
import useReducer2 from './routes/useReducer2';
import Pixabay from './routes/Pixabay';
import InfinityScroll from './routes/InfinityScroll';
import Notfound from './routes/Notfound';

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Suspense fallback={<div />}>
          <Header />
        </Suspense>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/usereducer1" component={useReducer1} />
            <Route path="/usereducer2" component={useReducer2} />
            <Route path="/infinityscroll" component={InfinityScroll} />
            <Route path="/pixabay" component={Pixabay} />
            <Route path="*" component={Notfound} />
          </Switch>
        </main>
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
