import "./App.css";
import IndexPage from "./components/IndexPage/IndexPage.js";
import { useNavigate, Routes, Route } from "react-router-dom";
import { Loading } from './components/Loading/Loading';

function App() {
  return (
    <Routes>
    <Route path="/" element={<IndexPage navigate={useNavigate()} />} />
    <Route path="/game" element={<Loading navigate={useNavigate()} />} />
  </Routes>
  );
}

export default App;