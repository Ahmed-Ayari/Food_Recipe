import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./page/home";
import Favorites from "./page/favorites";
import Details from "./page/details";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
