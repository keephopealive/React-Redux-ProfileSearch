import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PersonDetails from './scenes/PersonDetails';
import PersonSearch from './scenes/PersonSearch';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route exact path="/" component={PersonSearch} />
                    <Route exact path="/profile/:id" render={ (props) => <PersonDetails {...props} />} />
                    <Route exact path="/profile" component={PersonDetails} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
