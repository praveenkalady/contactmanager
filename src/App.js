import React from 'react';
import { HashRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import './App.css';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';
import AddContacts from './components/contacts/AddContacts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';



function App() {
  return (
    <Provider>
    <Router>
    <div className="app">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/add" component={AddContacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/edit/:id" component={EditContact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
