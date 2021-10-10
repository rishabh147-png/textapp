import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textutils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="ENTER THE TEXT TO CHANGE !!"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
