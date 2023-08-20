import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" />
        <Alert Alert="This is alert" />
        <div className="container">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route> */}

            {/* <Route path="/"> */}
              <TextForm heading="Enter the text to analyze" />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
