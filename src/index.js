import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { IntlProvider } from "react-redux-multilingual";
import "./index.scss";
import "animate.css/animate.min.css";

// Import custom components
import store from "./store";
import translations from "./constants/translations";

// Layouts
import Home1 from "./components/home-1";
// Pages
import PageNotFound from "./components/404";

// Features
import Layout from "./app";

import { getAllData } from "./actions";

class Root extends React.Component {
  render() {
    store.dispatch(getAllData());
    return (
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <BrowserRouter basename={"/"}>
            <ScrollContext>
              <Switch>
                <Layout>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home1} />
                  {/*Pages*/}
                </Layout>
              </Switch>
            </ScrollContext>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
