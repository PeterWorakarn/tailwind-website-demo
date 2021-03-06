import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import useReducer1 from './routes/useReducer1';
import useReducer2 from './routes/useReducer2';
import PhoneBook from './routes/PhoneBook';
import reduxCRUD from './routes/reduxCRUD';
import Pixabay from './routes/Pixabay';
import SearchSuggestion from './routes/SearchSuggestion';
import DynamicForm from './routes/DynamicForm';
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
            <Route path="/phonebook" component={PhoneBook} />
            <Route path="/searchsuggestion" component={SearchSuggestion} />
            <Route path="/dynamicform" component={DynamicForm} />
            <Route path="/reduxcrud" component={reduxCRUD} />
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
