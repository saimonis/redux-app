import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ErrorBoundary from "./components/error-boundary";
import {BookstoreServiceProvider} from "./components/contexts"
import store from "./store"
import BookStoreService from "./services/bookstore-service"
import HomePage from "./pages/home-page";
import CartPage from "./pages/cart-page";



const service = new BookStoreService;

const app = (
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={service}>
                <Router>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/cart/">Cart</Link></div>
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/cart/" component={CartPage}/>
                    </Switch>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
)

ReactDOM.render(
    app
, document.getElementById('root'));

