import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home"; // This should include the SearchItemsList
import Hotel from "./pages/hotel/Hotel"; // This is your hotel detail page
import List from "./pages/list/List"; // This could be your hotel list page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:name" element={<Hotel />} /> {/* Updated to match hotel name */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;