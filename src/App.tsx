import { Routes, Route } from "react-router-dom";
import HealthContainer from "./components/Health/HealthContainer";

function App() {
  return (
    <Routes>
      <Route path="/health" element={<HealthContainer />} />
    </Routes>
  );
}

export default App;
