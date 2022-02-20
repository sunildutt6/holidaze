import React from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Hotel from "../../pages/hotels/Hotels";
import Detail from "../../pages/detail/Detail";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import { AuthProvider } from "../../context/AuthContext";
import Admin from "../../pages/admin/Admin";
import PostHotel from "../../pages/admin/posts/PostHotel";
import AddHotel from "../../pages/admin/posts/AddHotel";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" exact component={Hotel} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/posts" exact component={PostHotel} />
          <Route path="/admin/posts/add" exact component={AddHotel} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
