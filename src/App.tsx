import Home from "./components/Home";
import CharacterList from "./components/Characters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/personagens" element={<CharacterList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
