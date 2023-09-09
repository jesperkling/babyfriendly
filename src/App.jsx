import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Map from "./components/Map";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
