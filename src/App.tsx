import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "@/views/Search";
import DoctorPage from "@/views/Doctor";
import BookingPage from "@/views/Book";
import SuccessPage from "@/views/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/doctors/:doctorId" element={<DoctorPage />} />
        <Route path="/doctors/:doctorId/book/:timeSlot" element={<BookingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </Router>
  );
}

export default App;
