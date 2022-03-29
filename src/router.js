import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

/****site route*****/
//  Home page
const MainPage = lazy(() => import("./pages/Main/MainPage"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Contact = lazy(() => import("./pages/Contact"));
const Art = lazy(() => import("./pages/Art"));
const Ourwork = lazy(() => import("./pages/Ourwork"));
const Agency = lazy(() => import("./pages/Agency"));
const About = lazy(() => import("./pages/About"));
// const Offer = lazy(() => import("./pages/Offer"));

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/corporate" component={Corporate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/art" component={Art} />
        <Route exact path="/project" component={Ourwork} />
        <Route exact path="/agency" component={Agency} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/offer" component={Offer} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
