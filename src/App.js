import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import School from "./pages/School";
import Individual from "./pages/Individual";
// import { ProjectContext } from "../../contexts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/school" element={<School />} />
            <Route path="/:id" element={<Individual />} />
        </Routes>

    );
}

export default App;
