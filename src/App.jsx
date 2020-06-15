import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PageLayout from './components/PageLayout';
import TwoColumnLayout from './components/TwoColumnLayout';
import Profile from './components/Profile';
import AllTickets from './components/AllTickets';
import AddTicketsForm from './components/AddTicketsForm';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div>
      <PageLayout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <TwoColumnLayout />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/newticket" exact>
              <AddTicketsForm />
            </Route>
            <Route path="/alltickets" exact>
              <AllTickets />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </PageLayout>
    </div>
  );
}

export default App;
