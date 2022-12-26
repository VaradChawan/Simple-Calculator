import Calculator from "./components/Calculator";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Greeting heading="Greeting App" />}
          />
          <Route
            exact
            path="/counter"
            element={<Counter appTitle="Counter App" />}
          />
          <Route
            exact
            path="/calculator"
            element={<Calculator heading="Calculator" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
