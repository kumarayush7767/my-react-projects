import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import '../css/style.css';
export default function Dropdown() {
  return (
    <Router>
        <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home" className="logo">geomagnify</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home" className="links">Home</Link>
          <Link to="/about" className="links">About Us</Link>
          <Link to="/techniques" className="links service">Our Services</Link>
          <Link to="/clients" className="links">Our Clients</Link>
          <Link to="/bolg" className="links">Blog</Link>
          <Link to="/portfolio" className="links">Portfolio</Link>
          <Link to="/contact" className="links">Contact Us</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/techniques">
            <Techniques />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Techniques() {
  let match = useRouteMatch();

  return (
    <div className="services">
      <h2>Techniques</h2>

      <ul>
        <li>
          <Link to={`${match.url}/seismic-refraction`}>Seismic Refraction</Link>
        </li>
        <li>
          <Link to={`${match.url}/electrical-resistivity-imaging`}>
            Electrical Resistivity Imaging
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/remi-refraction-micro-tremor`}>
            Refraction Micro-tremor
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/crosshole-downhole-uphole-surveys`}>
            Crosshole/downhole/uphole Suerveys
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:techniquesId`}>
          <Technique />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Technique() {
  let { techniquesId } = useParams();
  return <h3>Requested Techniques ID: {techniquesId}</h3>;
}
