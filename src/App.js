// import logo from "./logo.svg";
import "./App.css";

import EquationResult from "./components/EquationResult";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <EquationResult />
            <Input />
            <Button />
            <div>Znak</div>
            <div>Znak</div>
            <div>Znak</div>
            <div>Znak</div>
        </div>
    );
}

export default App;
