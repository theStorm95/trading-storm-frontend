import { Routes, Route } from "react-router-dom";
import HealthContainer from "./components/Health/HealthContainer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Hello World!</h1>
          </div>
        }
      />
      <Route path="/health" element={<HealthContainer />} />
    </Routes>
  );
}

export default App;
